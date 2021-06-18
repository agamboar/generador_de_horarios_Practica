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

    PERT.nodes[id_node]["ES"] = max_count_jump if (PERT.nodes[id_node]["ES"] == False or (max_count_jump > PERT.nodes[id_node]["ES"])) else PERT.nodes[id_node]["ES"]
    PERT.nodes[id_node]["EF"] = PERT.nodes[id_node]["ES"] + 1  # este uno es D
    PERT.nodes[id_node]["LF"] = len_dag if len_dag > 1 and (PERT.nodes[id_node]["LF"] == False or PERT.nodes[id_node]["LF"] > len_dag) else PERT.nodes[id_node]["LF"]
    H = PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"] if PERT.nodes[id_node]["H"] == False or (PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"] < PERT.nodes[id_node]["H"]) else PERT.nodes[id_node]["H"]
    PERT.nodes[id_node]["H"] = H if H > 0 else 0
    PERT.nodes[id_node]["LS"] = PERT.nodes[id_node]["ES"] + PERT.nodes[id_node]["H"]

    # nodos que apuntan al nodo id_node
    node_pred_arr = list(PERT.predecessors(id_node))

    for elem in node_pred_arr:
        set_values_recursive(PERT, elem, len_dag-1)
    return PERT


def getRamoCritico(codigos_asignaturas_cursadas, codigos_ramos_malla, user_id):

    codigos_ramos_no_cursados = []

    for ramoId in codigos_ramos_malla:
        if ramoId not in codigos_asignaturas_cursadas:
            codigos_ramos_no_cursados.append(ramoId)

    codigos_ramos_no_cursados = np.array(codigos_ramos_no_cursados)

    PERT = nx.DiGraph()  # Grafo dirigido

    for ramoId in codigos_ramos_no_cursados:
        PERT.add_nodes_from([ramoId], ES=False, EF=False,LS=False, LF=False, H=False)

    for ramoId in codigos_ramos_no_cursados:
        try:
            codigos_prerrequisitos_ramo = asignatura_real.objects.get(codigo=ramoId).prerrequisito.all().values_list('codigo', flat=True)
        except:
            continue

        for i in codigos_prerrequisitos_ramo:  # Se sacan los prerrequisitos de la base de datos
            if i in codigos_ramos_no_cursados:
                PERT.add_edge(i, ramoId)

    # Asigna el nombre del nodo final, dependiendo de la malla del alumno

    if 'FINAL1' in codigos_ramos_malla:
        nodo_aux_final = 'FINAL1'
    elif 'FINAL2' in codigos_ramos_malla:
        nodo_aux_final = 'FINAL2'
    elif 'FINAL3' in codigos_ramos_malla:
        nodo_aux_final = 'FINAL3'

    # itera sobre los nodos que apuntan al ultimo nodo que es el nodo auxiliar final y se asignan los pesos

    for predecesor_nodo_final in list(PERT.predecessors(nodo_aux_final)):

        long_path = len(nx.dag_longest_path(PERT))
        ancestros = list(nx.ancestors(PERT, predecesor_nodo_final))
        max_count_jump = 1
        for nodo_ancestro in ancestros:
            if max_count_jump < len(list(nx.all_simple_paths(PERT, nodo_ancestro, predecesor_nodo_final))[0]):
                max_count_jump = len(list(nx.all_simple_paths(PERT, nodo_ancestro, predecesor_nodo_final))[0])

        PERT.nodes[predecesor_nodo_final]["ES"] = max_count_jump
        PERT.nodes[predecesor_nodo_final]["EF"] = max_count_jump + 1  # este uno es D
        PERT.nodes[predecesor_nodo_final]["LF"] = long_path
        PERT.nodes[predecesor_nodo_final]["H"] = PERT.nodes[predecesor_nodo_final]["LF"] - PERT.nodes[predecesor_nodo_final]["EF"]
        PERT.nodes[predecesor_nodo_final]["LS"] = PERT.nodes[predecesor_nodo_final]["ES"] + PERT.nodes[predecesor_nodo_final]["H"]

        # itera sobre los padres de los nodos que apuntan a 53

        if len(list(PERT.predecessors(predecesor_nodo_final))) > 0:
            for predecesor in list(PERT.predecessors(predecesor_nodo_final)):
                PERT = set_values_recursive(PERT, predecesor, long_path-1)
    
    # fin calculo de PERT

    ramos_disponibles = {}

    # aca se determinan los ramos criticos y los ramos que se pueden tomar.

    for nodo_PERT in list(PERT):

        aux_critico = False
        cc = '00'
        nro_correlativo = int(asignatura_real.objects.get(codigo=nodo_PERT).nro_correlativo)
        aux_kk = str(60-nro_correlativo)
        kk = aux_kk if len(aux_kk) > 1 else str("0"+aux_kk)

        if PERT.nodes[nodo_PERT]["H"] == 0 and PERT.nodes[nodo_PERT]["LS"] == 1:
            aux_critico = True
            cc = '10'

        holgura = PERT.nodes[nodo_PERT]["H"]

        aux_UU = str(10-holgura)
        uu = aux_UU if len(aux_UU) > 1 else str("0" + aux_UU)

        params = {
            'holgura': PERT.nodes[nodo_PERT]["H"], 
            'ef': PERT.nodes[nodo_PERT]["EF"], 
            'es': PERT.nodes[nodo_PERT]["ES"], 
            'ls': PERT.nodes[nodo_PERT]["LS"], 
            'lf': PERT.nodes[nodo_PERT]["LF"], 
            'critico': aux_critico, 
            'cc': cc,
            'uu': uu,
            'kk': kk,
            'to_user': User.objects.get(id=user_id),
            'to_asignatura_real': asignatura_real.objects.get(codigo=nodo_PERT)
        }
        nodo_asignatura(**params).save()
        
        # modificar ya que setea KK y SS y no toma en cuenta la asignacion de pesos hecha por el alumno
        # r = nodo_asignatura(holgura=PERT.nodes[nodo_PERT]["H"], ef=PERT.nodes[nodo_PERT]["EF"], es=PERT.nodes[nodo_PERT]["ES"], ls=PERT.nodes[nodo_PERT]["LS"], lf=PERT.nodes[nodo_PERT]["LF"], critico=aux_critico, cc=cc, uu=uu, kk=kk)
        
        # r.save()
        # n = nodo_asignatura.objects.get(id=r.id)
        # n.to_user.add(u)
        # a = asignatura_real.objects.get(codigo=nodo_PERT)
        # n.to_asignatura_real.add(a)

    return ramos_disponibles

