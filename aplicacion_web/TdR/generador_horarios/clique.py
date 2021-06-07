import networkx as nx
import matplotlib.pyplot as plt
import random
from .models import *

# seria bueno modularizar esta funcion

def get_clique_max_pond(current_user):
    datos_clique = nodo_seccion.objects.filter(to_nodo_asignatura__to_user=current_user, to_nodo_asignatura__es=1,to_seccion__vacantes_libres__gt=0).values('to_seccion__cod_seccion', 'to_nodo_asignatura__cc', 'to_nodo_asignatura__uu', 'to_nodo_asignatura__kk', 'ss', 'to_seccion__num_seccion', 'to_nodo_asignatura__to_asignatura_real__nro_correlativo', 'to_nodo_asignatura__to_asignatura_real__codigo', 'to_seccion__evento__dia', 'to_seccion__evento__tipo', 'to_seccion__evento__profesor', 'to_seccion__evento__modulo', 'to_seccion__num_seccion', 'to_seccion__to_asignatura_real__codigo', 'to_seccion__to_asignatura_real__nombre').order_by('-to_seccion__to_asignatura_real__importancia', 'to_nodo_asignatura__to_asignatura_real__codigo', 'to_seccion__cod_seccion').distinct()
    G = nx.Graph()
    print(len(datos_clique))

    if len(datos_clique)==0:
        return "n"

    try:
        prio_area_cfg = prioridad_cfg.objects.filter(to_user = current_user).values('area').order_by('prioridad')
        len_prio_area_cfg = len(prio_area_cfg)
        count_prio = 0
    except:
        prio_area_cfg = []
        len_prio_area_cfg = len(prio_area_cfg)
        count_prio = 0

    current_cfg_number = "0" #esto es para los cfg
    aux_seccion = datos_clique[0]['to_seccion__cod_seccion']
    aux_codigo = datos_clique[0]['to_nodo_asignatura__to_asignatura_real__codigo']
    aux_horario = []
    aux_eventos = []
    for elem in datos_clique:
        codigo = elem['to_nodo_asignatura__to_asignatura_real__codigo']
        # aca hacer un get prio del alumno, luego get area del cfg if es del area que se esta evaluando in else pass and if code i != code i+1 continue con la siguiente area break en el area 2 
        if codigo[0:3] == "CFG":
            if count_prio <= 2:# esto limita la cantidad de cfg
                if current_cfg_number != codigo[3]:
                    current_cfg_number = codigo[3]
                    count_prio+=1

                current_cfg_area = cfg_areas.objects.get(codigo = elem["to_seccion__cod_seccion"][0:7]).area
                if current_cfg_area == prio_area_cfg[0]['area'] or current_cfg_area == prio_area_cfg[1]['area']: # se consideran los cfg de las primeras areas
                    pass
                else:
                    continue
            else:
                continue

            

        try:
            horario = (elem['to_seccion__evento__dia'] + ' ' +
                       elem['to_seccion__evento__modulo'])
        except:
            horario = '---'

        try:
            # elimina las tildes de catedra y ayudantia

            if elem['to_seccion__evento__tipo'][0] == 'C':
                tipo = 'CATEDRA'
            elif elem['to_seccion__evento__tipo'][0] == 'A':
                tipo = 'AYUDANTIA'
            elif elem['to_seccion__evento__tipo'][0] == 'L':
                tipo = 'LABORATORIO'

            prof = elem['to_seccion__evento__profesor']

            # Algoritmo para eliminar las Ñ y las tildes de los nombres de profesores de la oferta academica.

            if prof != '':
                a, b = 'ÁÉÍÓÚÑáéíóúñ', 'AEIOUNaeioun'
                trans = str.maketrans(a, b)
                prof_modificado = prof.translate(trans)
            else:
                prof_modificado = ''

            evento = {'bloque': elem['to_seccion__evento__dia'] + '_' + elem['to_seccion__evento__modulo'][0:2],
                      'tipo': tipo, 'profesor': prof_modificado}

        except:
            evento = '---'

        if aux_seccion == elem['to_seccion__cod_seccion'] and aux_codigo == elem['to_nodo_asignatura__to_asignatura_real__codigo']:
            if horario not in aux_horario:
                aux_horario.append(horario)

            if evento not in aux_eventos:
                alfa = False
                for i in aux_eventos:
                    if i['bloque'] == evento['bloque']:
                        alfa = True
                        break

                if alfa == False:
                    aux_eventos.append(evento)

            cc = elem['to_nodo_asignatura__cc']
            uu = elem['to_nodo_asignatura__uu']
            kk = elem['to_nodo_asignatura__kk']
            ss = str(elem['ss']) if len(str(elem['ss'])) > 1 else ("0" + str(elem['ss']))
            #ss = elem['ss']

            prioridad = int(cc+uu+kk+ss)
            nombre_ramo = elem['to_seccion__to_asignatura_real__nombre']

            # cambia el nombre de la cajita "CFG" por el nombre real del curso.
            if nombre_ramo[0:3] == 'CFG':
                try:
                    cod_asignatura = elem["to_seccion__cod_seccion"][0:7]
                    nombre_ramo = asignatura_real.objects.get(
                        codigo=cod_asignatura).nombre

                except:
                    nombre_ramo = 'CURSO FORMACION GENERAL'

            nro_seccion = elem['to_seccion__num_seccion']
            if nro_seccion != "99":
                G.add_nodes_from([str(codigo + "   - " + elem["to_seccion__cod_seccion"])],
                                 horario=aux_horario, codigo_box=codigo, prioridad=prioridad, cod_seccion=elem['to_seccion__cod_seccion'], nro_seccion=nro_seccion, nombre=nombre_ramo, eventos=aux_eventos, cod_asignatura_real=elem['to_seccion__to_asignatura_real__codigo'])

            list_node = list(G.nodes.items())
                           
            if len(list_node) == 87:
                #print(str(codigo + "   - " + elem["to_seccion__cod_seccion"]))
                break
        else:
            aux_eventos = []
            aux_horario = []
            aux_horario.append(horario)
            aux_eventos.append(evento)
            aux_seccion = elem['to_seccion__cod_seccion']
            aux_codigo = elem['to_nodo_asignatura__to_asignatura_real__codigo']

    list_node = list(G.nodes.items())
    lenth_graph = len(list_node)

    for i in range(lenth_graph):
        if (i+1) < lenth_graph:
            for j in range(i+1, lenth_graph):
                # verificando que no se tomen dos secciones del mismo ramo
                if (list_node[i][1]["codigo_box"] != list_node[j][1]["codigo_box"] and list_node[i][0][0:7] != list_node[j][0][0:7]):
                    tope = 0
                    # se itera por los modulos que tiene la seccion
                    for k in range(len(list_node[i][1]["horario"])):
                        for x in range(len(list_node[j][1]["horario"])):
                            # verificando que no topen los horarios
                            if (list_node[i][1]["horario"][k] == list_node[j][1]["horario"][x]):
                                tope += 1
                                break  # termina de ver los modulos, ya que pillo una que topa
                    if tope == 0:
                        G.add_edge(list_node[i][0], list_node[j][0])

    prev_solution = []
    aux_retornar = []

    show_options = 5
    for i in range(show_options):

        max_clique_pond = nx.max_weight_clique(G, weight="prioridad")
        arr_aux_delete = []
        solucion = []
        for elem in max_clique_pond[0]:
            arr_aux_delete.append((elem, G.nodes[elem]["prioridad"]))

        arr_aux_delete.sort(key=lambda tup: tup[1])

        while len(arr_aux_delete) > 6:
            # se elimina el mas peso mas chico de la lista
            arr_aux_delete.pop(0)

        if prev_solution == arr_aux_delete:  # sirve para no mostrar siempre las mismas soluciones
            continue
        else:

            # print("---------------")
            # print("\nSolucion Recomendada #", i+1, ": \n")
            for elem in arr_aux_delete:  # muestra las secciones a tomar
                aux_modulos = ""
                for beta in G.nodes[elem[0]]["horario"]:
                    aux_modulos += " "+beta[0:8]

                solucion.append({'nombre': G.nodes[elem[0]]["nombre"], 'horario': aux_modulos, 'nro_seccion': G.nodes[elem[0]]["nro_seccion"],
                                 'cod_asignatura_real': G.nodes[elem[0]]["cod_asignatura_real"], 'eventos': G.nodes[elem[0]]["eventos"], 'cod_seccion': G.nodes[elem[0]]["cod_seccion"]})
                #print(elem[0][0: 7], " || ", "| Horario -> ", G.nodes[elem[0]]["horario"], "||",G.nodes[elem[0]]["prioridad"], "codigo seccion ->", G.nodes[elem[0]]["cod_seccion"])
                # print(solucion)
            if solucion != []:
                aux_retornar.append(solucion)
        prev_solution = arr_aux_delete
        try:
            G.remove_node(arr_aux_delete[0][0])
        except:
            break

    return aux_retornar
