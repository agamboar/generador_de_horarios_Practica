import pytest
from .. import DBSeed as sd

# ----- fixture scopes
# function   Run once per test
# class      Run once per class of test
# module     Run once per module
# session    Run once per session 
# ----- fixture scopes

#EJ: @pytest.fixture(scope='session'); Si no se especifica usa el scope "function".

@pytest.fixture
def seedDB(db):
    sd.loadAllSeeds()