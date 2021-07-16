import traceback
import pytest
from ..helpers import jsonLog as jl, DBSeed as sd, stateControl as stc, utils as ut
from ..models import *
from ..views import calc_PERT, calc_clique
from dictdiffer import diff
from ..clique_algorithm import clique_actual

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"

# ------ funciones para probar consistencia de resultados con version beta de aplicacion al refactorizar el código ------
N_TEST_CASES = 6

# @pytest.mark.skip(reason="no se esta modificando")
def test_PERT_consistency(setupOferta):
    try:
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

            expectedSorted = ut.ordered(expected)
            realSorted = ut.ordered(real)

            if realSorted != expectedSorted:
                ok = False
                print("Fallo caso ", i)
                print('esperado: \n', expectedSorted)
                print('real: \n', realSorted)

                difference = diff(expectedSorted, realSorted)
                print('\n diferencia: \n', list(difference), '\n')
                break
        assert ok == True
    except Exception: # excepciones evitan que la base de datos de prubas se cierre correctamente, manejarlas evita tener que reiniciar el terminal cuando hay errores
        traceback.print_exc()
        assert False

@pytest.mark.skip(reason="obsoleto, se esta usando comparacion por pesos en 'test_clique.py'")
def test_clique_consistency(setupOferta):
    try:
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

            for solution in expected:
                for seccion in solution: del seccion['cod_asignatura_real']
            for solution in real:
                for seccion in solution: del seccion['cod_asignatura_real']

            expectedSorted = ut.ordered(expected[0])
            realSorted = ut.ordered(real[0])           

            if expectedSorted != realSorted:
                ok = False
                print("Fallo caso ", i)
                # print('\n esperado:  \n', expectedSorted, '\n')
                # print('\n real:  \n', realSorted, '\n')
                difference = diff(expectedSorted, realSorted)
                print('\n diferencia: \n', list(difference), '\n')
                break
        assert ok == True
    except Exception:
        traceback.print_exc()
        assert False

