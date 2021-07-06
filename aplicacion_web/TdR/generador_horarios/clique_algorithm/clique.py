import networkx as nx
import matplotlib.pyplot as plt
import random
import traceback
from ..models import *
from ..helpers import utils as ut, jsonLog as jl
from .fetchData import getData

VERSION = 2

# seria bueno modularizar esta funcion
def get_clique_max_pond(userId, cfgAreaLimit):
    data = getData(userId, cfgAreaLimit)

