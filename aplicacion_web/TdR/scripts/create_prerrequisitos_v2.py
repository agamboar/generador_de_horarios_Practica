import csv

from numpy import append
from generador_horarios.models import *

# agrega ramos del quinto semestre como prerrequisito para electivos.
def append_preq_electivos(preqs : list, malla : int):
    electivosMalla2020 = list(
        asignatura_real.objects.filter(
            tipo=0, 
            importancia=2,
            malla_curricular__agno=malla
        ).exclude(nombre__contains='INGLES').values_list('codigo', flat=True)
    )
    semestre5_2020 = list(
        asignatura_real.objects.filter(
            tipo=0,
            importancia = 3,
            malla_curricular__agno=malla,
            semestre = 5
        ).exclude(nombre__contains='INGLES').exclude(nombre__contains='PRACTICA').values_list('codigo', flat=True)
    )

    for electivo in electivosMalla2020:
        for ramo in semestre5_2020:
            preqs.append({
                'from': electivo,
                'to': ramo
            })

def run():
    newPreqs = []
    append_preq_electivos(newPreqs, 2020)
    append_preq_electivos(newPreqs, 2010) # electivos y ramos de 5to semestre(excep. cfgs/practica/ingles) son los mismos para mallas 2010 y 2018      

    print('prerrequisitos: .. \n')
    for x in newPreqs: print(x)

    outfile = open('./DB_data/prerrequisito_v2.csv', 'w')
    of_header = 'codigo;to_codigo\n'
    outfile.write(of_header)

    # agregar prerrequisitos originales (no incluyendo los de electivos de malla)
    with open('./DB_data/prerrequisito_aux.csv', 'r') as infile:
        reader = csv.reader(infile, delimiter=';')
        header = next(reader)
        print('header: ', header)
        preqs = list(reader)
        for row in preqs:
            codigo=row[0]
            to_codigo=row[1]
            line = "{};{}\n".format(codigo,to_codigo)
            outfile.write(line)

    #agregar nuevos prerrequisitos de electivos de malla
    for preq in newPreqs:
        line = "{};{}\n".format(preq['from'],preq['to'])
        outfile.write(line)

    outfile.close()
