import pandas as pd
import numpy as np
from pandas.io import excel
from .helpers.utils import getSemestreActual

def is_oferta_vacantes(excel_oferta):
    a = np.array(
        pd.read_excel(excel_oferta, na_filter=False, engine='openpyxl')
    )
    if a[0][0] == '': return False
    return True

def is_oferta_cfg_vacantes(excel_oferta):
    a = np.array(
        pd.read_excel(excel_oferta, na_filter=False, engine='openpyxl')
    )
    try: # excel cfgs sin vacantes solo tiene 12 columnas.
        a[0][14]
        return True
    except IndexError:
        return False


def read_secciones(excel_oferta):
    # colummnas_vacantes = 'B,D,K,L,M,T'
    columnas_vacantes = "T,D,B,K,L,M" #columnas de oferta con vacantes
    #columnas_inicial = 'M,Q,W,X'
    #nombres_cols_inicial ^ -> asginatura, sección, paquete, vac. ev
    columnas_inicial = "W,Q,M,X"

    has_vacantes = is_oferta_vacantes(excel_oferta)
    if has_vacantes: columnas = columnas_vacantes
    else: columnas = columnas_inicial

    seccion = np.array(
        pd.read_excel(
            excel_oferta, usecols=columnas, na_filter=False, engine='openpyxl'
        )
    )

    seen = []
    newlist = []

    # try:
    #     for i in range(0,19):
    #         print('item[',i,']: ',seccion[0][i])
    # except Exception as exc:
    #     print('fallo en indice ', i)
    if has_vacantes: i_paquete = 5
    else: i_paquete = 2

    for item in seccion:

        if item[i_paquete] not in seen and item[0] != '':
            newlist.append(item)
            seen.append(item[i_paquete])

    new_list = np.insert(newlist, 1, getSemestreActual(), axis=1)

    if has_vacantes: permut = [6, 1, 2, 3, 4, 5, 0]
    else: permut = [4, 1, 2, 3, 0]

    idx = np.empty_like(permut)
    idx[permut] = np.arange(len(permut))
    new_list[:, idx]
    new_list[:] = new_list[:, idx]

    for i in range(len(new_list)):
        aux = new_list[i][2].split()
        numero = aux[1]
        new_list[i][2] = numero

    return new_list


def read_eventos(excel_oferta):
    columnas_vacantes = "F,H,J,T"
    columnas_inicial = "R,S,T,W"
    has_vacantes = is_oferta_vacantes(excel_oferta)
    if has_vacantes: columnas = columnas_vacantes
    else: columnas = columnas_inicial

    evento = np.array(pd.read_excel(

        excel_oferta, usecols=columnas, na_filter=False, engine='openpyxl'))

    arr_eventos = []

    for elem in evento:

        if elem[0] != '':

            if elem[0][0] == 'C':  # comprueba si el evento es una "C"atedra, esto se hace para separar los bloques, ya que estan en una sola fila en el excel, y en la base deben estar separados

                if len(elem[1].split()) == 5:

                    arr_horario = elem[1].split()

                    elem1 = elem.copy()
                    elem2 = elem.copy()

                    bloque = arr_horario[2]+" - "+arr_horario[4]
                    dia1 = arr_horario[0]
                    dia2 = arr_horario[1]

                    elem1[1] = dia1
                    elem1 = np.append(elem1.tolist(), bloque)
                    arr_eventos.append(elem1.tolist())

                    elem2[1] = dia2
                    elem2 = np.append(elem2.tolist(), bloque)
                    arr_eventos.append(elem2.tolist())

                elif len(elem[1].split()) == 6:

                    arr_horario = elem[1].split()

                    elem1 = elem.copy()
                    elem2 = elem.copy()
                    elem3 = elem.copy()

                    bloque = arr_horario[3]+" - "+arr_horario[5]
                    dia1 = arr_horario[0]
                    dia2 = arr_horario[1]
                    dia3 = arr_horario[2]

                    elem1[1] = dia1
                    elem1 = np.append(elem1.tolist(), bloque)
                    arr_eventos.append(elem1.tolist())

                    elem2[1] = dia2
                    elem2 = np.append(elem2.tolist(), bloque)
                    arr_eventos.append(elem2.tolist())

                    elem3[1] = dia3
                    elem3 = np.append(elem3.tolist(), bloque)
                    arr_eventos.append(elem3.tolist())

                elif len(elem[1].split()) == 8:

                    arr_horario = elem[1].split()

                    elem1 = elem.copy()
                    elem2 = elem.copy()

                    bloque1 = arr_horario[1]+" - "+arr_horario[3].strip(';')
                    bloque2 = arr_horario[5]+" - "+arr_horario[7].strip(';')
                    dia1 = arr_horario[0]
                    dia2 = arr_horario[4]

                    elem1 = np.append(elem1, bloque1)
                    elem1[1] = dia1
                    arr_eventos.append(elem1.tolist())

                    elem2 = np.append(elem2, bloque2)
                    elem2[1] = dia2
                    arr_eventos.append(elem2.tolist())

                elif len(elem[1].split()) == 4:
                    pass

            elif elem[0][0] == 'P':
                pass
            else:
                arr_horario = elem[1].split()

                elem1 = elem.copy()

                dia = arr_horario[0]
                bloque = arr_horario[1]+" - "+arr_horario[3]
                elem1 = np.append(elem1, bloque)
                elem1[1] = dia
                arr_eventos.append(elem1.tolist())

    arr_eventos = np.array(arr_eventos)

    p = [0, 1, 3, 4, 2]
    x = np.empty_like(p)
    x[p] = np.arange(len(p))
    arr_eventos[:, x]
    arr_eventos[:] = arr_eventos[:, x]

    return arr_eventos

