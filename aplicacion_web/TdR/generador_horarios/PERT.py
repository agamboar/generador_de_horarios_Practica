import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
import random
from .models import *


def set_values_recursive(PERT, codigo_nodo, len_dag):
    print(codigo_nodo)

    # sirve para saber en cuantos semestre se debera tomar, idealmente, un ramo
    arr_anc = list(nx.ancestors(PERT, codigo_nodo))
    max_count_jump = 1
    for elem1 in arr_anc:  # se calcula el camino mas grande desde todos los antecesores del nodo codigo_nodo
        if max_count_jump < len(list(nx.all_simple_paths(PERT, elem1, codigo_nodo))[0]):
            max_count_jump = len(
                list(nx.all_simple_paths(PERT, elem1, codigo_nodo))[0])

    PERT.nodes[codigo_nodo]["ES"] = max_count_jump if (PERT.nodes[codigo_nodo]["ES"] == None or (
        max_count_jump > PERT.nodes[codigo_nodo]["ES"])) else PERT.nodes[codigo_nodo]["ES"]
    # este uno es D
    PERT.nodes[codigo_nodo]["EF"] = PERT.nodes[codigo_nodo]["ES"] + 1
    PERT.nodes[codigo_nodo]["LF"] = len_dag if len_dag > 1 and (
        PERT.nodes[codigo_nodo]["LF"] == None or PERT.nodes[codigo_nodo]["LF"] > len_dag) else PERT.nodes[codigo_nodo]["EF"]
    H = PERT.nodes[codigo_nodo]["LF"] - PERT.nodes[codigo_nodo]["EF"] if PERT.nodes[codigo_nodo]["H"] == None or (
        PERT.nodes[codigo_nodo]["LF"] - PERT.nodes[codigo_nodo]["EF"] < PERT.nodes[codigo_nodo]["H"]) else PERT.nodes[codigo_nodo]["H"]
    PERT.nodes[codigo_nodo]["H"] = H if H > 0 else 0
    PERT.nodes[codigo_nodo]["LS"] = PERT.nodes[codigo_nodo]["ES"] + \
        PERT.nodes[codigo_nodo]["H"]
    # nodos que apuntan al nodo codigo_nodo
    node_pred_arr = list(PERT.predecessors(codigo_nodo))

    for elem in node_pred_arr:
        set_values_recursive(PERT, elem, len_dag-1)
    return PERT


