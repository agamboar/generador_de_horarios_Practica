# probando categorize_cfgs.py
from generador_horarios.codigos_cfg.categorize_cfgs import *
from generador_horarios.models import *
import csv

PATH = './DB_data/equivale.csv'

def run():
    with open(PATH, 'r') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        equivalencias = list(reader)
        print(equivalencias)
        print(type(equivalencias))
