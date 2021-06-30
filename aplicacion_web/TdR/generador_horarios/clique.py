import networkx as nx
import matplotlib.pyplot as plt
import random
import traceback
from .models import *

# seria bueno modularizar esta funcion

def getData(userId):
    data = dict()
    
    data["datos_clique"] = nodo_seccion.objects.filter(
        to_nodo_asignatura__to_user=userId, 
        to_nodo_asignatura__es=1,
        to_seccion__vacantes_libres__gt=0
    ).exclude(to_seccion__evento=None).values( # en el excel hay secciones que tienen vacantes libres pero no eventos (ej. CIT1010_CA01 en malla 2021-1)
        'to_seccion__cod_seccion', 'to_nodo_asignatura__cc', 'to_nodo_asignatura__uu', 'to_nodo_asignatura__kk', 'ss', 'to_seccion__num_seccion', 'to_nodo_asignatura__to_asignatura_real__nro_correlativo', 'to_nodo_asignatura__to_asignatura_real__codigo', 'to_seccion__evento__dia', 'to_seccion__evento__tipo', 'to_seccion__evento__profesor', 'to_seccion__evento__modulo', 'to_seccion__num_seccion', 'to_seccion__to_asignatura_real__codigo', 'to_seccion__to_asignatura_real__nombre'
    ).order_by(
        '-to_seccion__to_asignatura_real__importancia', 'to_nodo_asignatura__to_asignatura_real__codigo', 'to_seccion__cod_seccion'
    ).distinct()

    # data["nombres_ramo"] =dict()
    data["cfg_areas"] = dict()
    for event in data["datos_clique"]:
        event["nombre_ramo"] = event['to_seccion__to_asignatura_real__nombre']
        codigo = event['to_nodo_asignatura__to_asignatura_real__codigo']
        if codigo[0:3] == "CFG":
            event["cfg_area"] = cfg_areas.objects.get(codigo = event["to_seccion__cod_seccion"][0:7]).area
            try:# cambia el nombre de la cajita "CFG" por el nombre real del curso.
                cod_asignatura = event["to_seccion__cod_seccion"][0:7]
                event["nombre_ramo"] = asignatura_real.objects.get(codigo=cod_asignatura).nombre
            except asignatura_real.DoesNotExist:
                traceback.print_exc()
                event["nombre_ramo"] = 'CURSO FORMACION GENERAL'

    data["prioridad_cfg"] = prioridad_cfg.objects.filter(to_user = userId).values('area').order_by('prioridad')
    if len(data["prioridad_cfg"]) < 2:
        data["prioridad_cfg"] = [{'area': "Ciencias Sociales"}, {'area': "Ciencia y Sociedad"}]

    return data

def getParsedEvent(event):
    # elimina las tildes de catedra y ayudantia
    if event['to_seccion__evento__tipo'][0] == 'C':
        tipo = 'CATEDRA'
    elif event['to_seccion__evento__tipo'][0] == 'A':
        tipo = 'AYUDANTIA'
    elif event['to_seccion__evento__tipo'][0] == 'L':
        tipo = 'LABORATORIO'
    else:
        tipo = event['to_seccion__evento__tipo']

    prof = event['to_seccion__evento__profesor']

    # Algoritmo para eliminar las Ñ y las tildes de los nombres de profesores de la oferta academica.
    if prof != '':
        a, b = 'ÁÉÍÓÚÑáéíóúñ', 'AEIOUNaeioun'
        trans = str.maketrans(a, b)
        prof_modificado = prof.translate(trans)
    else:
        prof_modificado = ''
    parsedEvent = {
        'bloque': event['to_seccion__evento__dia'] + '_' + event['to_seccion__evento__modulo'][0:2],
        'tipo': tipo, 
        'profesor': prof_modificado
    }
    return parsedEvent