def getRamoCritico(codigos_asignaturas_cursadas, codigos_ramos_malla, current_user):

    #ramos_cursados =  np.array(pd.read_excel(excel_ramos_aprobados, header = None))
    #codigos_ramos_cursados = ramos_cursados[:,1]

    #año_malla = ramos_cursados[0,1]
    #nombre_excel_malla = 'MallaCurricular{}.xlsx'.format(str(año_malla))
    #malla_alumno = np.array(pd.read_excel(nombre_excel_malla))
    #codigos_ramos_malla = malla_alumno[:,1]

    codigos_ramos_no_cursados = []

    for codigo in codigos_ramos_malla:
        if codigo not in codigos_asignaturas_cursadas:
            codigos_ramos_no_cursados.append(codigo)

    codigos_ramos_no_cursados = np.array(codigos_ramos_no_cursados)

    # hasta aqui

    # se hace aca
    PERT = nx.DiGraph()  # Grafo dirigido

    for codigo in codigos_ramos_no_cursados:
        PERT.add_nodes_from([codigo], ES=-1, EF=-1,
                            LS=-1, LF=-1, H=-1)

    for elem in codigos_ramos_no_cursados:
        try:
            codigos_prerrequisitos_ramo = asignatura_real.objects.get(
                codigo=elem).prerrequisito.all().values_list('codigo', flat=True)
        except:
            continue

        for i in codigos_prerrequisitos_ramo:  # aqui se deben sacar los prerrequisitos de la base
            if i in codigos_ramos_no_cursados:
                PERT.add_edge(i, elem)
    # print(list(PERT))

    if 'FINAL1' in codigos_ramos_malla:
        aux = 'FINAL1'
    elif 'FINAL2' in codigos_ramos_malla:
        aux = 'FINAL2'
    elif 'FINAL3' in codigos_ramos_malla:
        aux = 'FINAL3'
    # itera sobre los nodos que apuntan al ultimo nodo que es el nodo auxiliar final y se asignan los pesos

    for elem in list(PERT.predecessors(aux)):
        long_path = len(nx.dag_longest_path(PERT))
        arr_anc = list(nx.ancestors(PERT, elem))
        max_count_jump = 1
        for elem1 in arr_anc:
            if max_count_jump < len(list(nx.all_simple_paths(PERT, elem1, elem))[0]):
                max_count_jump = len(
                    list(nx.all_simple_paths(PERT, elem1, elem))[0])

        PERT.nodes[elem]["ES"] = max_count_jump
        PERT.nodes[elem]["EF"] = max_count_jump + 1  # este uno es D
        PERT.nodes[elem]["LF"] = long_path
        PERT.nodes[elem]["H"] = PERT.nodes[elem]["LF"] - PERT.nodes[elem]["EF"]
        PERT.nodes[elem]["LS"] = PERT.nodes[elem]["ES"] + PERT.nodes[elem]["H"]
        # itera sobre los padres de los nodos que apuntan a 53
        if len(list(PERT.predecessors(elem))) > 0:
            for k in list(PERT.predecessors(elem)):
                PERT = set_values_recursive(PERT, k, long_path-1)

    ramos_disponibles = {}
    #print(PERT.nodes['CIT2102']['H'], PERT.nodes['CIT2102']['LF'])
    # se hace aca
    #print("\nPERT Generado:\n ")
    # print(list(PERT))
    # aca se determinan los ramos criticos y los ramos que se pueden tomar.
    u = User.objects.get(id=current_user)

    for elem in list(PERT):

        aux_critico = False

        if PERT.nodes[elem]["H"] == 0 and PERT.nodes[elem]["LS"] == 1:
            aux_critico = True

        r = nodo_asignatura(holgura=PERT.nodes[elem]["H"], ef=PERT.nodes[elem][
            "EF"], es=PERT.nodes[elem]["ES"], ls=PERT.nodes[elem]["LS"], lf=PERT.nodes[elem]["LF"], critico=aux_critico)

        r.save()
        n = nodo_asignatura.objects.get(id=r.id)
        n.to_user.add(u)
        a = asignatura_real.objects.get(codigo=elem)
        n.to_asignatura_real.add(a)

    # hasta aca
    """ print("Ramos criticos: ")
    for i in list(ramos_disponibles):
        if ramos_disponibles[i]["critico"] == True:
            print("->> ", ramos_disponibles[i]["nombre"],
                  "-", ramos_disponibles[i]["codigo"])

    print("\nRamos no criticos: ")
    for i in list(ramos_disponibles):
        if ramos_disponibles[i]["critico"] == False:
            print("->> ", ramos_disponibles[i]["nombre"],
                  "-", ramos_disponibles[i]["codigo"])

    print("\nExtrayendo Datos...\n")
    # nx.draw_shell(PERT, with_labels=True, font_weight='bold') #se dibuja el grafo generado
    # plt.show()
    # se debe pasar el año del pibe """
    return ramos_disponibles

# getRamoCritico('MiMalla.xlsx')


# Nombre de la actividad;
    # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
    # Tiempo de inicio más temprano (ES = Earliest Start);-> el mayor de las opciones
    # Tiempo de término más temprano (EF = Earliest Finish);-> ES + D  (operacion)
    # Tiempo de inicio más tardío (LS = Latest Start); -> ES + H
    # Tiempo de término más tardío (LF = Latest Finish); -> el mas chico
    # Holgura de la Actividad (H); LF-EF
