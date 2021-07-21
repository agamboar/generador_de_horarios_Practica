from inspect import trace
import traceback
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from dictdiffer import diff
from ..clique_algorithm import clique_actual as clique, clique_v1_modular as clique_v1

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"
SKIP = False

USER_ID = '6'
AREA_LIMIT = 2
N_TEST_CASES = 6

@pytest.mark.skipif(SKIP, reason='_')
def test_getData(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        clique.getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
    except Exception:
        traceback.print_exc()
        assert False

@pytest.mark.skipif(SKIP, reason='_')
def test_getGraphNodes(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        data = clique.getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
        asignaturas = data['asignaturas']
        G = clique.getGraphNodes(asignaturas)
        # print('G: ', G)
        # print('G.nodes: ', G.nodes)
        # print('G.nodes.items(): ', G.nodes.items())
        # print('list(G.nodes.items()): ', list(G.nodes.items()))
    except Exception:
        traceback.print_exc()
        assert False

@pytest.mark.skipif(SKIP, reason='_')
def test_addEdges(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        data = clique.getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
        asignaturas = data['asignaturas']
        G = clique.getGraphNodes(asignaturas)
        clique.addEdges(G)

    except Exception:
        traceback.print_exc()
        assert False

@pytest.mark.skipif(SKIP, reason='_')
def test_getSolution_A(setupOferta):
    try:
        for i in range(1, N_TEST_CASES+1):
            caseName = 'case' + str(i)
            prepareCliqueTest(USER_ID, caseName=caseName)
            G = clique.setupGraph(USER_ID, cfgAreaLimit=2)
            (solution, fmtSolution) = clique.getSolution_A(G)

            for i in range(0, len(solution)-1):
                for j in range(i+1, len(solution)):
                    nodeA = solution[i]
                    nodeB = solution[j]
                    if not clique.seccionesCompatibles(nodeA, nodeB): 
                        assert False                     
    except Exception:
        traceback.print_exc()
        assert False

def test_prerrequisitos(setupOferta):   
    for i in range(1, N_TEST_CASES+1):
        caseName = 'case' + str(i)
        prepareCliqueTest(USER_ID, caseName=caseName)
        G = clique.setupGraph(USER_ID, cfgAreaLimit=2)
        (solution, fmtSolution) = clique.getSolution_A(G)

        print('caso : ', caseName)
        for secc in fmtSolution:
            codigo = secc['cod_asignatura_real']
            nombre = secc['nombre']

            codigos_asignaturas_cursadas = list(asignatura_cursada.objects.filter(to_User=USER_ID).values_list('codigo', flat=True))
            prerrequisitos = asignatura_real.prerrequisito.through.objects.filter(
                from_asignatura_real_id=codigo
            ).values_list('to_asignatura_real_id', flat=True)

            for preq in prerrequisitos:
                ok = True
                if preq not in codigos_asignaturas_cursadas:
                    ok = False
                    print('\nsolucionFmt: \n', fmtSolution)
                    print('\nsolucion: \n', solution)
                    print('falta prerreq ', preq, 'de ramo ', nombre )
                    print('codigos asig cursadas: \n', codigos_asignaturas_cursadas)
                    # equivalencias = asignatura_real.objects.filter(equivale=preq).values_list('codigo', flat=True)
                    equivalencias = []
                    equivalencias.extend(
                        asignatura_real.equivale.through.objects.filter(
                            from_asignatura_real_id=preq
                        ).values_list('to_asignatura_real_id', flat=True)
                    )
                    equivalencias.extend(
                        asignatura_real.equivale.through.objects.filter(
                            to_asignatura_real_id=preq
                        ).values_list('from_asignatura_real_id', flat=True)
                    )
                    print('equivalencias: ', equivalencias)
                    for eq in equivalencias: 
                        if eq in codigos_asignaturas_cursadas: 
                            ok = True
                            print('se encontro equivalencia')
                if not ok:
                    print('ramo: ', preq)
                    print('equivalentes: ', equivalencias)
                    print('asignaturas cursadas: ', codigos_asignaturas_cursadas)          
                assert ok, 'ramo '+nombre+' no cumple prerrequisitos, '+caseName

@pytest.mark.skipif(SKIP, reason='_')
def test_getRecommendations(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        G = clique.setupGraph(userId=USER_ID, cfgAreaLimit=2)

        (recommendations, weightList)= clique.getRecommendations(G, amount=5, solutionType='A')
        # for item in recommendations: print('recom: \n', item)
    except Exception:
        traceback.print_exc()
        assert False

# TODO: modificar getSolutionWeight_v1 para poder compararlos
@pytest.mark.skip(reason='añadir restricciones de requisitos a clique actual causa que algunos casos tengan menor peso maximo')
def test_compare_v1_actual(setupOferta):
    try:
        for i in range(1, N_TEST_CASES+1):
            caseName = 'case' + str(i)
            prepareCliqueTest(USER_ID, caseName=caseName)

            (_, solutions_v1) = clique_v1.get_clique_max_pond(USER_ID)

            G = clique.setupGraph(userId=USER_ID, cfgAreaLimit=2)
            (_, solutions_actual) = clique.getRecommendations(G, amount=5, solutionType='A')

            weight_v1 = getSolutionWeight_v1(solutions_v1[0])
            weight_actual = getSolutionWeight(solutions_actual[0])

            difference = weight_actual - weight_v1
            print(caseName, ', actual: ', weight_actual, 'v1: ', weight_v1, 'diferencia: ', difference)
            
            if difference < 0:
                print('fallo ', caseName)
                print('v1 peso[0]: ', weight_v1)
                print('actual peso[0]: ', weight_actual)
                print('solucion actual entrega peso menor a v1 en caso ', caseName)
                assert False, caseName
    except Exception:
        traceback.print_exc()
        assert False


def prepareCliqueTest(userId, caseName='case1'):
    jl.loadUser(fileName='users', userId=userId)
    testCase = jl.readJSONFile(folder='Clique/stateTestCases', fileName=caseName) # para tener un estado pre-clique valido
    stc.setState_beforeClique(testCase["stateInput"])

def getSolutionWeight(solution):
    totalWeight = 0
    for node in solution:
        totalWeight += node[1]['prioridad']
    return totalWeight

def getSolutionWeight_v1(solution_v1):
    totalWeight = 0
    for node in solution_v1:
        totalWeight += node[1]
    return totalWeight

def compareSolutionWeights(solType1, solType2):
    prepareCliqueTest(userId=USER_ID)
    G = clique.setupGraph(userId=USER_ID, cfgAreaLimit=2)

    (_,_, weight1) = clique.getSolution(G, solutionType=solType1)
    (_,_, weight2) = clique.getSolution(G, solutionType=solType2)

    if weight1 > weight2:
        print("solucion tipo ", solType1, " tiene mayor peso")
        return 1
    elif weight1 == weight2:
        print("soluciones ",solType1, " y ", solType2 , " tienen el mismo peso")
        return 0
    else:
        print("solucion tipo ", solType2, " tiene mayor peso")
        return -1