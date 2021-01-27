import networkx as nx
import matplotlib.pyplot as plt
from extract_data import extract_data
from rutaCritica import getRamoCritico
import random

#la prioridad se obtiene con un form desde front  

def get_clique_max_pond(lista_secciones,ramos_sin_horario,ramos_criticos,ramos_disp_holgura,arr_ramos_tomar,ramos_id,count_cfg,nombres_cfg_tomar):
	#print(ramos_criticos)
	
	G = nx.Graph()
	priority= []
	priority_ramo= []
	print("Ramos disponibles: \n")
	counter = 0
	for i in (arr_ramos_tomar):
			
			print(counter,".-", i)
			counter += 1
	show_cfg=(input("Quiere ver la lista de CFGs disponibles (si/no)\n"))
	if show_cfg == "si":
		for i in (nombres_cfg_tomar):
			print(counter,".-", i)
			counter += 1
	prio_ram=input("Desea asignarle prioridad a los ramos ? (si/no) \n")
	if prio_ram == "si":
		while (True): #Se puede mejorar el codigo para delimitar bien las prioridades # en teoria se mostrara una lista y con respecto al orden de los elementos se definira la prioridad
			num_ramo = str(input("Ingrese el NOMBRE de un ramo\n"))
			prioridad = int(input("Asigne una prioridad al ramo (1-10)\n"))
			priority_ramo.append({'nombre':arr_ramos_tomar[num_ramo],'prioridad':prioridad})
			cont = input("Desea colocarle una prioridad a otro ramo ? (si/no)\n")
			if cont !="si":
				break


	counter = 0
	prio_sec=input("Desea asignarle prioridad a las secciones de un ramo? (si/no)\n")
	if prio_sec == "si":
		while True:
			for i in (arr_ramos_tomar):
				print(counter,".-", i)
				counter += 1

			auxx=str(input("Ingrese el NOMBRE de un ramo\n"))
			print("Secciones disponibles del ramo ", arr_ramos_tomar[auxx],": \n")
			l=False
			for elem in lista_secciones:
				if arr_ramos_tomar[auxx] == elem["nombre"]:
					l=True
					print(elem)
			if l== False:
				print("No se encontraron secciones disponibles para el ramo ", arr_ramos_tomar[auxx],"\n")
			else:
				while (True):
					codigo_sec = input("Ingrese el CODIGO de una seccion (codigos que aparecen en la lista)\n")
					prioridad = int(input("Asigne una prioridad de una seccion(1-15)\n")) # es mas facil hacer los inputs en la pagina web
					priority.append({'codigo':codigo_sec,'prioridad':prioridad})
					cont = input("Desea colocarle una prioridad a otra seccion ? (si/no)\n")
					if cont !="si":
						break
				cont = input("Desea colocarle una prioridad a seccion de otro ramo? (si/no)\n")
				if cont !="si":
					break 

	
	for elem in lista_secciones:
		
		#aca ver si el codigo del ramo es un electivo cit33 o cit34 [:,5], si se cumple darle la holgura de electivo profesional del pert
		#| -> lo mismo pa cfg

		if elem["codigo"][0:5]=='CIT33':
			UU=str(10-ramos_disp_holgura["CIT33XX"]) if len(str(10-ramos_disp_holgura["CIT33XX"])) > 1 else "0"+str(10-ramos_disp_holgura["CIT33XX"]) #UU
		elif elem["codigo"][0:5]=='CIT34':
			UU=str(10-ramos_disp_holgura["CIT34XX"]) if len(str(10-ramos_disp_holgura["CIT34XX"])) > 1 else "0"+str(10-ramos_disp_holgura["CIT34XX"]) #UU
		elif elem["codigo"][0:3]=='CFG':
			try:
				UU=str(10-ramos_disp_holgura["CFG"]) if len(str(10-ramos_disp_holgura["CFG"])) > 1 else "0"+str(10-ramos_disp_holgura["CFG"]) #UU
			except:
				UU = "00"
		else:
			UU=str(10-ramos_disp_holgura[elem["codigo"][0:7]]) if len(str(10-ramos_disp_holgura[elem["codigo"][0:7]])) > 1 else "0"+str(10-ramos_disp_holgura[elem["codigo"][0:7]]) #UU			

		try: 
			for i in priority_ramo:
				if i["nombre"] == elem["nombre"]:
					KK = str(i["prioridad"]+53) #KK ->( se le suma 53 para que tenga mas importancia que la prioridad por default)
			

			beta = str(53-ramos_id[elem["nombre"]]) #int(elem["N_correlativo"])
			if  len(beta) < 2:
				KK = str("0"+beta) #KK -> de esta forma se setea mayor prioridad a los ramos que aparacen mas pronto en la malla	
			else:	
				KK = beta

		except:
			
			if elem["codigo"][0:3]=='CFG':
				beta = "00"
			else:
				beta = str(53-random.randint(1, 53)) #int(elem["N_correlativo"]) | esto en teoria se puede dejar asi ya si no se modifica es porq no importa
			if  len(beta) < 2:
				KK = str("0"+beta) #KK -> de esta forma se setea mayor prioridad a los ramos que aparacen mas pronto en la malla	
			else:	
				KK = beta
		
		
		for i in priority:
			if i["codigo"] == elem["codigo"]:
				SS = str(i["prioridad"]+20) #SS -> se le suma el 20 para que supere cualquier valor d
		
		SS = str(elem["seccion"]) if len(str(elem["seccion"])) >1 else ("0" + str(elem["seccion"]))  #SS
		
		if elem["codigo"][0:7] in ramos_criticos:
			CC="10" #CC
		else:
			CC="00" ## la equivalencia no considera el cambio de nombre de los criticos -- NF 24/01
		if elem["codigo"][0:3]=='CFG':
			if CC == "10":
				prioridad = 10000000
			else:
				prioridad = 20000 # de esta forma se muestran los cfg al final de la carrera
		else:
			prioridad = CC+UU+KK+SS
		#print(prioridad)
		G.add_nodes_from([elem["codigo"]], nombre = elem["nombre"],seccion= elem["seccion"],horario=elem["horario"],profesor=elem["profesor"],prioridad=int(prioridad))

	list_node = list(G.nodes.items()) 
	lenth_graph = len(list_node) 
	
	for i  in range (lenth_graph): 
		if (i+1) < lenth_graph:
			for j in range (i+1,lenth_graph):
				if (list_node[i][1]["nombre"] != list_node[j][1]["nombre"]): #verificando que no se tomen dos secciones del mismo ramo
				#list_node[0][0:7] != list_node[0][0:7] # verificar por codigo, es mejor
					tope=0
					for k in range (len(list_node[i][1]["horario"])): #se itera por los modulos que tiene la seccion
						for x in range(len(list_node[j][1]["horario"])): 
							if (list_node[i][1]["horario"][k] == list_node[j][1]["horario"][x]): #verificando que no topen los horarios
								tope+=1
								break # termina de ver los modulos, ya que pillo una que topa											
					if tope == 0:
						G.add_edge(list_node[i][0], list_node[j][0]) #se unen los nodos si no tienen topes de horarios

	for elem in list_node: # imprime todos los nodos agregados en el grafo G, con sus atributos
		print(elem,"\n")
		

	max_clique_pond= nx.max_weight_clique(G, weight="prioridad") #se obtiene el maximo clique con mayor peso ponderado
	#cliques= list(nx.find_cliques(G)) #se obtiene el maximo clique
	#cliques= list(nx.find_cliques_recursive(G))
	#print("algo q no se q es !! -<>>> ",nx.graph_number_of_cliques(G)) -> explota con los cfg
	

	#print("\nSecciones disponibles a tomar este semestre:") # si no a parecen es porque no hay un horario definido
	#ko=False
	
	""" count_solucion=1
	epsilon=[]
	for elem in  list(cliques):
		critic =0
		for k in elem:
			if k[0:7] in ramos_criticos:
				critic +=1
		if critic == len(ramos_criticos) :
			ko=True

		if len(ramos_criticos)-critic <= 3:
			suma=0
			for k in elem:
				suma+=G.nodes[k]["prioridad"]
			epsilon.append((elem,suma))
 	"""
	""" epsilon.sort(key=lambda tup: tup[1],reverse=True)
	count_solucion=1 """
		
		
	""" for k in epsilon:
		aux_cfg=count_cfg
		#solo recomendar la cantidad de cfgs que le faltan (tener un contador de cfg aprobados y sugeridos <=4)
		counter_ramos=0
		print("\nSolucion #", count_solucion ,": \n")
		for i in k[0]:
			if counter_ramos >5: 
				break
			if aux_cfg >=4 and i[0:3] =="CFG" :
				continue
			else:
				print(G.nodes[i]["nombre"],"- Seccion",G.nodes[i]["seccion"],"| Horario -> ",G.nodes[i]["horario"],G.nodes[i]["prioridad"])
				counter_ramos+=1
				if i[0:3] =="CFG":
					aux_cfg+=1

		count_solucion+=1
		 if count_solucion == 16:
			break   """
	
	print("---------------")
	print("\nSolucion Recomendada: \n")
	arr_aux_delete=[]
	arr_aux2_delete=[]
	for elem in  max_clique_pond[0]:
		arr_aux_delete.append((elem,G.nodes[elem]["prioridad"]))

	for elem in  max_clique_pond[0]:
		arr_aux2_delete.append((elem,G.nodes[elem]["prioridad"]))

	arr_aux_delete.sort(key=lambda tup: tup[1],reverse = True)
	arr_aux2_delete.sort(key=lambda tup: tup[1],reverse = True)
	limit_achive_cfg=False
	aux_cfg=count_cfg
	

	for elem in arr_aux2_delete: 

		if len(elem[0])<=3:
			pass
		elif elem[0][0:3] =="CFG" and limit_achive_cfg == False :
			aux_cfg+=1
		elif elem[0][0:3] =="CFG" and limit_achive_cfg == True:
		
			arr_aux_delete.pop(arr_aux_delete.index(elem))
		if aux_cfg == 4:
			limit_achive_cfg=True
	
	#antes de imprimir la lista de cfg preguntar si quiere tomar un cfg -> si un cfg es critico se le muestra si  o si los cfg
	arr_aux_delete.sort(key=lambda tup: tup[1])
	while len(arr_aux_delete) >6 : 
			arr_aux_delete.pop(0)	#se elimina el mas peso mas chico de la lista

	#for elem in  arr_aux_delete:
	#	print(G.nodes[elem[0]]["nombre"],"- Seccion",G.nodes[elem[0]]["seccion"],"| Horario -> ",G.nodes[elem[0]]["horario"],G.nodes[elem[0]]["prioridad"]) #se muestra los elementos del clique maximo


	#if ko == False:
	#	print("\nNo se encontro una solucion con todos los ramos criticos")

			
		

	""" if len(ramos_sin_horario)>0:
		print("\nNo se encontraron horarios para ",len(ramos_sin_horario)," ramos !") 
		for i in ramos_sin_horario:
			print("- ",i) """
	
	#nx.draw(G, with_labels=True, font_weight='bold') #se dibuja el grafo generado
	#plt.show()
	
	#return max_clique_pond #se coloca por si se quiere utilizar mas adelante, de momento se deja el print

