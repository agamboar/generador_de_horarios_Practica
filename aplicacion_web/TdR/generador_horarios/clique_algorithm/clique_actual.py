import networkx as nx
import matplotlib.pyplot as plt
import random
import traceback
from ..models import *
from ..helpers import utils as ut, jsonLog as jl
from .fetchData import getData
import time

VERSION = 2

""" # TODO actualizar
ejemplo de estructura de diccionario 'data'
    data = {
        'prioridades_area_cfg': {
            'Ciencias Sociales' : 1~4,
            'Ciencia y Sociedad' : 1~4,
            'Humanidades'  : 1~4,
            'Historia' : 1~4
        },
        'asignaturas': {
            '<codigo asignatura 1>' : {
                'nombre' : '<nombre asignatura 1>',
                'nodo_asignatura' : '<nodo_asignatura de asignatura 1>',
                'is_cfg' : True/False,
                'secciones' : {
                    '<codigo seccion 1>' : {
                        'nodo_seccion' : '<nodo_seccion de seccion 1>',
                        'bloques' : set('<bloque(ej. JU_10)>', ...),
                        'eventos' : [
                            {
                                'bloque': '<bloque>', 
                                'tipo': '<tipo: ej. CATEDRA>', 
                                'profesor': '<profesor>'
                            },
                            {...},
                            {...},
                            ...
                        ],
                    },
                    '<codigo seccion 2>' : {...}
                } 
            },
            '<codigo asignatura 2>' : {...},
            '<codigo asignatura 3>' : {...},
            ...
        }
    }
"""
# funcion final utilizada en views.py en /generador_horarios/
# amount: representa la cantidad de horarios a encontrar
def get_clique_max_pond(userId, cfgAreaLimit=2, amount=5, solutionType='A'):
    # llama a la funcion setupGraph, la cual crea un objeto Graph de NetworkX
    G = setupGraph(userId, cfgAreaLimit)
    
    if G.number_of_nodes() == 0: return 'n'
    (recommendations, _) = getRecommendations(G, amount, solutionType)
    return recommendations

# crea un grafo a partir de un usuario y ?
def setupGraph(userId, cfgAreaLimit):
    #
    data = getData(userId, cfgAreaLimit)
    # se seleccionan 6 ramos, dentro de los cuales tienen que estar obligatoriamente los criticos
    escogidas = ['CIT2108','CIT2205','CIT2110','CII2750','CIT2009','CFG2']
    #
    asignaturas = data['asignaturas']
    #
    graph = getGraphNodes(asignaturas,escogidas)
    #
    addEdges(graph)
    return graph

# escogidas = [] no estaba en la version original
def getGraphNodes(asignaturas, escogidas=[], nodeLimit=87, cfgLimit=2):
    # crea un grafo utilizando networkX
    G = nx.Graph()
    cantidad_nodos = 0
    cantidad_cfgs = 0
    for codigoAsignatura, asignatura in asignaturas.items():
        if nodeLimit != None and cantidad_nodos >= nodeLimit: break
        if asignatura['is_cfg'] == True: 
            if cfgLimit != None and cantidad_cfgs >= cfgLimit: continue
            cantidad_cfgs += 1
        nodoAsignatura = asignatura['nodo_asignatura']   
        secciones = asignatura['secciones']
        # solo las escogidas seran nodos, el resto no
        if codigoAsignatura in escogidas:
            for codigoSeccion, seccion in secciones.items():
                nodoSeccion = seccion['nodo_seccion']
                prioridad = getPrioridad(nodoAsignatura, nodoSeccion)
                # agrega las secciones como nodos al grafo G
                G.add_node(
                    str(codigoAsignatura + "   - " + codigoSeccion), 
                    prioridad=prioridad, 
                    codigo_asignatura=codigoAsignatura,
                    cod_ramo_real=seccion['codigo_ramo_real'],
                    nombre_ramo_real=seccion["nombre_ramo_real"],
                    codigo_seccion=codigoSeccion, 
                    nro_seccion=nodoSeccion['to_seccion__num_seccion'], 
                    bloques=seccion['bloques'],  
                    eventos=seccion['eventos'],
                    horario=seccion['horario']
                )
                cantidad_nodos += 1
                if nodeLimit != None and cantidad_nodos >= nodeLimit: break
    return G

# agregar aristas al grafo G, dependiendo de si existen conexiones entre los nodos (ramos compatibles)
def addEdges(G):
    # lista de nodos del grafo
    nodeList = list(G.nodes.items())
    # se revisa de la siguiente forma:
    # se toma el primero (correspondiente a i) y se compara con todos los j, desde i+1 hasta el final
    # {1,2,3,4,5} -> 1 comparar con 2,3,4,5. Luego 2 comparar con 3,4,5. Luego 3 comparar con 4,5. Finalmente 4 comparar con 5
    # i no llega a 5 porque seria comparar con 6, que no existe.
    for i in range(0, len(nodeList)-1):
        for j in range(i+1, len(nodeList)):
            nodeA = nodeList[i]
            nodeB = nodeList[j]
            # se debe revisar si los dos nodos son compatibles en cuanto a horarios, codigo del curso o cfg
            if seccionesCompatibles(nodeA, nodeB):
                # en caso de ser compatibles, se agrega la arista que une ambos ramos
                G.add_edge(nodeA[0], nodeB[0])

