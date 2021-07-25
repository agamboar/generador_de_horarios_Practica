import csv
from generador_horarios.models import *

PATH = './DB_data/mallaAsignatura.csv'

def run():
    with open(PATH, 'r') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        ramos = list(reader)
        malla_curricular.to_asignatura_real.through.objects.all().delete()
        for row in ramos:
            args = {
               'malla_curricular_id': row[0],
               'asignatura_real_id': row[1] 
            }
            malla_curricular.to_asignatura_real.through(**args).save()