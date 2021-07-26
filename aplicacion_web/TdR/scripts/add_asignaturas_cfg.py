from generador_horarios.codigos_cfg.categorize_cfgs import get_codigos
import csv

PATH = './DB_data/asignaturaReal.csv'

def run():
    all_codigos = []
    all_codigos.append(get_codigos('codigos_Historia.txt'))
    all_codigos.append(get_codigos('codigos_Ciencia-y-Sociedad.txt'))
    all_codigos.append(get_codigos('codigos_Ciencias-Sociales.txt'))
    all_codigos.append(get_codigos('codigos_Humanidades.txt'))

    r = open(PATH, 'r')
    reader = csv.reader(r, delimiter=';')
    header = next(reader)
    ramos_previos = list(reader)
    r.close()

    for x in ramos_previos: 
        if x[0][0:3] == 'CFG': print(x)
    print(header)

    # with open(PATH, 'a') as f:
        

    # if codigo in get_codigos('codigos_Historia.txt'): return 'Historia'
    # if codigo in get_codigos('codigos_Ciencia-y-Sociedad.txt'): return 'Ciencia y Sociedad' 
    # if codigo in get_codigos('codigos_Ciencias-Sociales.txt'): return 'Ciencias Sociales'
    # if codigo in get_codigos('codigos_Humanidades.txt'): return 'Humanidades'