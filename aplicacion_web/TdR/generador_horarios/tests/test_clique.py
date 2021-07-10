from inspect import trace
import traceback
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from dictdiffer import diff
from ..clique_algorithm.clique_actual import VERSION, getData, getGraphNodes, addEdges, getSolution_A, getRecommendations

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

USER_ID = '6'
AREA_LIMIT = 2

@pytest.mark.skipif(VERSION != 2, reason="comportamiento diferente entre versiones 1 y 2")
def test_getData(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
    except Exception:
        traceback.print_exc()
        assert False

def test_getGraphNodes(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        data = getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
        asignaturas = data['asignaturas']
        G = getGraphNodes(asignaturas)
        # print('G: ', G)
        # print('G.nodes: ', G.nodes)
        # print('G.nodes.items(): ', G.nodes.items())
        # print('list(G.nodes.items()): ', list(G.nodes.items()))
    except Exception:
        traceback.print_exc()
        assert False

@pytest.mark.skipif(VERSION != 2, reason="comportamiento diferente entre versiones 1 y 2")
def test_addEdges(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        data = getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
        asignaturas = data['asignaturas']
        G = getGraphNodes(asignaturas)
        addEdges(G)

    except Exception:
        traceback.print_exc()
        assert False

def test_getSolution_A(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        data = getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
        asignaturas = data['asignaturas']
        G = getGraphNodes(asignaturas)
        addEdges(G)
        (solution, fmtSolution, totalWeight) = getSolution_A(G)

    except Exception:
        traceback.print_exc()
        assert False

def test_getRecommendations(setupOferta):
    try:
        prepareCliqueTest(userId=USER_ID)
        data = getData(userId=USER_ID, cfgAreaLimit=AREA_LIMIT)
        asignaturas = data['asignaturas']
        G = getGraphNodes(asignaturas)
        addEdges(G)
        (recommendations, weightList)= getRecommendations(G, amount=5, solutionType='A')
        # for item in recommendations: print('recom: \n', item)
    except Exception:
        traceback.print_exc()
        assert False

def prepareCliqueTest(userId):
    jl.loadUser(fileName='users', userId=userId)
    testCase = jl.readJSONFile(folder='Clique/stateTestCases', fileName='case9') # para tener un estado pre-clique valido
    stc.setState_beforeClique(testCase["stateInput"])
