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
     
    PERT.nodes[id_node]["ES"] = max_count_jump if (PERT.nodes[id_node]["ES"] == None or (max_count_jump > PERT.nodes[id_node]["ES"])) else PERT.nodes[id_node]["ES"]
    PERT.nodes[id_node]["EF"] = PERT.nodes[id_node]["ES"] + 1 #este uno es D
    PERT.nodes[id_node]["LF"] = len_dag if len_dag > 1 and (PERT.nodes[id_node]["LF"] == None or PERT.nodes[id_node]["LF"] > len_dag) else PERT.nodes[id_node]["EF"]
    H = PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"] if PERT.nodes[id_node]["H"] == None or (PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"]  < PERT.nodes[id_node]["H"]) else PERT.nodes[id_node]["H"] 
    PERT.nodes[id_node]["H"] =  H if  H > 0 else  0
    PERT.nodes[id_node]["LS"] = PERT.nodes[id_node]["ES"] + PERT.nodes[id_node]["H"]
    
        #Nombre de la actividad;
        # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
        # Tiempo de inicio más temprano (ES = Earliest Start);-> el mayor de las opciones
        # Tiempo de término más temprano (EF = Earliest Finish);-> ES + D  (operacion)
        # Tiempo de inicio más tardío (LS = Latest Start); -> ES + H
        # Tiempo de término más tardío (LF = Latest Finish); -> el mas chico
        # Holgura de la Actividad (H); LF-EF
        

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

        PERT.add_nodes_from([idAux], nombre=nombreAux, codigo = codAux, ES=None, EF = None, LS = None, LF = None , H = None)
    
    return PERT, idRamos, ramosAbre


def getRamoCritico(miExcel):

    PERT = nx.DiGraph()  #Grafo dirigido
    
    misRamos = pd.read_excel(miExcel, header = None)
    #miMalla = pd.read_excel(malla) 

    #conversion de la lectura de los excel a arreglos de 2 dimensiones, utilizando Numpy, y su funcion array
    misRamosArray = np.array(misRamos)
    #miMallaArray = np.array(miMalla)

    ramosNoAprobados = []

    #arreglos que contienen solo los numeros correlativos de ambos arreglos (malla y aprobados), para iterar sobre estos
    idsMisRamos = misRamosArray[:,0]
    
    añoMalla = misRamosArray[0,1]
    #print(añoMalla)

    if añoMalla == '2010':
        nombreMalla = 'MallaCurricular2010.xlsx'
        miMallaArray = np.array(pd.read_excel(nombreMalla,header = None))
    elif añoMalla == '2018':
        nombreMalla = 'MallaCurricular2018.xlsx'
        miMallaArray = np.array(pd.read_excel(nombreMalla,header = None))
    elif añoMalla == '2020':
        nombreMalla = 'MallaCurricular2020.xlsx'
        miMallaArray = np.array(pd.read_excel(nombreMalla,header = None))
   
    idsMiMalla = miMallaArray[:,0]

    #mediante la iteración, se añaden los ramos no aprobados a un arreglo
    for aux in range(1, len(idsMiMalla)):
        if idsMiMalla[aux] not in idsMisRamos:
            ramosNoAprobados.append(miMallaArray[aux])

    asignaturasNoCursadas = np.array(ramosNoAprobados) #solo importa este arreglo


#comienzo del proceso de añadir cada elemento de la lista de ramos no cursados como nodos al grafo que corresponderá al PERT

   

        #Nombre de la actividad;
        # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
        # Tiempo de inicio más temprano (ES = Earliest Start);-> el mayor de las opciones
        # Tiempo de término más temprano (EF = Earliest Finish);-> ES + D  (operacion)
        # Tiempo de inicio más tardío (LS = Latest Start); -> ES + H
        # Tiempo de término más tardío (LF = Latest Finish); -> el mas chico
        # Holgura de la Actividad (H); LF-EF
         
    PERT, idRamos, ramosAbre = addNodeToPERT(PERT, asignaturasNoCursadas) #se agregan los elementos del asignaturasNoCursadas arreglo a al grafo pert
 
    
