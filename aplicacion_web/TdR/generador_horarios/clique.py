import networkx as nx
import matplotlib.pyplot as plt
import random
from .models import *


def get_clique_max_pond(current_user):

    datos_clique = nodo_seccion.objects.filter(to_nodo_asignatura__to_user=2, to_nodo_asignatura__es=1).values('to_seccion__cod_seccion', 'to_nodo_asignatura__cc', 'to_nodo_asignatura__uu', 'to_nodo_asignatura__kk', 'ss', 'to_seccion__num_seccion', 'to_nodo_asignatura__to_asignatura_real__nro_correlativo',
                                                                                                               'to_nodo_asignatura__to_asignatura_real__codigo', 'to_seccion__evento__dia', 'to_seccion__evento__modulo', 'to_seccion__to_asignatura_real__codigo').order_by('-to_seccion__to_asignatura_real__importancia', 'to_seccion__to_asignatura_real__codigo', 'to_seccion__cod_seccion').distinct()
    G = nx.Graph()

    aux_seccion = datos_clique[0]['to_seccion__cod_seccion']
    aux_horario = []
    aux_codigo = datos_clique[0]['to_seccion__to_asignatura_real__codigo']

    for elem in datos_clique:
        try:
            horario = (elem['to_seccion__evento__dia'] + ' ' +
                       elem['to_seccion__evento__modulo'])
        except:

            horario = '---'

        if aux_seccion == elem['to_seccion__cod_seccion'] and aux_codigo == elem['to_seccion__to_asignatura_real__codigo']:
            codigo = elem['to_nodo_asignatura__to_asignatura_real__codigo']
            if horario not in aux_horario:
                aux_horario.append(horario)

            cc = elem['to_nodo_asignatura__cc']
            uu = elem['to_nodo_asignatura__uu']
            kk = elem['to_nodo_asignatura__kk']
            ss = elem['ss']

            prioridad = int(cc+uu+kk+ss)
            # print(elem["to_seccion__cod_seccion"])

            G.add_nodes_from([str(codigo + "   - " + elem["to_seccion__cod_seccion"])],
                             horario=aux_horario, codigo_box=codigo, prioridad=prioridad, cod_seccion=elem['to_seccion__cod_seccion'])
            list_node = list(G.nodes.items())

            if len(list_node) == 130:
                break
        else:
            aux_horario = []
            aux_horario.append(horario)
            aux_seccion = elem['to_seccion__cod_seccion']
            aux_codigo = elem['to_seccion__to_asignatura_real__codigo']

    list_node = list(G.nodes.items())
    lenth_graph = len(list_node)

    for i in range(lenth_graph):
        if (i+1) < lenth_graph:
            for j in range(i+1, lenth_graph):
                # verificando que no se tomen dos secciones del mismo ramo
                if (list_node[i][1]["codigo_box"] != list_node[j][1]["codigo_box"] and list_node[i][0][0:7] != list_node[j][0][0:7]):
                    # list_node[i][0][0:7] != list_node[j][0][0:7] # verificar por codigo, es mejor
                    tope = 0
                    # se itera por los modulos que tiene la seccion
                    for k in range(len(list_node[i][1]["horario"])):
                        for x in range(len(list_node[j][1]["horario"])):
                            # verificando que no topen los horarios
                            if (list_node[i][1]["horario"][k] == list_node[j][1]["horario"][x]):
                                tope += 1
                                break  # termina de ver los modulos, ya que pillo una que topa
                    if tope == 0:
                        # se unen los nodos si no tienen topes de horarios -> se debe analizar el codigo box y el codigo referncia = codigo[0:7]
                        G.add_edge(list_node[i][0], list_node[j][0])
    print(len(list(G.nodes.items())))
    print(list(G.nodes.items())[0])
    prev_solution = []
    aux_retornar = []
    # se dibuja el grafo generado
    #nx.draw(G, with_labels=True, font_weight='bold')
    # plt.show()
    #print(nx.max_weight_clique(G, weight="prioridad")[0], '--------------')

    show_options = 10
    for i in range(show_options):
        # se obtiene el maximo clique con mayor peso ponderado
        max_clique_pond = nx.max_weight_clique(G, weight="prioridad")
        # if len(max_clique_pond[0]) <= 2:
        #    print("\n---------------")
        #    print("Solo quedan soluciones con 2 o menos ramos")
        #    break
        arr_aux_delete = []
        # es necesario crear un nuevo arreglo ?
        for elem in max_clique_pond[0]:
            arr_aux_delete.append((elem, G.nodes[elem]["prioridad"]))
        # este arreglo contiene el clique maximo que se recomiendan ordenado de menor a mayor
        arr_aux_delete.sort(key=lambda tup: tup[1])

        while len(arr_aux_delete) > 6:
            # se elimina el mas peso mas chico de la lista
            arr_aux_delete.pop(0)

        if prev_solution == arr_aux_delete:  # sirve para no mostrar siempre las mismas soluciones
            continue
        else:

            print("---------------")
            print("\nSolucion Recomendada #", i+1, ": \n")
            for elem in arr_aux_delete:  # muestra las secciones a tomar
                aux_retornar.append(
                    {'codigo': elem[0][0:7], "horario": G.nodes[elem[0]]["horario"], 'prioridad': G.nodes[elem[0]]["prioridad"], 'cod_seccion': G.nodes[elem[0]]["cod_seccion"]})
                print(elem[0][0:7], " || ", "| Horario -> ", G.nodes[elem[0]]["horario"], "||",
                      G.nodes[elem[0]]["prioridad"], "codigo seccion ->", G.nodes[elem[0]]["cod_seccion"])  # se muestra los elementos del clique maximo
        # print("ava",arr_aux_delete[0][0])
        prev_solution = arr_aux_delete
        G.remove_node(arr_aux_delete[0][0])

    return aux_retornar


# if ko == False:
#	print("\nNo se encontro una solucion con todos los ramos criticos")

# nx.draw(G, with_labels=True, font_weight='bold') #se dibuja el grafo generado
# plt.show()

# return max_clique_pond #se coloca por si se quiere utilizar mas adelante, de momento se deja el print
