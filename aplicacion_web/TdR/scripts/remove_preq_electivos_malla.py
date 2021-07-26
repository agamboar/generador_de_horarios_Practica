import csv
from generador_horarios.models import *

def run():
    electivosMalla = set(
        asignatura_real.objects.filter(
            tipo=0, 
            importancia=2
        ).exclude(nombre__contains='INGLES').values_list('codigo', flat=True)
    )
    # print(electivosMalla, '//')
    # for i in electivosMalla: print(i)
    outfile = open('./DB_data/prerrequisito_aux.csv', 'w')
    of_header = 'codigo;to_codigo\n'
    outfile.write(of_header)
    with open('./DB_data/prerrequisito.csv', 'r') as infile:
        reader = csv.reader(infile, delimiter=';')
        header = next(reader)
        print('header: ', header)
        preqs = list(reader)
        for row in preqs:
            # print('cols: ', row[0], row[1])
            codigo=row[0]
            to_codigo=row[1]
            ramo = asignatura_real.objects.get(codigo=codigo)
            to_ramo = asignatura_real.objects.get(codigo=to_codigo)
            if codigo not in electivosMalla:
                print('codigo: ', codigo)
                line = "{};{}\n".format(codigo,to_codigo)
                outfile.write(line)

    outfile.close()

    with open('./DB_data/prerrequisito_aux.csv', 'r') as x:
        reader = csv.reader(x, delimiter=';')
        header = next(reader)
        print('header: ', header)
        preqs = list(reader)
        for row in preqs:
            assert row[0] not in electivosMalla
