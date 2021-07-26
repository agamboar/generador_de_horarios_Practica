import csv
from generador_horarios.models import *

PATH = './DB_data/equivale.csv'

electivos_inf_malla2020 = ['CITOPTINF1', 'CITOPTINF2', 'CITOPTINF3']
electivos_tel_malla2020 = ['CITOPTTEL1', 'CITOPTTEL2', 'CITOPTTEL3']
electivos_inf_malla201X = ['CIT3310', 'CIT3311', 'CIT3312', 'CIT3313']
electivos_tel_malla201X = ['CIT3410', 'CIT3411', 'CIT3412', 'CIT3413']

#actualizar por semestre
oferta_electivos_inf_2020 = ['CIT3347', 'CIT3349']
oferta_electivos_tel_2020 = ['CIT3432']
oferta_electivos_inf_201X = ['CIT3317', 'CIT3320', 'CIT3347', 'CIT3349']
oferta_electivos_tel_201X = ['CIT3425', 'CIT3427', 'CIT3432', 'CIT3433']

def append_equivalencia(f, codigos_oferta, codigos_malla, eq_prev):
    for codigo_oferta in codigos_oferta:
        for codigo_malla in codigos_malla:
            if [codigo_oferta, codigo_malla] in eq_prev: continue
            line = "{};{}\n".format(codigo_oferta, codigo_malla)
            f.write(line)

def run():
    with open(PATH, 'a') as f:
        f2 = open(PATH, 'r')
        reader = csv.reader(f2, delimiter=';')
        header = next(reader)
        eq_prev = list(reader)

        append_equivalencia(f, oferta_electivos_inf_2020, electivos_inf_malla2020, eq_prev)
        append_equivalencia(f, oferta_electivos_tel_2020, electivos_tel_malla2020, eq_prev)
        append_equivalencia(f, oferta_electivos_inf_201X, electivos_inf_malla201X, eq_prev)
        append_equivalencia(f, oferta_electivos_tel_201X, electivos_tel_malla201X, eq_prev)

        f2.close()