def nombres_cfg(excel_file, columnas):
    secciones = np.array(
        pd.read_excel(
            excel_file, usecols=columnas, na_filter=False, engine='openpyxl'
        )
    )
    nombres = {}
    for item in secciones:
        if item[0] != '':
            codigo = item[0]
            nombre = item[1]
            nombres[codigo] = nombre
    return nombres


## Estas funciones son similares a las de arriba, se dejan aqui por si algo llegara a fallar con los horarios de los cfg 
def read_seccion_cfg(excel_file, has_vacantes):
    columnas_vacantes = "T,D,B,K,L,M"
    columnas_inicial = "K,E,A,L"

    nombres = {}
    if has_vacantes: 
        columnas = columnas_vacantes
        i_paquete = 5
        permut = [6, 1, 2, 3, 4, 5, 0]
    else: 
        columnas = columnas_inicial
        i_paquete = 2
        permut = [4, 1, 2, 3, 0]
        nombres = nombres_cfg(excel_file, 'A,B')

    cfg_seccion = np.array(
        pd.read_excel(
            excel_file, usecols=columnas, na_filter=False, engine='openpyxl'
        )
    )

    seen = []
    newlist = []

    for item in cfg_seccion:
        if item[i_paquete] not in seen and item[0] != '':
            newlist.append(item)
            seen.append(item[i_paquete])
    # print('-newlist-')
    # for item in newlist:
    #     print(item)

    cfg_secciones = np.insert(newlist, 1, getSemestreActual(), axis=1)

    idx = np.empty_like(permut)
    idx[permut] = np.arange(len(permut))
    cfg_secciones[:, idx]
    cfg_secciones[:] = cfg_secciones[:, idx]

    for i in range(len(cfg_secciones)):
        aux = cfg_secciones[i][2].split()
        numero = aux[1]
        cfg_secciones[i][2] = numero

    return cfg_secciones, nombres


