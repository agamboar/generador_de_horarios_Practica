from inspect import trace
import traceback
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from dictdiffer import diff
from ..clique_algorithm import clique_actual as clique

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

USER_ID = '6'
AREA_LIMIT = 2

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
        prepareCliqueTest(userId=USER_ID)
        G = clique.setupGraph(userId=USER_ID, cfgAreaLimit=2)

        (solution, fmtSolution, totalWeight) = clique.getSolution_A(G)

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

def prepareCliqueTest(userId):
    jl.loadUser(fileName='users', userId=userId)
    testCase = jl.readJSONFile(folder='Clique/stateTestCases', fileName='case9') # para tener un estado pre-clique valido
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