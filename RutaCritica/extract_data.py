# Probado con la oferta academica 2019-1

import numpy as np
import pandas as pd

# solo se consideran Catedra y Ayudantias, no Laboratorios
# ramos disponibles corresponde al codigo y no al nombre del curso

# VERSION antigua de este archivo porque se borro el otro


# aqui se debe evaluar que electivos y cfg debe tomar.
def equivalencia(ramos_disponibles, oferta_academica, equivalencia_ramos):
    # aca se asigna el codigo del codigo de referencia

    for elem in list(ramos_disponibles):
        if elem not in oferta_academica[:, 1]:
            if elem in equivalencia_ramos[:, 0]:
                rows = np.where(equivalencia_ramos[:, 0] == elem)
                ramos_disponibles[elem]["codigo_ref"] = equivalencia_ramos[rows[0][0]][1]
                print(elem, 'equivale a --->',
                      equivalencia_ramos[rows[0][0]][1], '\n')
            else:
                ramos_disponibles[elem]["codigo_ref"] = elem

        else:
            pos_cod_ramo = list(oferta_academica[:, 1]).index(elem)
            if isinstance(oferta_academica[pos_cod_ramo][7], str):
                ramos_disponibles[elem]["codigo_ref"] = elem
            elif elem in equivalencia_ramos[:, 0]:
                rows = np.where(equivalencia_ramos[:, 0] == elem)
                ramos_disponibles[elem]["codigo_ref"] = equivalencia_ramos[rows[0][0]][1]
                print(elem, 'equivale a --->',
                      equivalencia_ramos[rows[0][0]][1], '\n')
            else:
                ramos_disponibles[elem]["codigo_ref"] = elem

    return ramos_disponibles


def counter_cfg_malla(malla_alumno):
    count_cfg_malla = 0
    for cod in malla_alumno[:, 1]:
        if cod[0:3] == "CFG":
            count_cfg_malla += 1
    return count_cfg_malla


def counter_cfg_aprobados(ramos_aprobados):
    count_cfg_aprobados = 0
    cfg_aprobados = []
    for cod in ramos_aprobados[:, 1]:
        if cod[0:3] == "CFG":
            count_cfg_aprobados += 1
            cfg_aprobados.append(cod)
    return count_cfg_aprobados, cfg_aprobados


def secciones_cfg(lista_secciones, cant_cfg_malla, cant_cfg_aprobados, cfg_aprobados):
    # asignar box yera
    # contar cuantos cfg tiene la carrera
    # cuantos cfg ha cursado
    # cuales ha tomado

    oferta_cfg = np.array(pd.read_excel(
        'CURSOS-DE-FORMACIÓN-GENERAL.xlsx', sheet_name='Sheet1'))
    for z in range(cant_cfg_aprobados+1, cant_cfg_malla+1):
        aux_horario = []
        for i in range(0, len(oferta_cfg)):
            elem = oferta_cfg[i]
            # print(i,"----",elem)
            if isinstance(elem[5], str):
                # se verifica que la informacion de la fila sea una Catedra
                if elem[5][0] == "C" or elem[5][0] == "B":

                    # se procesa los datos de los horarios para usarlos posteriormente
                    if len(elem[6].split()) == 5:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[6].split()[0]+" "+elem[6].split()[2]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[6].split()[1]+" "+elem[6].split()[2]
                        aux_horario.append(aux)
                    elif len(elem[6].split()) == 4:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[6].split()[0]+" "+elem[6].split()[1]
                        aux_horario.append(aux)
                    elif len(elem[6].split()) == 8:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[6].split()[0]+" "+elem[6].split()[1]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[6].split()[4]+" "+elem[6].split()[5]
                        aux_horario.append(aux)

                    # print(aux_horario)

                    codigo = elem[10]
                    codRamo = elem[0]
                    nombre = elem[1]
                    # print(nombre)
                    if len(elem[4]) == 10:
                        seccion = int(elem[4][8]+elem[4][9])
                    else:
                        seccion = int(elem[4][8])
                    profesor = elem[7]

                else:
                    continue
            else:
                if codigo not in cfg_aprobados:
                    aux_box = "CFG-"+str(z)
                    alfa = {'codigo': codigo, 'nombre': nombre, 'seccion': seccion,
                            "horario": aux_horario, "profesor": profesor, "codigo_box": aux_box}
                    aux_count = 0
                    for k in range(0, len(lista_secciones)):
                        # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
                        if lista_secciones[k]["codigo"] == codigo and lista_secciones[k]["codigo_box"] == aux_box:
                            aux_count += 1
                            break
                    if aux_count == 0:  # con esto solo se agrega una vez la seccion
                        lista_secciones.append(alfa)
                        # con esto se limita la cantidad de nodos para que el algoritmo de clique lo pueda procesar
                        if len(lista_secciones) >= 130:
                            return lista_secciones
                aux_horario = []

    return lista_secciones


