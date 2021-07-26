import csv
from generador_horarios.models import *
from contextlib import suppress

PATH = './DB_data/asignaturaReal.csv'

def run():
    with open(PATH, 'r') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        ramos = list(reader)
        for row in ramos:
            args = {
                'codigo': row[0],
                'nombre': row[1],
                'creditos': row[2],
                'nro_correlativo': row[3],
                'semestre': row[4],
                'tipo': row[5],
                'importancia': row[6]
            }
            with suppress(Exception): asignatura_real(**args).save()
