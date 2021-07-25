import csv
from generador_horarios.models import *

PATH = './DB_data/prerrequisito.csv'

def run():
    asignatura_real.prerrequisito.through.objects.all().delete()
    with open(PATH, 'r') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        preqs = list(reader)
        for row in preqs:
            codigo = row[0]
            to_codigo = row[1]
            # print(codigo)
            asignatura_real.prerrequisito.through(from_asignatura_real_id=codigo, to_asignatura_real_id=to_codigo).save()