def counter_electivos_malla(malla_alumno):
    count_electivos_inf_malla = 0
    count_electivos_tel_malla = 0
    for cod in malla_alumno[:, 1]:
        if cod[0:5] == "CIT33":
            count_electivos_inf_malla += 1
        elif cod[0:5] == "CIT34":
            count_electivos_tel_malla += 1

    return count_electivos_inf_malla, count_electivos_tel_malla


def counter_electivos_aprobados(ramos_aprobados):
    count_electivos_inf_aprobados = 0
    count_electivos_tel_aprobados = 0
    electivos_aprobados = []
    for cod in ramos_aprobados[:, 1]:
        if cod[0:5] == "CIT33":
            count_electivos_inf_aprobados += 1
            electivos_aprobados.append(cod)
        elif cod[0:5] == "CIT34":
            count_electivos_tel_aprobados += 1
            electivos_aprobados.append(cod)

    return count_electivos_inf_aprobados, count_electivos_tel_aprobados, electivos_aprobados


def appednElectivos(lista_secciones, oferta_academica, ramos_aprobados, electivos_malla, cant_elect_inf_malla, cant_elect_tel_malla, count_electivos_inf_aprobados, count_electivos_tel_aprobados, electivos_aprobados):
    electivos_can_take = []
    for i in range(0, len(electivos_malla)):
        count = 0
        for elem in electivos_malla[i][4].split(","):
            if elem.strip() in ramos_aprobados[:, 1]:
                count += 1
        if count == len(electivos_malla[i][4].split(",")):
            electivos_can_take.append(electivos_malla[i][1])

    for z in range(count_electivos_inf_aprobados, cant_elect_inf_malla):  # inf
        aux_horario = []
        for i in range(0, len(oferta_academica)):
            elem = oferta_academica[i]
            if isinstance(elem[5], str):

                if elem[5][0] == "C":  # se verifica que la informacion de la fila sea una Catedra

                    # se procesa los datos de los horarios para usarlos posteriormente
                    if len(elem[7].split()) == 5:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[2]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[1]+" "+elem[7].split()[2]
                        aux_horario.append(aux)
                    elif len(elem[7].split()) == 4:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[1]
                        aux_horario.append(aux)
                    elif len(elem[7].split()) == 6:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[3]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[1]+" "+elem[7].split()[3]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[2]+" "+elem[7].split()[3]
                        aux_horario.append(aux)
                    elif len(elem[7].split()) == 8:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[1]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[4]+" "+elem[7].split()[5]
                        aux_horario.append(aux)

                    codigo = elem[4]
                    codRamo = elem[1]
                    nombre = elem[2]  # ojo
                    vac_free = elem[12]
                    if len(elem[3]) == 10:
                        seccion = int(elem[3][8]+elem[3][9])
                    else:
                        seccion = int(elem[3][8])

                    profesor = elem[9]

                elif elem[5][0] == "A":  # se verifica que la informacion de la fila sea una Ayudantia
                    # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
                    aux = elem[7].split()[0]+" "+elem[7].split()[1]
                    aux_horario.append(aux)

                elif elem[5][0] == "L":  # se verifica que la informacion de la fila sea una Ayudantia
                    # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
                    aux = elem[7].split()[0]+" "+elem[7].split()[1]
                    aux_horario.append(aux)
            else:
                for j in electivos_can_take:
                    if codRamo == j and int(vac_free) > 0:
                        if codRamo[0:5] == "CIT33":
                            aux_box = "CIT331"+str(z)

                            alfa = {'codigo': codigo, 'nombre': nombre, 'seccion': seccion,
                                    "horario": aux_horario, "profesor": profesor, 'codigo_box': aux_box}

                            aux_count = 0
                            for k in range(0, len(lista_secciones)):
                                # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
                                if lista_secciones[k]["codigo"] == codigo and lista_secciones[k]["codigo_box"] == aux_box:
                                    aux_count += 1
                                    break
                            if aux_count == 0 and seccion != 99:  # con esto solo se agrega una vez la seccion
                                lista_secciones.append(alfa)
                aux_horario = []

    for z in range(count_electivos_tel_aprobados, cant_elect_tel_malla):
        aux_horario = []
        for i in range(0, len(oferta_academica)):
            elem = oferta_academica[i]
            if isinstance(elem[5], str):

                if elem[5][0] == "C":  # se verifica que la informacion de la fila sea una Catedra

                    # se procesa los datos de los horarios para usarlos posteriormente
                    if len(elem[7].split()) == 5:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[2]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[1]+" "+elem[7].split()[2]
                        aux_horario.append(aux)
                    elif len(elem[7].split()) == 4:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[1]
                        aux_horario.append(aux)
                    elif len(elem[7].split()) == 6:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[3]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[1]+" "+elem[7].split()[3]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[2]+" "+elem[7].split()[3]
                        aux_horario.append(aux)
                    elif len(elem[7].split()) == 8:
                        # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                        aux = elem[7].split()[0]+" "+elem[7].split()[1]
                        aux_horario.append(aux)
                        # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                        aux = elem[7].split()[4]+" "+elem[7].split()[5]
                        aux_horario.append(aux)

                    codigo = elem[4]
                    codRamo = elem[1]
                    nombre = elem[2]
                    vac_free = elem[12]
                    if len(elem[3]) == 10:
                        seccion = int(elem[3][8]+elem[3][9])
                    else:
                        seccion = int(elem[3][8])

                    profesor = elem[9]

                elif elem[5][0] == "A":  # se verifica que la informacion de la fila sea una Ayudantia
                    # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
                    aux = elem[7].split()[0]+" "+elem[7].split()[1]
                    aux_horario.append(aux)

                elif elem[5][0] == "L":  # se verifica que la informacion de la fila sea una Ayudantia
                    # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
                    aux = elem[7].split()[0]+" "+elem[7].split()[1]
                    aux_horario.append(aux)
            else:
                for j in electivos_can_take:
                    if codRamo == j and int(vac_free) > 0:
                        if codRamo[0:5] == "CIT34":
                            aux_box = "CIT341"+str(z)

                            alfa = {'codigo': codigo, 'nombre': nombre, 'seccion': seccion,
                                    "horario": aux_horario, "profesor": profesor, 'codigo_box': aux_box}
                            aux_count = 0
                            for k in range(0, len(lista_secciones)):
                                # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
                                if lista_secciones[k]["codigo"] == codigo and lista_secciones[k]["codigo_box"] == aux_box:
                                    aux_count += 1
                                    break
                            if aux_count == 0 and seccion != 99:  # con esto solo se agrega una vez la seccion
                                lista_secciones.append(alfa)
                aux_horario = []
    # se debe calcular cuantos electivos tiene su carrera
    # saber cuantos ha cursado
    # cuales ha cursado
    # y cuales puede tomar segun los ramos aprobados

    # realizar lo mismo que extract data
    return lista_secciones


