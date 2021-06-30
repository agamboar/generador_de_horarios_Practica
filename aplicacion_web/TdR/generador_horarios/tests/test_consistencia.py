import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from ..views import calc_PERT, calc_clique

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

# ------ funciones para probar consistencia de resultados con version beta de aplicacion al refactorizar el código ------
N_TEST_CASES = 9

def test_PERT_consistency(setupOferta):
    # hacer setup de usuario
    users = jl.readJSONFile('Users', 'users')
    user = users['6']
    User(**user).save()
    
    ok = True
    for i in range(1,N_TEST_CASES+1):
        fileName = 'case' + str(i)
        testCase = jl.readJSONFile('PERT/stateTestCases', fileName)
        stc.setState_beforePERT(testCase["stateInput"])

        expected = testCase["output"]
        real = calc_PERT(user["id"])
        if ut.ordered(real) != ut.ordered(expected):
            ok = False
            print("Fallo caso ", i)
            print("\n---Esperado--- \n", ut.ordered(expected), "\n---Esperado---\n")
            print("\n---Real--- \n", ut.ordered(real), "\n---Real---\n")
    assert ok == True

def test_clique_consistency(setupOferta):
    users = jl.readJSONFile('Users', 'users')
    user = users['6']
    User(**user).save()

    ok = True
    for i in range(1, N_TEST_CASES+1):
        fileName = 'case' + str(i)
        testCase = jl.readJSONFile('Clique/stateTestCases', fileName)
        stc.setState_beforeClique(testCase["stateInput"])

        expected = testCase["output"]
        real = calc_clique(user["id"])
        if ut.ordered(real) != ut.ordered(expected):
            ok = False
            print("Fallo caso ", i)
            print("\n---Esperado--- \n", ut.ordered(expected), "\n---Esperado---\n")
            print("\n---Real--- \n", ut.ordered(real), "\n---Real---\n")
    assert ok == True
