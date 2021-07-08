from inspect import trace
import traceback
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from dictdiffer import diff
from ..clique_algorithm.clique import VERSION, getData, getGraphNodes, addEdges, getMPClique

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

@pytest.mark.skipif(VERSION != 2, reason="comportamiento diferente entre versiones 1 y 2")
def test_getData(setupOferta):
    try:
        prepareCliqueTest(userId='6')
        getData(userId='6', cfgAreaLimit=2)
    except Exception:
        traceback.print_exc()
        assert False

def test_getGraphNodes(setupOferta):
    try:
        prepareCliqueTest(userId='6')
        data = getData(userId='6', cfgAreaLimit=2)
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
        prepareCliqueTest(userId='6')
        data = getData(userId='6', cfgAreaLimit=2)
        asignaturas = data['asignaturas']
        G = getGraphNodes(asignaturas)
        addEdges(G)

    except Exception:
        traceback.print_exc()
        assert False

def test_getSolution_A(setupOferta):
    pass # TODO

def prepareCliqueTest(userId):
    jl.loadUser(fileName='users', userId=userId)
    testCase = jl.readJSONFile(folder='Clique/stateTestCases', fileName='case5') # para tener un estado pre-clique valido
    stc.setState_beforeClique(testCase["stateInput"])