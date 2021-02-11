import csv
import pandas as pd
import numpy as np
from generador_horarios.models import evento


def run():

    elem = np.array(pd.read_excel(
        'C:/Users/alvar/Downloads/TdR/generador_de_horarios_Practica/RutaCritica/INGENIERÍA-CIVIL-EN-INFORMÁTICA-Y-TELECOMUNICACIONES.xlsx', sheet_name='Sheet1'))

    print(elem[5])
