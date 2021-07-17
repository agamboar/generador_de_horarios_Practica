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

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

USER_ID = '6'
N_TEST_CASES = 6

def test_build_PERT(setupOferta):
    try:
        (codigos_asignaturas_cursadas, codigos_ramos_malla) = prepare_PERT_test(userId=USER_ID, caseName='case1')
        PERT = build_PERT(codigos_asignaturas_cursadas, codigos_ramos_malla)
        # for x in PERT: print(x) -> x es el codigo
    except Exception:
        traceback.print_exc()
        assert False


def test_early_start(setupOferta):
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