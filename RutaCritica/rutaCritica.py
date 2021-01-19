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

def getRamoCritico(miExcel):

    PERT = nx.DiGraph()  #Grafo dirigido
    
    #Lectura del excel que contiene los ramos aprobados por el alumno   
    misRamos = pd.read_excel(miExcel)
    
    #loop para escoger que malla corresponde a la situación del alumno
    while(True):


        M = input('Por favor, indique a que malla curricular corresponde su situacion (2010, 2018, o 2020): \n')
        if M == '2020':
            miMalla = pd.read_excel('MallaCurricular2020.xlsx')
            break
        elif M == '2018':
            miMalla = pd.read_excel('MallaCurricular2018.xlsx')
            break
        elif M == '2010':
            miMalla = pd.read_excel('MallaCurricular2010.xlsx')
            break
        else:
            print('Por favor, ingrese una respuesta válida. (2010, 2018, 2020)')
            pass
    
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

    #for aux in range(1, len(excelArray)):

    #    if int(excelArray[aux][4]) > semestreAprobado:
    #        ramosNoAprobados.append(excelArray[aux])

    asignaturasNoCursadas = np.array(ramosNoAprobados)

    print(asignaturasNoCursadas)

#comienzo del proceso de añadir cada elemento de la lista de ramos no cursados como nodos al grafo que corresponderá al PERT

    while(True):
        answer = input('¿Corresponden estos ramos a los que aun usted no ha cursado? Responda con yes/no \n')
        if answer == 'no':
            ramos = input('Por favor, verifique que los datos del Excel de sus ramos aprobados este correcto. \n')
            
            return
        elif answer == 'yes':
            break
        else:
            print('Por favor, ingrese una respuesta válida.')

    #print(asignaturasNoCursadas)


    rows = len(asignaturasNoCursadas)
    idRamos = []
    ramosAbre = []
    semestreCurso = []
    nombreCurso = []
    ramosPre = []

    for aux in range(rows):
        
        idRamos.append(asignaturasNoCursadas[aux][0])
        ramosAbre.append(asignaturasNoCursadas[aux][3])
        semestreCurso.append(asignaturasNoCursadas[aux][4])
        nombreCurso.append(asignaturasNoCursadas[aux][2])
        ramosPre.append(asignaturasNoCursadas[aux][5])

        idAux = idRamos[aux]
        stringAux = ramosAbre[aux]
        semestreAux = semestreCurso[aux]
        nombreAux = nombreCurso[aux]
        preReq = ramosPre[aux]

        if isinstance(stringAux, str): #creo que esto no es necesario
            stringAux = [int(s) for s in stringAux.split(',')]   #convierte string de numeros a arreglo o lista

        if isinstance(preReq, str):
            preReq = [int(s) for s in preReq.split(',')]   #convierte string de numeros a arreglo o lista


        #Nombre de la actividad;
        # Duración esperada de la actividad (D); -> siempre sera uno al ser ramos semestrales
        # Tiempo de inicio más temprano (ES = Earliest Start);
        # Tiempo de término más temprano (EF = Earliest Finish);
        # Tiempo de inicio más tardío (LS = Latest Start);
        # Tiempo de término más tardío (LF = Latest Finish);
        # Holgura de la Actividad (H);
         
        PERT.add_nodes_from([idAux], nombre=nombreAux, ES=None, EF = None, LS = None, LF = None , H = None)
    

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

    if M == '2010':
        varAux = 53
    elif M == '2018' or '2020':
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
                
        
    ramos_disp_holgura={}
    ramos_criticos = []
    ramos_no_criticos = []
    print("\nPERT Generado:\n ")
    for elem in list(PERT): # imprime todos los nodos agregados en el grafo 
        if PERT.nodes[elem]["H"] == 0 and PERT.nodes[elem]["LS"] == 1:
            ramos_disp_holgura[PERT.nodes[elem]["nombre"]]=PERT.nodes[elem]["H"]
            ramos_criticos.append(PERT.nodes[elem]["nombre"])
        print(elem," ",PERT.nodes[elem])
    

   

    for elem in list(PERT):
        if PERT.nodes[elem]["H"] != 0 and PERT.nodes[elem]["ES"] == 1:
            ramos_disp_holgura[PERT.nodes[elem]["nombre"]]=PERT.nodes[elem]["H"]
            ramos_no_criticos.append(PERT.nodes[elem]["nombre"])
    
    print("\nRamos criticos -> ", ramos_criticos, "\n")
    print("Ramos no criticos ->", ramos_no_criticos, "\n") 

    #solucionar lo de los electivos
    ramos_por_tomar=[]
    for i in ramos_criticos:
        ramos_por_tomar.append(i)
    
    ramos_disponibles = ramos_criticos +  ramos_no_criticos #guardar de alguna forma la H para poder colocarle una prioridad
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
    print("Extrayendo Datos...\n")
    
    return ramos_disponibles,ramos_criticos,ramos_disp_holgura

#getRamoCritico('MiMalla.xlsx')

                

        
