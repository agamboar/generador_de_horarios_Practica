import csv
from generador_horarios.models import *
from contextlib import suppress

PATH = './DB_data/prerrequisito_aux.csv'

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

    # print('\n---\n')
    # electivosMalla = set(
    #     asignatura_real.objects.filter(
    #         tipo=0, 
    #         importancia=2
    #     ).exclude(nombre__contains='INGLES').values_list('codigo', flat=True)
    # )
    # prerrequisitos = asignatura_real.prerrequisito.through.objects.all().values()
    # for preq in list(prerrequisitos):
    #     print(preq)
    #     assert preq['from_asignatura_real_id'] not in electivosMalla

