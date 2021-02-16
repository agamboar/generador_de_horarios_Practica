import networkx as nx
import matplotlib.pyplot as plt
from extract_data import extract_data
from rutaCritica import getRamoCritico
import random

#la prioridad se obtiene con un form desde front  

def get_clique_max_pond(lista_secciones,ramos_disponibles):
	#print(ramos_criticos)
	#print(ramos_disponibles)
	#print(lista_secciones)
	G = nx.Graph()
	priority_sec= {}
	priority_ramo= {}
	print("Ramos disponibles: \n")
	counter = 0
	for i in (ramos_disponibles):
			
			print(counter,".-", ramos_disponibles[i]["nombre"]," || ", i)
			counter += 1
	
	prio_ram=input("Desea asignarle prioridad a los ramos ? (si/no) \n")
	if prio_ram == "si":
		while (True): #Se puede mejorar el codigo para delimitar bien las prioridades # en teoria se mostrara una lista y con respecto al orden de los elementos se definira la prioridad
			nomb_ramo = str(input("Ingrese el NOMBRE de un ramo\n"))
			prioridad = int(input("Asigne una prioridad al ramo (1-100)\n"))
			priority_ramo[nomb_ramo]=prioridad-1 #cambiar por codigo tambien en 83
			cont = input("Desea colocarle una prioridad a otro ramo ? (si/no)\n")
			if cont !="si":
				break
	#print(priority_ramo)

	counter = 0
	prio_sec=input("Desea asignarle prioridad a las secciones de un ramo? (si/no)\n")
	if prio_sec == "si":
		while True:
			for i in (ramos_disponibles):
				print(counter,".- ", i," || ", ramos_disponibles[i]["nombre"] )
				counter += 1

			auxx=str(input("Ingrese el CODIGO de un ramo\n"))
			print("Secciones disponibles del ramo ", ramos_disponibles[auxx]["nombre"],": \n")
			l=False
			for elem in lista_secciones:
				if ramos_disponibles[auxx]["codigo"] == elem["codigo_box"]: #ver si hay q cambiar esta parte  -> si usar codigo
					l=True
					print(elem)
			if l== False:
				print("No se encontraron secciones disponibles para el ramo ", ramos_disponibles[auxx]["nombre"],"\n")
			else:
				while (True):
					codigo_sec = input("Ingrese el CODIGO de una seccion (codigos que aparecen en la lista)\n")
					prioridad = int(input("Asigne una prioridad de una seccion(1-100)\n")) # es mas facil hacer los inputs en la pagina web
					priority_sec[codigo_sec]=prioridad-1
					cont = input("Desea colocarle una prioridad a otra seccion ? (si/no)\n")
					if cont !="si":
						break
				cont = input("Desea colocarle una prioridad a seccion de otro ramo? (si/no)\n")
				if cont !="si":
					break 
				counter = 0

	#print(priority_sec)
	for elem in lista_secciones:
		
		#aca ver si el codigo del ramo es un electivo cit33 o cit34 [:,5], si se cumple darle la holgura de electivo profesional del pert
		#| -> lo mismo pa cfg
		aux_UU = str(10-ramos_disponibles[elem["codigo_box"]]["holgura"]) 
		UU = aux_UU if len(aux_UU) > 1 else str("0" + aux_UU)
		""" if elem["codigo"][0:5]=='CIT33':
			UU=str(10-ramos_disp_holgura["CIT3313"]) if len(str(10-ramos_disp_holgura["CIT3313"])) > 1 else "0"+str(10-ramos_disp_holgura["CIT3313"]) #UU
		elif elem["codigo"][0:5]=='CIT34':
			UU=str(10-ramos_disp_holgura["CIT3413"]) if len(str(10-ramos_disp_holgura["CIT3413"])) > 1 else "0"+str(10-ramos_disp_holgura["CIT3413"]) #UU
		elif elem["codigo"][0:3]=='CFG':
			UU=str(10-ramos_disp_holgura["CFG-4"]) if len(str(10-ramos_disp_holgura["CFG-4"])) > 1 else "0"+str(10-ramos_disp_holgura["CFG-4"]) #UU		
		else:
			UU=str(10-ramos_disp_holgura[elem["codigo"][0:7]]) if len(str(10-ramos_disp_holgura[elem["codigo"][0:7]])) > 1 else "0"+str(10-ramos_disp_holgura[elem["codigo"][0:7]]) #UU """			
	



		aux_KK = str(60-ramos_disponibles[elem["codigo_box"]]["numb_correlativo"]) #int(elem["N_correlativo"]) | esto en teoria se puede dejar asi ya si no se modifica es porq no importa
		KK = aux_KK if  len(aux_KK) > 1 else str("0"+aux_KK) #KK -
		
		try:
			KK = str(priority_ramo[elem["nombre"]]+53) #KK ->( se le suma 53 para que tenga mas importancia que la prioridad por default)
		except:
			pass
				
		
		SS = str(elem["seccion"]) if len(str(elem["seccion"])) >1 else ("0" + str(elem["seccion"]))  #SS
		#print(elem)
		try:
			SS = str(priority_sec[elem["codigo"]]+20)#SS -> se le suma el 20 para que supere cualquier valor d
		except:
			pass


		if ramos_disponibles[elem["codigo_box"]]["critico"] == True:
			CC = "10"
		else:
			CC = "00"  
		""" if elem["codigo"][0:7] in ramos_criticos:
			CC="10" #CC
		else:
			CC="00" ## la equivalencia no considera el cambio de nombre de los criticos -- NF 24/01 | revisar esto 29-1
		if elem["codigo"][0:3]=='CFG':
			if CC == "10":
				prioridad = 10000000
			else:
				prioridad = "2"+str(KK)+"00" # de esta forma se muestran los cfg al final de la carrera
		else: """
		prioridad = CC+UU+KK+SS
		#print(prioridad)
		G.add_nodes_from([str(elem["codigo_box"]+"  - "+elem["codigo"])],codigo=elem["codigo"], nombre = elem["nombre"],seccion= elem["seccion"],horario=elem["horario"],profesor=elem["profesor"],codigo_box=elem["codigo_box"],prioridad=int(prioridad))

	list_node = list(G.nodes.items()) 
	lenth_graph = len(list_node) 
	
	for i  in range (lenth_graph): 
		if (i+1) < lenth_graph:
			for j in range (i+1,lenth_graph):
				if (list_node[i][1]["codigo_box"] != list_node[j][1]["codigo_box"] and list_node[i][0][0:7] != list_node[j][0][0:7] ) : #verificando que no se tomen dos secciones del mismo ramo
				#list_node[i][0][0:7] != list_node[j][0][0:7] # verificar por codigo, es mejor
					tope=0
					for k in range (len(list_node[i][1]["horario"])): #se itera por los modulos que tiene la seccion
						for x in range(len(list_node[j][1]["horario"])): 
							if (list_node[i][1]["horario"][k] == list_node[j][1]["horario"][x]): #verificando que no topen los horarios
								tope+=1
								break # termina de ver los modulos, ya que pillo una que topa											
					if tope == 0:
						G.add_edge(list_node[i][0], list_node[j][0]) #se unen los nodos si no tienen topes de horarios -> se debe analizar el codigo box y el codigo referncia = codigo[0:7]

	#for elem in list_node: # imprime todos los nodos agregados en el grafo G, con sus atributos
	#	print(elem,"\n")
		




	
	prev_solution = []

	""" show_options=input("Cuantas solucines quiere ver ?\n")
	try:
		show_options= int(show_options)
	except:
		show_options = 15 """

	show_options = 10
	for i in range(show_options):
		max_clique_pond= nx.max_weight_clique(G, weight="prioridad") #se obtiene el maximo clique con mayor peso ponderado
		if len(max_clique_pond[0]) <= 2:
			print("\n---------------")
			print("Solo quedan soluciones con 2 o menos ramos")
			break 
		arr_aux_delete=[]
		for elem in  max_clique_pond[0]: # es necesario crear un nuevo arreglo ?
			arr_aux_delete.append((elem,G.nodes[elem]["prioridad"])) 
		arr_aux_delete.sort(key=lambda tup: tup[1]) #este arreglo contiene el clique maximo que se recomiendan ordenado de menor a mayor
		
		
		while len(arr_aux_delete) >6 : 
				arr_aux_delete.pop(0)	#se elimina el mas peso mas chico de la lista	

		if 	prev_solution == arr_aux_delete: # sirve para no mostrar siempre las mismas soluciones
			continue
		else:
			print("---------------")
			print("\nSolucion Recomendada #",i+1,": \n")
			for elem in  arr_aux_delete: # muestra las secciones a tomar
				print(elem[0][0:7]," || ",G.nodes[elem[0]]["nombre"],"- Seccion:",G.nodes[elem[0]]["seccion"],"| Horario -> ",G.nodes[elem[0]]["horario"],"||",G.nodes[elem[0]]["prioridad"]) #se muestra los elementos del clique maximo
		#print("ava",arr_aux_delete[0][0])
		prev_solution = arr_aux_delete
		G.remove_node(arr_aux_delete[0][0])

	#if ko == False:
	#	print("\nNo se encontro una solucion con todos los ramos criticos")

			
		

	
	
	#nx.draw(G, with_labels=True, font_weight='bold') #se dibuja el grafo generado
	#plt.show()
	
	#return max_clique_pond #se coloca por si se quiere utilizar mas adelante, de momento se deja el print

def main():

	ramos_disponibles, nombre_excel_malla = getRamoCritico() # ramos criticos #funcion en otro archivo
	


	lista_secciones,ramos_disponibles= extract_data(ramos_disponibles,nombre_excel_malla) #input del año en el que se quiere obtener las secciones disponibles #funcion en otro archivo
	
	get_clique_max_pond(lista_secciones,ramos_disponibles)
	

if __name__ == "__main__":
    main()

#cambiar esto a la nueva forma!