def extract_data(ramos_disponibles, nombre_excel_malla):

    # print(ramos_disponibles)
    lista_secciones = []

    oferta_academica = np.array(pd.read_excel(
        'Oferta Academica 2021-1 vacantes 2021-02-04.xlsx', sheet_name='Sheet1', engine='openpyxl'))

    electivos_malla = np.array(pd.read_excel(
        nombre_excel_malla, sheet_name='Electivos'))

    equivalencia_ramos = np.array(pd.read_excel(
        nombre_excel_malla, sheet_name='Equivalencias'))

    ramos_aprobados = np.array(pd.read_excel(
        'MiMalla.xlsx', sheet_name='MiMalla'))

    malla_alumno = np.array(pd.read_excel(nombre_excel_malla))

    ramos_disponibles = equivalencia(
        ramos_disponibles, oferta_academica, equivalencia_ramos)

    # se debe sacar los codigos de equivalencia
    aux_horario = []
    for i in range(0, len(oferta_academica)):
        elem = oferta_academica[i]
        if isinstance(elem[5], str):

            if elem[5][0] == "C":  # se verifica que la informacion de la fila sea una Catedra

                # se procesa los datos de los horarios para usarlos posteriormente
                if len(elem[7].split()) == 5:
                    # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                    aux = elem[7].split()[0]+" "+elem[7].split()[2]
                    aux_horario.append(aux)
                    # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                    aux = elem[7].split()[1]+" "+elem[7].split()[2]
                    aux_horario.append(aux)
                elif len(elem[7].split()) == 4:
                    # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                    aux = elem[7].split()[0]+" "+elem[7].split()[1]
                    aux_horario.append(aux)
                elif len(elem[7].split()) == 6:
                    # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                    aux = elem[7].split()[0]+" "+elem[7].split()[3]
                    aux_horario.append(aux)
                    # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                    aux = elem[7].split()[1]+" "+elem[7].split()[3]
                    aux_horario.append(aux)
                    # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                    aux = elem[7].split()[2]+" "+elem[7].split()[3]
                    aux_horario.append(aux)
                elif len(elem[7].split()) == 8:
                    # se guarda el primer modulo de la Catedra ejemplo LU 08.30
                    aux = elem[7].split()[0]+" "+elem[7].split()[1]
                    aux_horario.append(aux)
                    # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
                    aux = elem[7].split()[4]+" "+elem[7].split()[5]
                    aux_horario.append(aux)

                codigo = elem[4]
                codRamo = elem[1]
                nombre = elem[2]
                vac_free = elem[12]
                if len(elem[3]) == 10:
                    seccion = int(elem[3][8]+elem[3][9])
                else:
                    seccion = int(elem[3][8])

                profesor = elem[9]

            elif elem[5][0] == "A":  # se verifica que la informacion de la fila sea una Ayudantia
                # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
                aux = elem[7].split()[0]+" "+elem[7].split()[1]
                aux_horario.append(aux)

            elif elem[5][0] == "L":  # se verifica que la informacion de la fila sea una Ayudantia
                # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
                aux = elem[7].split()[0]+" "+elem[7].split()[1]
                aux_horario.append(aux)
        else:
            for j in ramos_disponibles:

                if codRamo == ramos_disponibles[j]["codigo_ref"] and int(vac_free) > 0:
                    alfa = {'codigo': codigo, 'nombre': nombre, 'seccion': seccion,
                            "horario": aux_horario, "profesor": profesor, 'codigo_box': j}

                    aux_count = 0
                    for k in range(0, len(lista_secciones)):
                        # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
                        if lista_secciones[k]["codigo"] == codigo and lista_secciones[k]["codigo_box"] == j:
                            aux_count += 1
                            break
                    if aux_count == 0 and seccion != 99:  # con esto solo se agrega una vez la seccion
                        lista_secciones.append(alfa)
            aux_horario = []

    cant_elect_inf_malla, cant_elect_tel_malla = counter_electivos_malla(
        malla_alumno)
    count_electivos_inf_aprobados, count_electivos_tel_aprobados, electivos_aprobados = counter_electivos_aprobados(
        ramos_aprobados)
    lista_secciones = appendElectivos(lista_secciones, oferta_academica, ramos_aprobados, electivos_malla, cant_elect_inf_malla,
                                      cant_elect_tel_malla, count_electivos_inf_aprobados, count_electivos_tel_aprobados, electivos_aprobados)

    cant_cfg_malla = counter_cfg_malla(malla_alumno)
    cant_cfg_aprobados, cfg_aprobados = counter_cfg_aprobados(ramos_aprobados)

    lista_secciones = secciones_cfg(
        lista_secciones, cant_cfg_malla, cant_cfg_aprobados, cfg_aprobados)

    """ for i in range(0,count_cfg):
		if count_cfg < 10:
			codigo = "CFG_0"+str(i+1)
			lista_secciones.append({'codigo':codigo,'nombre':"CFG-"+str(i+1), 'seccion':"Sección "+str(i+1), "horario":[codigo] ,"profesor": "CFG"})
		else:
			codigo = "CFG_"+str(i+1)
			lista_secciones.append({'codigo':codigo,'nombre':"CFG-"+str(i+1), 'seccion':"Sección "+str(i+1), "horario":[codigo] ,"profesor": "CFG"}) """
    """ 
	for i in lista_secciones:
		print(i)
	"""
    print(lista_secciones)

    #print(cod_elect_inf, cod_elect_teleco, cod_CFG)
    return lista_secciones, ramos_disponibles
