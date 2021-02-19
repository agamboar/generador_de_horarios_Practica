import pandas as pd
import numpy as np
import sys


def read_secciones(excel_oferta):
    np.set_printoptions(threshold=sys.maxsize)

    seccion = np.array(pd.read_excel(

        excel_oferta, usecols="T,D,B,K,L,M", na_filter=False,engine='openpyxl'))
    seen = set()
    newlist = []

    for item in seccion:
        t = tuple(item)

        if t not in seen and item[0] != '':
            newlist.append(item)
            seen.add(t)

    new_list = np.insert(newlist, 1, '2021-1', axis=1)

    permut = [6, 1, 2, 3, 4, 5, 0]
    idx = np.empty_like(permut)
    idx[permut] = np.arange(len(permut))
    new_list[:, idx]
    new_list[:] = new_list[:, idx]

    return new_list


def read_eventos(excel_oferta):

    evento = np.array(pd.read_excel(

        excel_oferta, usecols="F,H,J,T", na_filter=False,engine='openpyxl'))

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


def read_seccion_cfg(excel_file):

    cfg_seccion = np.array(pd.read_excel(

        excel_file, usecols=['Paquete', 'Sección', 'Asignatura', 'Vac. Paquete'], na_filter=False))

    seen = set()
    newlist = []

    for item in cfg_seccion:

        t = tuple(item)

        if t not in seen and item[2] != '' and item[3] != 0:
            newlist.append(item)
            seen.add(t)

    new_list = np.insert(newlist, 1, '2021-1', axis=1)
    aux_list2 = np.insert(new_list, 4, 0, axis=1)
    cfg_secciones = np.insert(aux_list2, 4, aux_list2[:, 5], axis=1)

    permut = [6, 1, 2, 0, 3, 4, 5]
    idx = np.empty_like(permut)
    idx[permut] = np.arange(len(permut))
    cfg_secciones[:, idx]
    cfg_secciones[:] = cfg_secciones[:, idx]

    return cfg_secciones


def read_evento_cfg(excel_file):

    np.set_printoptions(threshold=sys.maxsize)

    cfg_evento = np.array(pd.read_excel(

        excel_file, usecols=['Descrip. Evento', 'Horario', 'Profesor', 'Paquete'], na_filter=False))

    cfg_eventos = []

    for elem in cfg_evento:

        if elem[0] != '':

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
                arr_horario = elem[1].split()

                elem1 = elem.copy()

                dia = arr_horario[0]
                bloque = arr_horario[1]+" - "+arr_horario[3]
                elem1 = np.append(elem1, bloque)
                elem1[1] = dia
                cfg_eventos.append(elem1.tolist())

    cfg_eventos = np.array(cfg_eventos)

    p = [0, 1, 3, 4, 2]
    x = np.empty_like(p)
    x[p] = np.arange(len(p))
    cfg_eventos[:, x]
    cfg_eventos[:] = cfg_eventos[:, x]

    return cfg_eventos
