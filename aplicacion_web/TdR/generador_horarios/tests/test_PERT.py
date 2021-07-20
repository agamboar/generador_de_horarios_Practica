from inspect import trace
import traceback
from django.core.exceptions import ObjectDoesNotExist
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from dictdiffer import diff
from ..PERT import build_PERT, get_ramos_criticos, get_ramos_PERT
from contextlib import suppress
import networkx as nx
import math

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

USER_ID = '6'
N_TEST_CASES = 9

def test_build_PERT(setupOferta):
    try:
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName='case1')
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        # for x in PERT: print(x) -> x es el codigo
    except Exception:
        traceback.print_exc()
        assert False


def test_prerrequisitos(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        get_ramos_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla, USER_ID)

        ramos_disponibles = nodo_asignatura.objects.filter(
            to_user__id=USER_ID, to_asignatura_real__tipo=0
        ).values('to_asignatura_real', 'es')

        for ramo in ramos_disponibles:
            prerrequisitos = asignatura_real.prerrequisito.through.objects.filter(
                from_asignatura_real_id=ramo['to_asignatura_real']
            ).values_list('to_asignatura_real_id', flat=True)

            if ramo['es'] == 1:
                falsePositive = False
                for prerreq in prerrequisitos:
                    if prerreq not in codigos_asignaturas_cursadas: 
                        falsePositive = True
                assert not falsePositive, caseName
            if ramo['es'] != 1:
                falseNegative = True
                for ramo_malla in codigos_ramos_malla:
                    if (ramo_malla not in codigos_asignaturas_cursadas) and (ramo_malla in prerrequisitos):
                        falseNegative = False
                assert not falseNegative, caseName

def test_minimo_semestres(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)

        codigos_no_cursados = []
        for codigo in codigos_ramos_malla:
            if codigo not in codigos_asignaturas_cursadas: 
                codigos_no_cursados.append(codigo)

        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        ramos_disponibles = get_ramos_criticos(PERT, user_id=USER_ID)
        for ramo in ramos_disponibles:
            # print(ramo.to_asignatura_real.codigo)
            codigo = ramo.to_asignatura_real.codigo
            nombre = ramo.to_asignatura_real.nombre

            ancestros = nx.ancestors(PERT, codigo)
            cant_ancestros = len(ancestros)    
            for node in ancestros: # supone que las practicas se toman en verano, no se consideran para el limite de 6 ramos por semestre.
                asig = asignatura_real.objects.get(codigo=node)
                if 'PRACTICA' in asig.nombre: cant_ancestros -= 1 # TODO:discutir

            minimo_semestres = math.ceil(cant_ancestros/6)

            # if 'PRACTICA' in nombre: continue # TODO:discutir
            # # print(codigo, " -- ", nombre)
            # if 'FINAL' in nombre:
            #     continue
            #     # print(caseName, " ", codigo, '--', nombre)
            #     # print('ES: ', PERT.nodes[codigo]['ES'])
            assert ramo.es > minimo_semestres, 'fallo caso '+caseName+' ramo: '+str(codigo)+' -- '+nombre

def test_predecesors(setupOferta):
    #que todos los predecesores sean prerrequisitos
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        for tup in PERT.nodes.items():
            (node, attributes) = tup
            predecesores = PERT.predecessors(node)
            prerrequisitos = asignatura_real.prerrequisito.through.objects.filter(
                from_asignatura_real_id=node
            ).values_list('to_asignatura_real_id', flat=True)

            for pred in predecesores:
                assert pred in prerrequisitos

def test_early_start(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        for tup in PERT.nodes.items():
            (node, attributes) = tup
            predecesores = PERT.predecessors(node)
            max_pred_ef = 1
            aux_node = ''
            for pred in predecesores:
                if PERT.nodes[pred]['EF'] > max_pred_ef: 
                    max_pred_ef = PERT.nodes[pred]['EF']
                    aux_node = pred
            if attributes['ES'] != max_pred_ef:
                ancestros = nx.ancestors(PERT, node)
                for a in ancestros:
                    simple_path = nx.all_simple_paths(PERT, a, node)
                    # print('ancestro: ', a)
                    # print('simple paths: ', list(simple_path))
            assert attributes['ES'] == max_pred_ef, caseName+' nodo: '+ node+' ef maximo de: '+aux_node

def test_early_finish(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        for tup in PERT.nodes.items():
            (node, attributes) = tup
            assert attributes['EF'] == attributes['ES'] + 1


def test_late_finish(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        for tup in PERT.nodes.items():
            (node, attributes) = tup
            sucesores = list(PERT.successors(node))
            min_sucesor_ls = 100
            if len(sucesores) == 0: min_sucesor_ls = attributes['EF'] # para nodo final
            for sucesor in sucesores:
                if PERT.nodes[sucesor]['LS'] < min_sucesor_ls:
                    min_sucesor_ls = PERT.nodes[sucesor]['LS']
            if attributes['LF'] != min_sucesor_ls:
                print(sucesores)
            assert attributes['LF'] == min_sucesor_ls, caseName+' nodo '+node

def test_late_start(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        for tup in PERT.nodes.items():
            (node, attributes) = tup
            assert attributes['LS'] == attributes['LF'] - 1, caseName+' nodo '+node

def test_holgura(setupOferta):
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName=caseName)
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        for tup in PERT.nodes.items():
            (node, attributes) = tup
            assert attributes['H'] == attributes['LF'] - attributes['EF'], caseName
            assert attributes['H'] == attributes['LS'] - attributes['ES'], caseName

def prepare_PERT_test(userId, caseName='case1'):
    jl.loadUser(fileName='users', userId=userId)
    testCase = jl.readJSONFile(folder='PERT/stateTestCases', fileName=caseName)
    stateInput = testCase['stateInput']
    stc.setState_beforePERT(stateInput)

    codigos_asignaturas_cursadas = asignatura_cursada.objects.filter(to_User=USER_ID).values_list('codigo', flat=True)
    codigos_ramos_malla = asignatura_real.objects.filter(
        malla_curricular__agno=stateInput['tabla_avance']['agno_malla'],
        tipo=0
    ).values_list('codigo', flat=True)
    with suppress(ObjectDoesNotExist): nodo_asignatura.objects.filter(to_user=USER_ID).delete()

    return codigos_asignaturas_cursadas, codigos_ramos_malla