# revisa si dos secciones (cada una un nodo) son compatibles, retornando un boolean
def seccionesCompatibles(nodeA, nodeB):
    # mismoramo es un boolean, para cuando dos nodos son la misma asignatura
    mismoRamo = nodeA[1]['codigo_asignatura'] == nodeB[1]['codigo_asignatura']
    # mismoCFG es un boolean, al igual que en el caso anterior
    mismoCFG = nodeA[1]['cod_ramo_real'] == nodeB[1]['cod_ramo_real']
    # si chocan horarios es verdadero
    interseccionBloques = nodeA[1]['bloques'] & nodeB[1]['bloques']
    # si son el mismo ramo o son el mismo cfg o si existe una inteseccion de horarios, retorna falso
    if mismoRamo or mismoCFG or interseccionBloques: return False
    else: return True
    

def getPrioridad(nodoAsignatura, nodoSeccion):
    cc = nodoAsignatura['cc']
    # agregar contador de ramos no criticos (dos digito)
    uu = nodoAsignatura['uu']
    # aumentar a 4 digitos 
    kk = nodoAsignatura['kk']
    # cambiar a 4 digitos la seccion
    ss = str(nodoSeccion['ss']) if len(str(nodoSeccion['ss'])) > 1 else ("0" + str(nodoSeccion['ss'])) # asegura 2 digitos.ss=1 -> ss=01

    prioridad = int(cc+uu+kk+ss)
    return prioridad

def getRecommendations(G, amount, solutionType):
    recommendations = []
    solutions = []
    #----------- codigo extra -----------
    # ITERACION BK: puede estar en una funcion separada
# def getSolution_B(G):
    # file1 = open(r"C:\Users\matya\Desktop\atr\generador_de_horarios_Practica\aplicacion_web\TdR\generador_horarios\clique_algorithm\cliques.txt","w+")
    
    inicio = time.time()
    # determinar cantidad maxima de ramos criticos
    (cliqueMax, _) = nx.max_weight_clique(G,weight='prioridad')
    ramosCriticos = 0
    seccionesTOP = list(G.subgraph(cliqueMax).nodes.items())
    for ramos in seccionesTOP:
        if(ramos[1]['prioridad']>1000000):
            ramosCriticos+=1
    
    iterCliques = nx.find_cliques(G)
    
    recomendaciones = []
    soluciones = []
    
    contador = 0
    # Cantidad de criticos minima siempre debe ser de al menos 1
    criticoMin = 1
    # file2 = open(r"C:\Users\matya\Desktop\atr\generador_de_horarios_Practica\aplicacion_web\TdR\generador_horarios\clique_algorithm\cliquesRec.txt","w+")
    for clic in iterCliques:
        seccionesNX = list(G.subgraph(clic).nodes.items())
        # seccionesNX.sort(key=lambda tup: tup[1]['prioridad']) # ojo aca: al parecer no ordena
        sumaPrioridades = 0
        criticoCliqueActual = 0
        for i in seccionesNX:
            prioridadActual= i[1]['prioridad'] # con esto se obtiene la prioridad de cada nodo
            # Si el ramo actual es critico
            if(prioridadActual/10000000 >= 1):
                criticoCliqueActual += 1
            # se adiciona a la prioridad total del clique
            sumaPrioridades += prioridadActual
        if criticoCliqueActual>criticoMin:
            criticoMin = criticoCliqueActual
        # es el clique revisado mayor que el clique minimo? (cota inferior de cantidad de ramos)
        # el clique revisado contiene mas ramos criticos que el actual clique? (cota inferior de ramos criticos)
        # sumaPrioridades >= (10000000*criticoMin) & criticoCliqueActual >= criticoMin:
        if criticoCliqueActual >= ramosCriticos:
            soluciones.append(seccionesNX)
            formattedSolucion = formatNXSolution(seccionesNX)
            recomendaciones.append(formattedSolucion)
            contador += 1
            
        # file2.write(str(sumaPrioridades)+"\n")
    # file2.close()
    fin = time.time()
    delta = fin-inicio
    # escribir archivo tiempo de ejecucion
    # file1.write("\n"+str(delta)+"\n"+str(contador)+"\n")
    
    # for lista in soluciones:
    #     for seccionNX in lista:
    #         for i in seccionNX:
    #             file1.write(str(i))
    #         file1.write("\n")
    #     file1.write("!\n \n")
    # file1.close()
    
    # return recomendaciones, soluciones  # descomentar para usar como funcion separada
    
    # print("\nGrafos con 4 o menos nodos: "+str(contador4))
    # print("\nTiempo ejecucion: "+str(delta))
    
    # RECURSION BK
    # file2 = open(r"C:\Users\matya\Desktop\atr\generador_de_horarios_Practica\aplicacion_web\TdR\generador_horarios\clique_algorithm\cliquesRec.txt","w+")
    # inicioRec = time.time()
    # iterCliquesRec = nx.find_cliques_recursive(G)
    
    # for clic in iterCliquesRec:
    #     seccionesNX = list(G.subgraph(clic).nodes.items())
    #     seccionesNX.sort(key=lambda tup: tup[1]['prioridad']) # ordena segun la prioridad
    #     sumaPrioridades = 0
    #     criticoCliqueActual = 0
    #     for i in seccionesNX:
    #         prioridadActual= i[1]['prioridad'] # con esto se obtiene la prioridad de cada nodo
    #         # Si el ramo actual es critico
    #         if(prioridadActual/10000000 > 1):
    #             criticoCliqueActual += 1
    #         # se adiciona a la prioridad total del clique
    #         sumaPrioridades += prioridadActual
    #     # es el clique revisado mayor que el clique minimo? (cota inferior de cantidad de ramos)
    #     # el clique revisado contiene mas ramos criticos que el actual clique? (cota inferior de ramos criticos)
        
    #     if criticoCliqueActual == criticoMin: # and prioridadMin<=sumaPrioridades
    #         soluciones.append(seccionesNX)
    #         formattedSolucion = formatNXSolution(seccionesNX)
    #         recomendaciones.append(formattedSolucion)
    #         contador += 1
    #         file2.write("Horario: "+str(contador)+" - Prioridad: "+str(sumaPrioridades)+" - Ramos Criticos: "+str(criticoCliqueActual)+" - Total ramos: "+str(len(clic))+"\n")
    
    # finRec = time.time()
    # deltaRec = finRec - inicioRec
    # file2.write("\n"+str(deltaRec))
    # file2.close()
    
    #----------- fin codigo extra -----------
    # ciclo for repite la cantidad de veces que se indica en amount (=5)
    for _ in range(amount):
        # la tupla solution (subgrafo de G) - solucion formateada se obtiene de getSolution -> getSolution_A
        (solution, formattedSolution) = getSolution(G, solutionType)
        recommendations.append(formattedSolution)
        solutions.append(solution)

        # borrar un nodo cada vez que itera el ciclo
        if len(solution) > 0:
            leastPriorityNode = solution[0][0]
            G.remove_node(leastPriorityNode) 
    
    return recommendations, solutions 

