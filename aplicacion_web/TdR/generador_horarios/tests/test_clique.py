from inspect import trace
import traceback
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from dictdiffer import diff
from ..clique_algorithm.clique import VERSION, getData

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

@pytest.mark.skipif(VERSION != 2, reason="comportamiento diferente entre versiones 1 y 2")
def test_getData(setupOferta):
    try:
        jl.loadUser(fileName='users', userId='6')
        testCase = jl.readJSONFile(folder='Clique/stateTestCases', fileName='case5') # para tener un estado pre-clique valido
        stc.setState_beforeClique(testCase["stateInput"])
        getData(userId='6', cfgAreaLimit=2)
    except Exception:
        traceback.print_exc()
        assert False
