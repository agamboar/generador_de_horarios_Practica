import networkx as nx
import matplotlib.pyplot as plt
import random
import traceback
from ..models import *
from ..helpers import utils as ut, jsonLog as jl
from .fetchData import getData

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

def get_clique_max_pond(userId, cfgAreaLimit=2, amount=5, solutionType='A'):

    G = setupGraph(userId, cfgAreaLimit)
    if G.number_of_nodes() == 0: return 'n'
    (recommendations, _) = getRecommendations(G, amount, solutionType)
    return recommendations

def setupGraph(userId, cfgAreaLimit):
    data = getData(userId, cfgAreaLimit)
    asignaturas = data['asignaturas']

    graph = getGraphNodes(asignaturas)
    addEdges(graph)
    return graph    

def getGraphNodes(asignaturas, nodeLimit=87, cfgLimit=2):
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
        for codigoSeccion, seccion in secciones.items():
            nodoSeccion = seccion['nodo_seccion']
            prioridad = getPrioridad(nodoAsignatura, nodoSeccion)

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

def addEdges(G):
    nodeList = list(G.nodes.items())

    for i in range(0, len(nodeList)-1):
        for j in range(i+1, len(nodeList)):
            nodeA = nodeList[i]
            nodeB = nodeList[j]

            if seccionesCompatibles(nodeA, nodeB):
                G.add_edge(nodeA[0], nodeB[0])

def seccionesCompatibles(nodeA, nodeB):
    mismoRamo = nodeA[1]['codigo_asignatura'] == nodeB[1]['codigo_asignatura']
    mismoCFG = nodeA[1]['cod_ramo_real'] == nodeB[1]['cod_ramo_real']
    interseccionBloques = nodeA[1]['bloques'] & nodeB[1]['bloques']

    if mismoRamo or mismoCFG or interseccionBloques: return False
    else: return True
    

def getPrioridad(nodoAsignatura, nodoSeccion):
    cc = nodoAsignatura['cc']
    uu = nodoAsignatura['uu']
    kk = nodoAsignatura['kk']
    ss = str(nodoSeccion['ss']) if len(str(nodoSeccion['ss'])) > 1 else ("0" + str(nodoSeccion['ss'])) # asegura 2 digitos.ss=1 -> ss=01

    prioridad = int(cc+uu+kk+ss)
    return prioridad

def getRecommendations(G, amount, solutionType):
    recommendations = []
    solutions = []
    for _ in range(amount):
        (solution, formattedSolution) = getSolution(G, solutionType)
        recommendations.append(formattedSolution)
        solutions.append(solution)

        # se elimina del grafo el nodo (perteneciente a la solucion) de menor prioridad para que la proxima solución de un resultado diferente
        if len(solution) > 0:
            leastPriorityNode = solution[0][0]
            G.remove_node(leastPriorityNode) 
    
    return recommendations, solutions 

def getSolution(G, solutionType):
    # las funciones getSolution_[A-Z](G) no deben modificar el grafo 'G'
    # su return debe ser una tupla: (solution, formattedSolution, totalWeight)
    if solutionType == 'A': return getSolution_A(G)
    else:
        raise Exception("tipo de solucion invalido (getSolution(G, solutionType))")

def getSolution_A(G):
# --- solucion original, resultado equivalente a primera version de aplicacion (clique_v1) --- # 
    (clique, _) = nx.max_weight_clique(G, weight="prioridad")
    seccionesNX = list(G.subgraph(clique).nodes.items()) # subgrafo de 'G' proque 'clique' contiene solo nodos y no sus atributos
    
    # se acota a 6 secciones elimiando las de menor prioridad
    seccionesNX.sort(key=lambda tup: tup[1]['prioridad'])
    while len(seccionesNX) > 6:
        seccionesNX.pop(0)
    
    solution = seccionesNX
    formattedSolution = formatNXSolution(solution)

    return solution, formattedSolution

def formatNXSolution(solution):
    fmtSolution = []
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