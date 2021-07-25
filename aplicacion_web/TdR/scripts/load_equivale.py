import csv
from generador_horarios.models import *

PATH = './DB_data/equivale.csv'

def run():
    with open(PATH, 'r') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        ramos = list(reader)
        asignatura_real.equivale.through.objects.all().delete()
        for row in ramos:
            args = {
               'from_asignatura_real_id': row[0],
               'to_asignatura_real_id': row[1] 
            }
            asignatura_real.equivale.through(**args).save()