import pytest
from ..io_log import jsonLog as jl
from ..models import *
from .. import DBSeed as sd

# pytest --reuse-db will not pick up schema changes between test runs. You must run the tests with 
# pytest --reuse-db --create-db to re-create the database according to the new schema. Running without 
# pytest --reuse-db is also possible, since the database will automatically be re-created.

# fixtures en archivo "conftest.py"
    
def test_seeding_fixture(seedDB):
    ok = True
    tabla = asignatura_real.objects.all().values()
    if len(tabla) == 0: ok = False
    tabla = malla_curricular.objects.all().values()
    if len(tabla) == 0: ok = False
    tabla = malla_curricular.to_asignatura_real.through.objects.all().values()
    if len(tabla) == 0: ok = False
    tabla = asignatura_real.equivale.through.objects.all().values()
    if len(tabla) == 0: ok = False
    tabla = asignatura_real.prerrequisito.through.objects.all().values()
    if len(tabla) == 0: ok = False
    assert ok == True