#A continuacion, se crean las aristas que conectan cada nodo, con el respectivo ramo que abren. Estas aristas estan direccionadas.
    #for elem in list(PERT.nodes.items()):
        #print(elem)
    #print(asignaturasNoCursadas) # arreglo numpy
 
        
    
    for elem in asignaturasNoCursadas:
        #print(elem)
        for i in str(elem[3]).split(","):
            if int(i) != 0:
                if int(i) in asignaturasNoCursadas[:,0]:
                    PERT.add_edge(int(i),elem[0]) #se unen los nodos segun su prerquisito #-> si funciona pero le falta no agregar nodos que no estan
        
    
    
    
    
    
    
    #solo necesito codigo y los pre requisitos para unirlos
    """ for aux2 in range(len(list(PERT))): #cambiar el nombre de estas variables
    
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
            PERT.add_edge(idAux2, stringAux2) # se deben unir los ramos que abren-> es mas facil de enteder que se junten segun los prerequisitos...
 """
    #nx.draw_spring(PERT, with_labels=True, font_weight='bold')
    #plt.show()
    #esto se puede colocar en la funcion de arriba ! mejorar !
    #print(len(idsMiMalla))
    for elem in list(PERT.predecessors(99)): #itera sobre los nodos que apuntan al ultimo nodo que es el nodo auxiliar final y se asignan los pesos
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
    
    ramos_disp_holgura={}
    dict_ramos_codigos = {}
    ramos_criticos = []
    ramos_porTomar_codigo = []
    ramos_no_criticos = []
    ramos_criticos_nombre = []
    ramos_id={}
    
    #print("\nPERT Generado:\n ")
    #print(list(PERT))
    for elem in list(PERT): # aca se determinan los ramos criticos y los ramos que se pueden tomar.
        if elem == 0:
            continue
        
        if PERT.nodes[elem]["H"] == 0 and PERT.nodes[elem]["LS"] == 1: #ramos criticos
            ramos_disp_holgura[PERT.nodes[elem]["codigo"]]=PERT.nodes[elem]["H"]
            ramos_criticos.append(PERT.nodes[elem]["codigo"])
            ramos_criticos_nombre.append(PERT.nodes[elem]["nombre"])  
            dict_ramos_codigos[PERT.nodes[elem]["nombre"]]=PERT.nodes[elem]["codigo"]
            ramos_porTomar_codigo.append(PERT.nodes[elem]["codigo"])
            ramos_id[PERT.nodes[elem]["nombre"]]=elem

        if PERT.nodes[elem]["H"] != 0 and PERT.nodes[elem]["ES"] == 1: #otros ramos que se pueden tomar
            ramos_disp_holgura[PERT.nodes[elem]["codigo"]]=PERT.nodes[elem]["H"]
            ramos_no_criticos.append(PERT.nodes[elem]["nombre"])  
            dict_ramos_codigos[PERT.nodes[elem]["nombre"]]=PERT.nodes[elem]["codigo"]
            ramos_porTomar_codigo.append(PERT.nodes[elem]["codigo"])
            ramos_id[PERT.nodes[elem]["nombre"]]=elem
            
        #print(elem," ",PERT.nodes[elem])# imprime todos los nodos agregados en el grafo
      
    
        
    print("\nRamos criticos -> ", ramos_criticos_nombre, "\n")
    print("Ramos no criticos ->", ramos_no_criticos, "\n") 

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
    
    print("Ramos disponibles ->", ramos_disponibles, "\n") 
    
    #print(ramos_porTomar_codigo, ramos_criticos,ramos_disp_holgura, dict_ramos_codigos, ramos_disponibles)
    print("Extrayendo Datos...\n")
    
    return ramos_porTomar_codigo, ramos_criticos, ramos_disp_holgura, dict_ramos_codigos, ramos_disponibles, asignaturasNoCursadas, ramos_id, nombreMalla

## cambiar los como se muestran los cfg y electivos
#-> electivos como si fueran ramos -> creo funciona asi y mas aun si se pone un filtro por semestre aprobado
# especificar los ramos de teleco e inf
# no aguanta 15 nodos -> de ahi en adelante tarda bastante en calcular  | con 9 tambien tarda

#getRamoCritico('MiMalla.xlsx')

                

        