# Funcion para guardar  las secciones que puede inscribir el alumno en la base de datos. Se guardan en la tabla nodo_seccion y se relacionan
# con una seccion y con un nodo_asignatura, el cual esta relacionado con un alumno en especifico, por lo que
# cada nodo_seccion esta relacionado con un alumno, de manera indirecta, a traves de nodo_asignatura.
# La tabla nodo_seccion tiene el atributo del peso "ss", el cual sera updateado en otra view
# por el alumno, asignandole más o menos peso a una seccion, según su preferencia.
# Lo mismo con el peso de la asignatura disponible "kk".


def add_nodo_seccion(current_user):

    user = User.objects.get(id=current_user)

    try:
        nodo_seccion.objects.filter(
            to_nodo_asignatura__to_user=current_user).delete()
    except:
        pass

    nodos_asignatura_user = nodo_asignatura.objects.filter(to_user=user)  # los ramos que el alumno no ha dado

    for nodoAsignatura in nodos_asignatura_user:


        #codigo_asignatura = asignatura_real.objects.filter(odo_asignatura__id=nodoAsignatura.id)[0].codigo
        asignatura = nodoAsignatura.to_asignatura_real

        secciones_ramo_user = list(seccion.objects.filter(to_asignatura_real=asignatura,vacantes_libres__gt=0))  # las secciones de los ramos que no ha dado el alumno y que tienen cupos disponibles

        # equivalencias
        if len(secciones_ramo_user) == 0:
            
            codigo_box = asignatura_real.objects.get(nodo_asignatura__id=nodoAsignatura.id).codigo
            asignaturas_reales = list(asignatura_real.objects.filter(equivale=codigo_box))

            for asig_real in asignaturas_reales:

                seccion_real = seccion.objects.filter(to_asignatura_real=asig_real.codigo)
                if (seccion_real) and (seccion_real not in secciones_ramo_user):
                    for i in range(0, len(seccion_real)):
                        secciones_ramo_user.append(seccion_real[i]) #antes no estaba este for y solo se guardaba la primera seccion de 159     
                else:
                    continue
         
            
        #print(secciones_ramo_user)
        for s in secciones_ramo_user:

            #nro_seccion = int(s.num_seccion)
            #ss = nro_seccion
            #ss = str(nro_seccion) if len(str(nro_seccion)) > 1 else ("0" + str(nro_seccion))
            #codigo_seccion = s.cod_seccion # para que es esto ?
            #sec = seccion.objects.get(cod_seccion=codigo_seccion) # para que es esto ?

            nodoSeccion = nodo_seccion(ss=int(s.num_seccion), to_nodo_asignatura=nodoAsignatura, to_seccion=s)
            nodoSeccion.save()

# getRamoCritico('MiMalla.xlsx')


# Nombre de la actividad;
    # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
    # Tiempo de inicio más temprano (ES = Earliest Start);-> el mayor de las opciones
    # Tiempo de término más temprano (EF = Earliest Finish);-> ES + D  (operacion)
    # Tiempo de inicio más tardío (LS = Latest Start); -> ES + H
    # Tiempo de término más tardío (LF = Latest Finish); -> el mas chico
    # Holgura de la Actividad (H); LF-EF
