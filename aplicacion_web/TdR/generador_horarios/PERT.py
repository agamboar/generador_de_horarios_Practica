import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
import random
from .models import *


def set_values_recursive(PERT, id_node, len_dag):

    # sirve para saber en cuantos semestre se debera tomar, idealmente, un ramo
    arr_anc = list(nx.ancestors(PERT, id_node))
    max_count_jump = 1
    for elem1 in arr_anc:  # se calcula el camino mas grande desde todos los antecesores del nodo id_node
        if max_count_jump < len(list(nx.all_simple_paths(PERT, elem1, id_node))[0]):
            max_count_jump = len(
                list(nx.all_simple_paths(PERT, elem1, id_node))[0])

    PERT.nodes[id_node]["ES"] = max_count_jump if (PERT.nodes[id_node]["ES"] == False or (
        max_count_jump > PERT.nodes[id_node]["ES"])) else PERT.nodes[id_node]["ES"]
    PERT.nodes[id_node]["EF"] = PERT.nodes[id_node]["ES"] + 1  # este uno es D
    PERT.nodes[id_node]["LF"] = len_dag if len_dag > 1 and (
        PERT.nodes[id_node]["LF"] == False or PERT.nodes[id_node]["LF"] > len_dag) else PERT.nodes[id_node]["EF"]
    H = PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"] if PERT.nodes[id_node]["H"] == False or (
        PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"] < PERT.nodes[id_node]["H"]) else PERT.nodes[id_node]["H"]
    PERT.nodes[id_node]["H"] = H if H > 0 else 0
    PERT.nodes[id_node]["LS"] = PERT.nodes[id_node]["ES"] + \
        PERT.nodes[id_node]["H"]

    # nodos que apuntan al nodo id_node
    node_pred_arr = list(PERT.predecessors(id_node))

    for elem in node_pred_arr:
        set_values_recursive(PERT, elem, len_dag-1)
    return PERT


def getRamoCritico(codigos_asignaturas_cursadas, codigos_ramos_malla, current_user):

    codigos_ramos_no_cursados = []

    for codigo in codigos_ramos_malla:
        if codigo not in codigos_asignaturas_cursadas:
            codigos_ramos_no_cursados.append(codigo)

    codigos_ramos_no_cursados = np.array(codigos_ramos_no_cursados)

    PERT = nx.DiGraph()  # Grafo dirigido

    for codigo in codigos_ramos_no_cursados:
        PERT.add_nodes_from([codigo], ES=False, EF=False,
                            LS=False, LF=False, H=False)

    for elem in codigos_ramos_no_cursados:
        try:
            codigos_prerrequisitos_ramo = asignatura_real.objects.get(
                codigo=elem).prerrequisito.all().values_list('codigo', flat=True)
        except:
            continue

        for i in codigos_prerrequisitos_ramo:  # Se sacan los prerrequisitos de la base de datos
            if i in codigos_ramos_no_cursados:
                PERT.add_edge(i, elem)

    # Asigna el nombre del nodo final, dependiendo de la malla del alumno

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
        print(list(PERT.predecessors(elem)), elem)
        if len(list(PERT.predecessors(elem))) > 0:
            for k in list(PERT.predecessors(elem)):
                PERT = set_values_recursive(PERT, k, long_path-1)

    ramos_disponibles = {}

    # aca se determinan los ramos criticos y los ramos que se pueden tomar.

    u = User.objects.get(id=current_user)

    for elem in list(PERT):

        aux_critico = False
        cc = '00'
        nro_correlativo = int(asignatura_real.objects.get(
            codigo=elem).nro_correlativo)
        aux_kk = str(60-nro_correlativo)
        kk = aux_kk if len(aux_kk) > 1 else str("0"+aux_kk)

        if PERT.nodes[elem]["H"] == 0 and PERT.nodes[elem]["LS"] == 1:
            aux_critico = True
            cc = '10'

        holgura = PERT.nodes[elem]["H"]

        aux_UU = str(10-holgura)
        uu = aux_UU if len(aux_UU) > 1 else str("0" + aux_UU)

        r = nodo_asignatura(holgura=PERT.nodes[elem]["H"], ef=PERT.nodes[elem][
            "EF"], es=PERT.nodes[elem]["ES"], ls=PERT.nodes[elem]["LS"], lf=PERT.nodes[elem]["LF"], critico=aux_critico, cc=cc, uu=uu, kk=kk)  # NO OLVIDAR CC, UU, KK, Y SS

        r.save()
        n = nodo_asignatura.objects.get(id=r.id)
        n.to_user.add(u)
        a = asignatura_real.objects.get(codigo=elem)
        n.to_asignatura_real.add(a)

    return ramos_disponibles

# Funcion para obtener las secciones que puede inscribir el alumno. Se guardan en la tabla nodo_seccion y se relacionan
# con una seccion y con un nodo_asignatura, el cual esta relacionado con un alumno en especifico, por lo que
# cada nodo_seccion esta relacionado con un alumno, de manera indirecta, a traves de nodo_asignatura.
# La tabla nodo_seccion tiene el atributo del peso "ss", el cual sera updateado en otra view
# por el alumno, asignandole más o menos peso a una seccion, según su preferencia.
# Lo mismo con el peso de la asignatura disponible "kk".


def get_secciones_disponibles(current_user):

    u = User.objects.get(id=current_user)

    try:
        nodo_seccion.objects.filter(
            to_nodo_asignatura__to_user=current_user).delete()
    except:
        pass

    nodos_user = nodo_asignatura.objects.filter(to_user=u)

    for elem in nodos_user:

        secciones_user = seccion.objects.filter(
            to_asignatura_real__nodo_asignatura=elem)
        print(secciones_user)

        for s in secciones_user:

            nro_seccion = s.num_seccion
            ss = str(nro_seccion) if len(str(nro_seccion)
                                         ) > 1 else ("0" + str(nro_seccion))
            codigo_seccion = s.cod_seccion
            sec = seccion.objects.get(cod_seccion=codigo_seccion)

            ns = nodo_seccion(ss=ss, to_nodo_asignatura=elem)
            ns.save()

            ns.to_seccion.add(s)

# getRamoCritico('MiMalla.xlsx')


# Nombre de la actividad;
    # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
    # Tiempo de inicio más temprano (ES = Earliest Start);-> el mayor de las opciones
    # Tiempo de término más temprano (EF = Earliest Finish);-> ES + D  (operacion)
    # Tiempo de inicio más tardío (LS = Latest Start); -> ES + H
    # Tiempo de término más tardío (LF = Latest Finish); -> el mas chico
    # Holgura de la Actividad (H); LF-EF
