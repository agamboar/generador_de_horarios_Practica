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

USER_ID = '6'
AREA_LIMIT = 2
N_TEST_CASES = 9

def test_getData(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        clique.getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
    except Exception:
        traceback.print_exc()
        assert False

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

def test_getSolution_A(setupOferta):
    try:
        for i in range(1, N_TEST_CASES+1):
            caseName = 'case' + str(i)
            prepareCliqueTest(USER_ID, caseName=caseName)
            G = clique.setupGraph(USER_ID, cfgAreaLimit=2)
            (solution, fmtSolution, totalWeight) = clique.getSolution_A(G)

            for i in range(0, len(solution)-1):
                for j in range(i+1, len(solution)):
                    nodeA = solution[i]
                    nodeB = solution[j]
                    if not clique.seccionesCompatibles(nodeA, nodeB): 
                        assert False                     
    except Exception:
        traceback.print_exc()
        assert False

def test_getRecommendations(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        G = clique.setupGraph(userId=USER_ID, cfgAreaLimit=2)

        (recommendations, weightList)= clique.getRecommendations(G, amount=5, solutionType='A')
        # for item in recommendations: print('recom: \n', item)
    except Exception:
        traceback.print_exc()
        assert False

def test_compare_v1_actual(setupOferta):
    try:
        for i in range(1, N_TEST_CASES+1):
            caseName = 'case' + str(i)
            prepareCliqueTest(USER_ID, caseName=caseName)

            (_, recom_v1_weights) = clique_v1.get_clique_max_pond(USER_ID)
            G = clique.setupGraph(userId=USER_ID, cfgAreaLimit=2)
            (_, recom_actual_weights) = clique.getRecommendations(G, amount=5, solutionType='A')
            
            if recom_v1_weights[0] > recom_actual_weights[0]:
                print('v1 peso[0]: ', recom_v1_weights[0])
                print('actual peso[0]: ', recom_actual_weights[0])
                print('solucion actual entrega peso menor a v1 en caso ', caseName)
                assert False
    except Exception:
        traceback.print_exc()
        assert False


def prepareCliqueTest(userId, caseName='case9'):
    jl.loadUser(fileName='users', userId=userId)
    testCase = jl.readJSONFile(folder='Clique/stateTestCases', fileName=caseName) # para tener un estado pre-clique valido
    stc.setState_beforeClique(testCase["stateInput"])

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