# retorna la solucion unicamente cuando solutionType es igual a A, de lo contrario arroja una excepcion
def getSolution(G, solutionType):
    # las funciones getSolution_[A-Z](G) no deben modificar el grafo 'G'
    # -------------------------- ERROR --------------------------
    # no se cumple el comentario que sigue a continuacion, puesto que la funcion getSolution_A
    # no retorna una tupla de tres valores, solo retorna los dos primeros (falta totalWeight)
    # -----------------------------------------------------------
    # su return debe ser una tupla: (solution, formattedSolution, totalWeight)
    if solutionType == 'A': return getSolution_A(G)
    else:
        raise Exception("tipo de solucion invalido (getSolution(G, solutionType))")

# funcion que calcula el peso maximo de un grafo, retornando una tupla (subgrafo,subgrafo formateado)
def getSolution_A(G):
# --- solucion original, resultado equivalente a primera version de aplicacion (clique_v1) --- # 
    # la funcion max_weight_clique retorna dos valores, clique y weight, por lo que se utiliza unicamente clique
    # el valor clique corresponde a una lista de nodos con peso maximo
    (clique, _) = nx.max_weight_clique(G, weight="prioridad")
    # subgrafo de 'G' porque 'clique' contiene solo nodos y no sus atributos
    seccionesNX = list(G.subgraph(clique).nodes.items())
    # se acota a 6 secciones eliminando las de menor prioridad en el subgrafo
    seccionesNX.sort(key=lambda tup: tup[1]['prioridad'])
    # while: elimina nodos del subgrafo solucion hasta que queden seis cursos como maximo
    # mientras la cantidad de nodos del subgrafo sea mayor que 6, se elimina la primera
    while len(seccionesNX) > 6:
        # se elimina el primer nodo del subgrafo
        seccionesNX.pop(0)
    # se asigna el subgrafo a la variable solution
    solution = seccionesNX
    # se genera otra solucion del subgrafo pero formateada a NX (arreglo de secciones)
    formattedSolution = formatNXSolution(solution)
    # retorna una tupla con la solucion (que es un subgrafo de tamano 6) y la solucion con formato NX
    return solution, formattedSolution

#
def formatNXSolution(solution):
    # arreglo que contendra las secciones de la solucion
    fmtSolution = []
    # para cada seccion (nodo) en el grafo solucion (subgrafo de G)
    for seccionNX in solution:
        
        seccionAttributes = seccionNX[1]

        horarioString = ""
        for bloque in seccionAttributes['horario']: 
            horarioString += " "+bloque[0:8]

        seccion = {
            'nombre': seccionAttributes['nombre_ramo_real'],
            'horario': horarioString,
            'nro_seccion': seccionAttributes['nro_seccion'],
            'cod_asignatura_real': seccionAttributes['cod_ramo_real'],
            'eventos' : seccionAttributes['eventos'],
            'cod_seccion': seccionAttributes['codigo_seccion']
        }
        fmtSolution.append(seccion)
    return fmtSolution