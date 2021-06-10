import pytest
from ..helpers import DBSeed as sd
from ..helpers import jsonLog as jl

# ----- fixture scopes
# function   Run once per test
# class      Run once per class of test
# module     Run once per module
# session    Run once per session 
# ----- fixture scopes

#EJ: @pytest.fixture(scope='session'); Si no se especifica usa el scope "function".

@pytest.fixture
def seedDB(db):
    sd.loadAllSeeds() # contiene las tablas de la carpeta DB_data

@pytest.fixture
def setupOferta(db, seedDB):
    jl.loadOferta("Oferta2021-1") # contine tablas: seccion, seccion_to_asignatura, evento, cfg_areas