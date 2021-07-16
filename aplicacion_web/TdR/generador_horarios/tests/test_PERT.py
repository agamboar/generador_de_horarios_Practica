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