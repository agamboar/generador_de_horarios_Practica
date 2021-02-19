import pandas as pd
import numpy as np
import sys


def read_secciones(excel_oferta):
    np.set_printoptions(threshold=sys.maxsize)

    seccion = np.array(pd.read_excel(

        excel_oferta, usecols=['Paquete', 'Sección', 'Asignatura', 'Vac. Paquete', 'Inscritos', 'Vac. Libres'], na_filter=False))

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

        excel_oferta, usecols=['Descrip. Evento', 'Horario', 'Profesor', 'Paquete'], na_filter=False))

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

                    bloque1 = arr_horario[1]+" - "+arr_horario[3]
                    bloque2 = arr_horario[5]+" - "+arr_horario[6]
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