def main():

	
		#malla = input('Por favor, indique a que malla curricular corresponde su situacion (2010, 2018, o 2020): \n')
		#if malla == '2010':
		#	miMalla = 'MallaCurricular2010.xlsx'
		#	break
		#elif malla == '2018':
		#	miMalla = 'MallaCurricular2018.xlsx'
		#	break
		#elif malla == '2020':
		#	miMalla = 'MallaCurricular2020.xlsx'
		#	break
		#else:
		#	print('Por favor, ingrese una respuesta válida. (2010, 2018, 2020)')
	
	#while True: #esto se puede hacer de forma automatica -> ver la cantidad de numeros correlativos en los ramos aprobados | cambiar esto a futuro puede q solo le falten cfg para tener todo listo hasta el semestre 7
	#	s = int(input('Por favor, indique hasta que semestre ha aprobado completamente (1-10): \n'))

	#	if isinstance(s, int):
	#		if s > 0 and s < 11:
	#			semestre = s
	#			break
	#	elif isinstance(s, str):
	#		print('Por favor, ingrese una respuesta válida. (1-10)')

	#getramocritico entrega codigo en vez de nombre
	arr_ramos_tomar, ramos_criticos, ramos_disp_holgura, dict_ramos_codigos, ramos_disponibles, asignaturasNoCursadas,ramos_id, nombreMalla = getRamoCritico('MiMalla.xlsx') # ramos criticos #funcion en otro archivo
	


	lista_secciones,ramos_sin_horario, ramos_disp_holgura, nombres_ramos_tomar,ramos_criticos,count_cfg,nombres_cfg_tomar = extract_data(arr_ramos_tomar, nombreMalla, ramos_disp_holgura, dict_ramos_codigos,asignaturasNoCursadas, ramos_criticos, 'Sheet1') #input del año en el que se quiere obtener las secciones disponibles #funcion en otro archivo
	get_clique_max_pond(lista_secciones, ramos_sin_horario, ramos_criticos, ramos_disp_holgura, nombres_ramos_tomar,ramos_id,count_cfg,nombres_cfg_tomar)
	

if __name__ == "__main__":
    main()