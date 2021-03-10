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
    PERT.nodes[id_node]["LF"] = len_dag if len_dag > 1 and (PERT.nodes[id_node]["LF"] == None or PERT.nodes[id_node]["LF"] > len_dag) else PERT.nodes[id_node]["LF"]
    H = PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"] if PERT.nodes[id_node]["H"] == None or (PERT.nodes[id_node]["LF"] - PERT.nodes[id_node]["EF"]  < PERT.nodes[id_node]["H"]) else PERT.nodes[id_node]["H"] 
    PERT.nodes[id_node]["H"] =  H if  H > 0 else  0
    PERT.nodes[id_node]["LS"] = PERT.nodes[id_node]["ES"] + PERT.nodes[id_node]["H"]
    node_pred_arr= list(PERT.predecessors(id_node)) # nodos que apuntan al nodo id_node
    
    
    for elem in node_pred_arr:
        set_values_recursive(PERT,elem,len_dag-1)
    return PERT



def getRamoCritico(excel_ramos_aprobados='MiMalla.xlsx'):
    #subir los ramos aprobados del almuno a la base usando un excel

    ## se saca de malla
    ramos_cursados =  np.array(pd.read_excel(excel_ramos_aprobados, header = None))
    codigos_ramos_cursados = ramos_cursados[:,1]

    año_malla = ramos_cursados[0,1]
    nombre_excel_malla = 'MallaCurricular{}.xlsx'.format(str(año_malla))
    malla_alumno = np.array(pd.read_excel(nombre_excel_malla))
    codigos_ramos_malla = malla_alumno[:,1]
    
    ramos_no_cursados = []

    for i in range(0, len(codigos_ramos_malla)):
        if codigos_ramos_malla[i] not in codigos_ramos_cursados:
            ramos_no_cursados.append(malla_alumno[i])

    ramos_no_cursados = np.array(ramos_no_cursados) 
    
    ## hasta aqui

    #se hace aca
    PERT = nx.DiGraph()  #Grafo dirigido

    for i in range(0,len(ramos_no_cursados)):
        id_ramo = ramos_no_cursados[i][0]
        cod_ramos  = ramos_no_cursados[i][1] 
        nombre_ramo = ramos_no_cursados[i][2]

        PERT.add_nodes_from([id_ramo], codigo = cod_ramos,nombre=nombre_ramo, ES=None, EF = None, LS = None, LF = None , H = None)  

    for elem in ramos_no_cursados:
        for i in str(elem[3]).split(","):   #aqui se deben sacar los prerrequisitos de la base
            if int(i) != 0:
                if int(i) in ramos_no_cursados[:,0]:
                    PERT.add_edge(int(i),elem[0])  
        


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
    
  
    ramos_disponibles = {}

    #se hace aca 
    #print("\nPERT Generado:\n ")
    #print(list(PERT))
    for elem in list(PERT): # aca se determinan los ramos criticos y los ramos que se pueden tomar.
        if elem == 0:
            continue
        
        if PERT.nodes[elem]["H"] == 0 and PERT.nodes[elem]["LS"] == 1: #ramos criticos
            ramos_disponibles[PERT.nodes[elem]["codigo"]]= {"codigo":PERT.nodes[elem]["codigo"],"numb_correlativo":elem, "nombre":PERT.nodes[elem]["nombre"],"holgura":PERT.nodes[elem]["H"],"critico":True,"codigo_ref":None }

        if PERT.nodes[elem]["H"] != 0 and PERT.nodes[elem]["ES"] == 1: #otros ramos que se pueden tomar
            ramos_disponibles[PERT.nodes[elem]["codigo"]]= {"codigo":PERT.nodes[elem]["codigo"],"numb_correlativo":elem, "nombre":PERT.nodes[elem]["nombre"],"holgura":PERT.nodes[elem]["H"],"critico":False,"codigo_ref":None }
            
        print(elem," ",PERT.nodes[elem])# imprime todos los nodos agregados en el grafo
      
    # hasta aca
    print("Ramos criticos: ")
    for i in list(ramos_disponibles):
        if ramos_disponibles[i]["critico"] == True:
            print("->> ",ramos_disponibles[i]["nombre"],"-", ramos_disponibles[i]["codigo"])

    print("\nRamos no criticos: ")
    for i in list(ramos_disponibles):
        if ramos_disponibles[i]["critico"] == False:
            print("->> ",ramos_disponibles[i]["nombre"],"-", ramos_disponibles[i]["codigo"])

    print("\nExtrayendo Datos...\n")
    #nx.draw_shell(PERT, with_labels=True, font_weight='bold') #se dibuja el grafo generado
    #plt.show()
    #se debe pasar el año del pibe

    #retornar un json con los ramos que puede tomar y con su holgura. -> se puede hacer una consulta
    return ramos_disponibles, nombre_excel_malla

getRamoCritico('MiMalla.xlsx')

                
#Nombre de la actividad;
        # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
        # Tiempo de inicio más temprano (ES = Earliest Start);-> el mayor de las opciones
        # Tiempo de término más temprano (EF = Earliest Finish);-> ES + D  (operacion)
        # Tiempo de inicio más tardío (LS = Latest Start); -> ES + H
        # Tiempo de término más tardío (LF = Latest Finish); -> el mas chico
        # Holgura de la Actividad (H); LF-EF
        