def read_evento_cfg(excel_file, has_vacantes):
    columnas_vacantes = "F,H,J,T"
    columnas_inicio = "F,G,H,K"
    if has_vacantes: columnas = columnas_vacantes
    else: columnas = columnas_inicio

    cfg_evento = np.array(
        pd.read_excel(
            excel_file, usecols=columnas, na_filter=False, engine='openpyxl'
        )
    )

    cfg_eventos = []

    for elem in cfg_evento:
        if elem[0] != '' and elem[1] != '':

            # comprueba si el evento es una "C"atedra, esto se hace para separar los bloques, ya que estan en una sola fila en el excel, y en la base deben estar separados
            if elem[0][0] == 'C' or elem[0][0] == 'B':

                if len(elem[1].split()) == 5:

                    arr_horario = elem[1].split()

                    elem1 = elem.copy()
                    elem2 = elem.copy()

                    bloque = arr_horario[2]+" - "+arr_horario[4]
                    dia1 = arr_horario[0]
                    dia2 = arr_horario[1]

                    elem1[1] = dia1
                    elem1 = np.append(elem1.tolist(), bloque)
                    cfg_eventos.append(elem1.tolist())

                    elem2[1] = dia2
                    elem2 = np.append(elem2.tolist(), bloque)
                    cfg_eventos.append(elem2.tolist())

                elif len(elem[1].split()) == 4:

                    arr_horario = elem[1].split()

                    elem1 = elem.copy()
                    elem2 = elem.copy()

                    #estos cfgs tienen en 1 bloque dos modulos, aqui se separan en 2 bloques 
                    # (ej. [8:30 - 11:20] --> [8:30 - 9:50, 10:00 - 11:20])
                    if arr_horario[1] == '08:30': 
                        bloque = arr_horario[1] + ' - 09:50'
                        bloque2 = '10:00 - ' + arr_horario[3]
                    elif arr_horario[1] == '10:00':
                        bloque = arr_horario[1] + ' - 11:20'
                        bloque2 = '11:30 - ' + arr_horario[3]
                    elif arr_horario[1] == '11:30':
                        bloque = arr_horario[1] + ' - 12:50'
                        bloque2 = '13:00 - ' + arr_horario[3]
                    elif arr_horario[1] == '13:00':
                        bloque = arr_horario[1]+' - 14:20'
                        bloque2 = '14:30 - ' + arr_horario[3]
                    elif arr_horario[1] == '14:30':
                        bloque = arr_horario[1]+' - 15:50'
                        bloque2 = '16:00 - ' + arr_horario[3]
                    elif arr_horario[1] == '16:00':
                        bloque = arr_horario[1]+' - 17:20'
                        bloque2 = '17:30 - ' + arr_horario[3]
                    elif arr_horario[1] == '17:30':
                        bloque = arr_horario[1]+' - 18:45'
                        bloque2 = '18:50 - ' + arr_horario[3]
                    elif arr_horario[1] == '18:50':
                        bloque = arr_horario[1]+' - 20:10'
                        bloque2 = '20:15 - ' + arr_horario[3]

                    dia = arr_horario[0]

                    elem1[1] = dia
                    elem1 = np.append(elem1.tolist(), bloque)
                    cfg_eventos.append(elem1.tolist())

                    elem2[1] = dia
                    elem2 = np.append(elem2.tolist(), bloque2)
                    cfg_eventos.append(elem2.tolist())

                elif len(elem[1].split()) == 8:

                    arr_horario = elem[1].split()

                    elem1 = elem.copy()
                    elem2 = elem.copy()

                    bloque1 = arr_horario[1]+" - "+arr_horario[3].strip(';')
                    bloque2 = arr_horario[5]+" - "+arr_horario[7].strip(';')
                    dia1 = arr_horario[0]
                    dia2 = arr_horario[4]

                    elem1 = np.append(elem1, bloque1)
                    elem1[1] = dia1
                    cfg_eventos.append(elem1.tolist())

                    elem2 = np.append(elem2, bloque2)
                    elem2[1] = dia2
                    cfg_eventos.append(elem2.tolist())

            else:
            # bloque estaba dentro de try con pass
                try:
                    arr_horario = elem[1].split()

                    elem1 = elem.copy()

                    dia = arr_horario[0]
                    bloque = arr_horario[1]+" - "+arr_horario[3]
                    elem1 = np.append(elem1, bloque)
                    elem1[1] = dia
                    cfg_eventos.append(elem1.tolist())
                except Exception as exc:
                    raise Exception('error agregando evento.\n ', 'elem: ', elem) from exc



    cfg_eventos = np.array(cfg_eventos)

    p = [0, 1, 3, 4, 2]
    x = np.empty_like(p)
    x[p] = np.arange(len(p))
    cfg_eventos[:, x]
    cfg_eventos[:] = cfg_eventos[:, x]

    return cfg_eventos


def read_mi_malla(excel_file):

    mi_malla = np.array(pd.read_excel(

        excel_file, usecols="B", header=None, na_filter=False, engine='openpyxl'))

    return mi_malla