import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
import random

def set_values_recursive(PERT,id_node,len_dag):

        
    arr_anc=list(nx.ancestors(PERT,id_node))  # sirve para saber en cuantos semestre se debera tomar, idealmente, un ramo
    max_count_jump=1
    for elem1 in arr_anc: # se calcula el camino mas grande desde todos los antecesores del nodo id_node
        if max_count_jump < len(list(nx.all_simple_paths(PERT,elem1,id_node))[0]):
            max_count_jump = len(list(nx.all_simple_paths(PERT,elem1,id_node))[0])

    PERT.nodes[id_node]["ES"] = max_count_jump
    PERT.nodes[id_node]["EF"] = max_count_jump + 1 #este uno es D
    PERT.nodes[id_node]["LF"] = len_dag if len_dag > 1 else  max_count_jump + 1
    H = PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"]
    PERT.nodes[id_node]["H"] =  H if  H > 0 else  0
    PERT.nodes[id_node]["LS"] = PERT.nodes[id_node]["ES"] + PERT.nodes[id_node]["H"]
    
        

    node_pred_arr= list(PERT.predecessors(id_node)) # nodos que apuntan al nodo id_node
    for elem in node_pred_arr:
        len_dag -= 1
        set_values_recursive(PERT,elem,len_dag)
    return PERT

def addNodeToPERT(PERT, asignaturasNoCursadas):

    nroAsigNoCursadas = len(asignaturasNoCursadas)

    idRamos = []
    nombres = []
    codRamos = []
    ramosAbre = []

    for i in range(nroAsigNoCursadas):

        idRamos.append(asignaturasNoCursadas[i][0])
        codRamos.append(asignaturasNoCursadas[i][1])
        nombres.append(asignaturasNoCursadas[i][2])
        ramosAbre.append(asignaturasNoCursadas[i][3])

        idAux = idRamos[i]
        codAux = codRamos[i]
        nombreAux = nombres[i]
        abreAux = ramosAbre[i]

        #if isinstance(abreAux, str): #creo que esto no es necesario
        #    abreAux = [int(s) for s in abreAux.split(',')]   #convierte string de numeros a arreglo o lista
        PERT.add_nodes_from([idAux], nombre=nombreAux, codigo = codAux, ES=None, EF = None, LS = None, LF = None , H = None)
    
    return PERT, idRamos, ramosAbre


def getRamoCritico(miExcel, malla):

    PERT = nx.DiGraph()  #Grafo dirigido
    
    misRamos = pd.read_excel(miExcel)
    miMalla = pd.read_excel(malla) 

    #conversion de la lectura de los excel a arreglos de 2 dimensiones, utilizando Numpy, y su funcion array
    misRamosArray = np.array(misRamos)
    miMallaArray = np.array(miMalla)

    ramosNoAprobados = []

    #arreglos que contienen solo los numeros correlativos de ambos arreglos (malla y aprobados), para iterar sobre estos
    idsMisRamos = misRamosArray[:,0]
    idsMiMalla = miMallaArray[:,0]


    #mediante la iteración, se añaden los ramos no aprobados a un arreglo
    for aux in range(1, len(idsMiMalla)):
        if idsMiMalla[aux] not in idsMisRamos:
            ramosNoAprobados.append(miMallaArray[aux])

    asignaturasNoCursadas = np.array(ramosNoAprobados)

    #print(asignaturasNoCursadas)

#comienzo del proceso de añadir cada elemento de la lista de ramos no cursados como nodos al grafo que corresponderá al PERT

   

        #Nombre de la actividad;
        # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
        # Tiempo de inicio más temprano (ES = Earliest Start);
        # Tiempo de término más temprano (EF = Earliest Finish);
        # Tiempo de inicio más tardío (LS = Latest Start);
        # Tiempo de término más tardío (LF = Latest Finish);
        # Holgura de la Actividad (H);
         
    PERT, idRamos, ramosAbre = addNodeToPERT(PERT, asignaturasNoCursadas)
    rows2 = len(idRamos) #cantidad de ramos