def get_clique_max_pond(current_user):

    data = getData(current_user)
    datos_clique = data["datos_clique"] 
    G = nx.Graph()

    if len(datos_clique)==0:
        return "n"

    prio_area_cfg = data["prioridad_cfg"]
    count_prio = 0

    current_cfg_number = "0" #esto es para los cfg
    aux_seccion = datos_clique[0]['to_seccion__cod_seccion']
    aux_codigo = datos_clique[0]['to_nodo_asignatura__to_asignatura_real__codigo']
    aux_horario = []
    aux_eventos = []
    for elem in datos_clique:
        codigo = elem['to_nodo_asignatura__to_asignatura_real__codigo']
        if codigo[0:3] == "CFG":
            if count_prio <= 2:# esto limita la cantidad de cfg
                if current_cfg_number != codigo[3]:
                    current_cfg_number = codigo[3]
                    count_prio+=1 # aqui hay un bug. esto cuenta un cfg a pesar de que este se salte.
                if not (elem["cfg_area"] == prio_area_cfg[0]['area'] or elem["cfg_area"] == prio_area_cfg[1]['area']): # se saltan cfgs que no son prio 1 o 2.
                    continue
            else:
                continue

        try:  
            horario = (
                elem['to_seccion__evento__dia'] + ' ' + elem['to_seccion__evento__modulo']
            )
        except Exception as exc:
            raise Exception("Error al intentar crear variable horario") from exc


        
        evento = getParsedEvent(elem)

        #se agregan los nodos del grafo (1 vez por cada evento, eventos de la misma seccion sobre-escriben el nodo)
        if aux_seccion == elem['to_seccion__cod_seccion'] and aux_codigo == elem['to_nodo_asignatura__to_asignatura_real__codigo']:
            if horario not in aux_horario: #evitar agregar horarios duplicados
                aux_horario.append(horario)

            if evento not in aux_eventos: #que se revisa aqui? evitar agragar eventos duplicados
                alfa = False
                for i in aux_eventos:
                    if i['bloque'] == evento['bloque']:
                        alfa = True
                        break

                if alfa == False:
                    aux_eventos.append(evento)
#potencialmente, esto deberia ir al comienzo del else que viene. *Mentira no se puede sin modificarlo por las referencias a elem[...]
            cc = elem['to_nodo_asignatura__cc']
            uu = elem['to_nodo_asignatura__uu']
            kk = elem['to_nodo_asignatura__kk']
            ss = str(elem['ss']) if len(str(elem['ss'])) > 1 else ("0" + str(elem['ss']))

            prioridad = int(cc+uu+kk+ss)



            nro_seccion = elem['to_seccion__num_seccion']
            if nro_seccion != "99": # las pruebas de eximicion de ingles tienen nro_seccion 99.
                G.add_nodes_from([str(codigo + "   - " + elem["to_seccion__cod_seccion"])],
                                 horario=aux_horario, codigo_box=codigo, prioridad=prioridad, cod_seccion=elem['to_seccion__cod_seccion'], nro_seccion=nro_seccion, nombre=elem["nombre_ramo"], eventos=aux_eventos, cod_asignatura_real=elem['to_seccion__to_asignatura_real__codigo']) # no entiendo muy bien la composicion de uno de estos nodos [?] Cual es la diferencia entre horario y eventos? Agrega 1 nodo o multiples nodos?

            list_node = list(G.nodes.items())
                           
            if len(list_node) == 87: #esto trunca la cantidad de secciones a 87?
                #print(str(codigo + "   - " + elem["to_seccion__cod_seccion"]))
                break
        else: # que caso se esta cubriendo en este else?
            aux_eventos = []
            aux_horario = []
            aux_horario.append(horario)
            aux_eventos.append(evento)
            aux_seccion = elem['to_seccion__cod_seccion']
            aux_codigo = elem['to_nodo_asignatura__to_asignatura_real__codigo']

    list_node = list(G.nodes.items())
    lenth_graph = len(list_node)
    # se agregan las aristas del grafo
    for i in range(lenth_graph):
        if (i+1) < lenth_graph:
            for j in range(i+1, lenth_graph):
                # verificando que no se tomen dos secciones del mismo ramo
                if (list_node[i][1]["codigo_box"] != list_node[j][1]["codigo_box"] and list_node[i][0][0:7] != list_node[j][0][0:7]): #que revisa la expresion: list_node[i][0][0:7] != list_node[j][0][0:7] (es el codigo del ramo) ? Que es codigo_box exactamente? codigo de la asignatura que sale en la malla
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

    # se calculan los horarios a recomendar.
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
            pass # aca en vez de "continue" debiese ir "pass"[?]. (potencialmente menos de 5 opciones en ambos casos)
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
        except nx.NetworkXError:
            break

    return aux_retornar