#A continuacion, se crean las aristas que conectan cada nodo, con el respectivo ramo que abren. Estas aristas estan direccionadas.

    for aux2 in range(rows2): #cambiar el nombre de estas variables
    
        idAux2 = idRamos[aux2]
        stringAux2 = ramosAbre[aux2]
        
        if isinstance(stringAux2, str):
            stringAux2 = [int(s) for s in stringAux2.split(',')]
            rows3 = len(stringAux2)
            for elem in range(rows3):
                PERT.add_edge(idAux2, stringAux2[elem]) # une un nodo con todos los ramos que abre
        elif stringAux2 == 0:
            pass
        else:
            PERT.add_edge(idAux2, stringAux2)


    #esto se puede colocar en la funcion de arriba ! mejorar !

    if malla == 'MallaCurricular2010.xlsx':
        varAux = 53
    elif malla == 'MallaCurricular2018.xlsx' or 'MallaCurricular2020.xlsx':
        varAux = 54

    for elem in list(PERT.predecessors(varAux)): #itera sobre los nodos que apuntan a 53
        long_path=len(nx.dag_longest_path(PERT))
        arr_anc=list(nx.ancestors(PERT,elem))
        max_count_jump=1
        for elem1 in arr_anc:
            if max_count_jump < len(list(nx.all_simple_paths(PERT,elem1,elem))[0]):
                max_count_jump = len(list(nx.all_simple_paths(PERT,elem1,elem))[0])
        
        PERT.nodes[elem]["ES"] = max_count_jump
        PERT.nodes[elem]["EF"] = max_count_jump + 1 #este uno es D
        PERT.nodes[elem]["LF"] = long_path
        PERT.nodes[elem]["H"] = PERT.nodes[elem]["LF"] - PERT.nodes[elem]["EF"]
        PERT.nodes[elem]["LS"] = PERT.nodes[elem]["ES"] + PERT.nodes[elem]["H"]
        if len(list(PERT.predecessors(elem))) > 0 : #itera sobre los padres de los nodos que apuntan a 53
            for k in list(PERT.predecessors(elem)):
                PERT = set_values_recursive(PERT,k,long_path-1)
                
    #error al calcular la holgura, y al entregar horario!!!!!!!!! solucionar. No incluye el ramo critico en el horario. Con la malla 2010 no pasa, se probo con la 2018    
    ramos_disp_holgura={}
    dict_ramos_codigos = {}
    ramos_criticos = []
    ramos_porTomar_codigo = []
    ramos_no_criticos = []
    ramos_criticos_nombre = []

    #print("\nPERT Generado:\n ")
    #print(list(PERT))
    for elem in list(PERT): # imprime todos los nodos agregados en el grafo
        if elem == 0:
            continue
        
        if PERT.nodes[elem]["H"] == 0 and PERT.nodes[elem]["LS"] == 1:
            ramos_disp_holgura[PERT.nodes[elem]["codigo"]]=PERT.nodes[elem]["H"]
            ramos_criticos.append(PERT.nodes[elem]["codigo"])
            ramos_criticos_nombre.append(PERT.nodes[elem]["nombre"])  #hacer append de codigo y no de nombre
            dict_ramos_codigos[PERT.nodes[elem]["nombre"]]=PERT.nodes[elem]["codigo"]
            ramos_porTomar_codigo.append(PERT.nodes[elem]["codigo"])
        
        print(elem," ",PERT.nodes[elem])
      
    for elem in list(PERT):
        if elem == 0:
            continue
        if PERT.nodes[elem]["H"] != 0 and PERT.nodes[elem]["ES"] == 1:
            ramos_disp_holgura[PERT.nodes[elem]["codigo"]]=PERT.nodes[elem]["H"]
            ramos_no_criticos.append(PERT.nodes[elem]["nombre"])  #hacer append de codigo y no de nombre
            dict_ramos_codigos[PERT.nodes[elem]["nombre"]]=PERT.nodes[elem]["codigo"]
            ramos_porTomar_codigo.append(PERT.nodes[elem]["codigo"])
    print("\nRamos criticos -> ", ramos_criticos_nombre, "\n")
    print("Ramos no criticos ->", ramos_no_criticos, "\n") 

    #solucionar lo de los electivos
    ramos_por_tomar=[]
    for i in ramos_criticos:
        ramos_por_tomar.append(i)
    
    ramos_disponibles = ramos_criticos_nombre +  ramos_no_criticos #guardar de alguna forma la H para poder colocarle una prioridad
    """ for i in range(len(ramos_no_criticos)):
        if len(ramos_por_tomar) >= 6:
            break
        else:
            ramos_por_tomar.append(ramos_no_criticos[i])
    """
    #print("Ramos por tomar ->", ramos_por_tomar, "\n")        
    #nx.draw_spring(PERT, with_labels=True, font_weight='bold')
    #plt.show()
    print("Ramos disponibles ->", ramos_disponibles, "\n") 
    
    #print(ramos_porTomar_codigo, ramos_criticos,ramos_disp_holgura, dict_ramos_codigos, ramos_disponibles)
    print("Extrayendo Datos...\n")
    
    return ramos_porTomar_codigo, ramos_criticos,ramos_disp_holgura, dict_ramos_codigos, ramos_disponibles,asignaturasNoCursadas

## cambiar los como se muestran los cfg y electivos
#-> electivos como si fueran ramos mas no mas yera. -> creo funciona asi y mas aun si se pone un filtro por semestre aprobado
# especificar los ramos de teleco e inf
# no aguanta 15 nodos -> de ahi pa lante se demora mas | con 9 webea

#getRamoCritico('MiMalla.xlsx')

                

        
