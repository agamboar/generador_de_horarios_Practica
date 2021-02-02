# Probado con la oferta academica 2019-1

import numpy as np
import pandas as pd

#solo se consideran Catedra y Ayudantias, no Laboratorios
#ramos disponibles corresponde al codigo y no al nombre del curso



def equivalencia(ramos_disponibles, equivArray, excelArray,ramos_disp_holgura,ramos_criticos):
	
	colum = equivArray[:,0]
	for aux in range(len(ramos_disponibles)):
		if ramos_disponibles[aux] not in excelArray[:,16]:
			if ramos_disponibles[aux] in equivArray:
				col = 0
				rows= np.where(colum==ramos_disponibles[aux])
				if ramos_disponibles[aux] in ramos_criticos:
					ramos_criticos.append(equivArray[rows[0][0]][col+1])
				print(ramos_disponibles[aux], 'equivale a --->', equivArray[rows[0][0]][col+1], '\n')
				ramos_disp_holgura[equivArray[rows[0][0]][col+1]]=ramos_disp_holgura[ramos_disponibles[aux]]
				ramos_disponibles[aux] = equivArray[rows[0][0]][col+1]
		else:
			pos_cod_ramo=list(excelArray[:,16]).index(ramos_disponibles[aux])
			if isinstance(excelArray[pos_cod_ramo][22], str): 
				continue
			elif ramos_disponibles[aux] in equivArray:
				col = 0
				rows= np.where(colum==ramos_disponibles[aux])
				if ramos_disponibles[aux] in ramos_criticos:
					ramos_criticos.append(equivArray[rows[0][0]][col+1])
				print(ramos_disponibles[aux], 'equivale a --->', equivArray[rows[0][0]][col+1], '\n')
				ramos_disp_holgura[equivArray[rows[0][0]][col+1]]=ramos_disp_holgura[ramos_disponibles[aux]]
				ramos_disponibles[aux] = equivArray[rows[0][0]][col+1]

				
	#print(ramos_disp_holgura)
	return ramos_disponibles,ramos_disp_holgura,ramos_criticos

#pasar el diccionario dict_ramos_holg a la funcion de equivalencia. Asignarle la holgura de la cajita.

def readingExcels(nombreOferta, miMalla):

	excelArray = np.array(pd.read_excel(nombreOferta, sheet_name='Sheet1'))
	electivosArray = np.array(pd.read_excel(miMalla, sheet_name='Electivos'))
	equivArray = np.array(pd.read_excel(miMalla, sheet_name='Equivalencias'))
	miMallaArray = np.array(pd.read_excel('MiMalla.xlsx', sheet_name='MiMalla'))

	return excelArray, electivosArray, equivArray, miMallaArray

def secciones_cfg(lista_secciones):
	CFG_Array = np.array(pd.read_excel('CURSOS-DE-FORMACIÓN-GENERAL.xlsx', sheet_name='Sheet1'))
	codAprobados = np.array(pd.read_excel('MiMalla.xlsx', sheet_name='MiMalla'))[:,1]
	count_cfg=0
	#CFG_disponibles=[]
	nombres_cfg_tomar = {}
	#print(CFG_Array[0][5],CFG_Array[0][6],)
	for i in codAprobados:
		if str(i)[0:3]=="CFG" : 
			count_cfg+=1

	for i in range (0,len(CFG_Array)):
		elem=CFG_Array[i]
		#print(i,"----",elem)
		if isinstance(elem[5], str): 
			if elem[5][0] == "C" or  elem[5][0] == "B": #se verifica que la informacion de la fila sea una Catedra
				aux_horario = [] 
				try:
					if len(elem[6].split()) == 5: #se procesa los datos de los horarios para usarlos posteriormente
						aux = elem[6].split()[0]+" "+elem[6].split()[2] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
						aux = elem[6].split()[1]+" "+elem[6].split()[2] # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
						aux_horario.append(aux)
					elif len(elem[6].split()) == 4:
						aux = elem[6].split()[0]+" "+elem[6].split()[1] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
					elif len(elem[6].split()) == 8:
						aux = elem[6].split()[0]+" "+elem[6].split()[1] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
						aux = elem[6].split()[4]+" "+elem[6].split()[5] # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
						aux_horario.append(aux)

					codigo = elem[10]  
					codRamo = elem[0]
					nombre = elem[1]
					if len(elem[4]) == 10:
						seccion = int(elem[4][8]+elem[4][9])
					else:
						seccion = int(elem[4][8])
					profesor = elem[7]
				except:
					pass 
				finally:
					continue
			else:
				continue
		else:
			if codigo not in codAprobados:
				nombres_cfg_tomar[nombre] = nombre

				alfa = {'codigo':codigo,'nombre':nombre, 'seccion':seccion, "horario":aux_horario, "profesor":profesor}
				aux_count = 0
				for k in range(0,len(lista_secciones)): 
					if lista_secciones[k]["codigo"] == codigo: # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
						aux_count+=1
				if aux_count == 0: #con esto solo se agrega una vez la seccion
					lista_secciones.append(alfa)
	return lista_secciones,nombres_cfg_tomar, count_cfg

def appendElectivos(ramosDisponibles, electivosArray, miMallaArray, cod_elect_inf, cod_elect_teleco,asignaturasNoCursadas):
	#falta pasar la holgura
	codElectivos = electivosArray[:,1]
	codAprobados = miMallaArray[:,1]
	
	if len(cod_elect_inf) > 0: 				# <---- si el alumno aun debe dar electivos de informatica (el arreglo cod_elect_inf tiene elementos dentro)
		for i in range(1, len(codElectivos)):
			codigoAux = codElectivos[i] 	#porq se crea esta variable ? esta de mas

			aux = str(codigoAux)[0:5] 			#para q tanto axuliar ???
			can_take=True
			if codigoAux not in codAprobados and aux == 'CIT33': 
				for elem in (np.array(electivosArray[i])[4]).split(","):
					if elem.strip() in asignaturasNoCursadas[:,1]:
						can_take=False
				#falta un if aca que verifique si puede tomar el electivo
				if can_take == True:
					ramosDisponibles.append(codElectivos[i])
		
	if len(cod_elect_teleco) > 0: 				# <---- si el alumno aun debe dar electivos de teleco(el arreglo cod_elect_inf tiene elementos dentro)
		for i in range(1, len(codElectivos)):
			codigoAux = codElectivos[i]

			aux = str(codigoAux)[0:5]
			can_take=True
			if codigoAux not in codAprobados and aux == 'CIT34':
				for elem in (np.array(electivosArray[i])[4]).split(","):
					if elem.strip() in asignaturasNoCursadas[:,1]:
						can_take=False
				#falta un if aca que verifique si puede tomar el electivo
				if can_take == True:
				#falta un if aca que verifique si puede tomar el electivo
					ramosDisponibles.append(codElectivos[i])
		
	ramsAux = ramosDisponibles

	for i in range(len(ramosDisponibles)):  #remuevo los codigos 33XX y 34XX que hayan en la lista de ramos, por un tema de comodidad
			
		if 'CIT33XX' in ramsAux:
			ramsAux.remove('CIT33XX')
		if 'CIT34XX' in ramsAux:
			ramsAux.remove('CIT34XX')

	return ramosDisponibles




def extract_data(ramos_disponibles, miMalla,  ramos_disp_holgura, dict_ramos_codigos, asignaturasNoCursadas,ramos_criticos,sheet_name): 
	# se usa para saber que ramos no tienen horarios asigandos en la oferta academica
	
	#count_cfg= ramos_disponibles.count("CFG")
	lista_secciones=[]
	cod_elect_inf = []
	cod_elect_teleco = []
	cod_CFG = []
	patata = []
	#iteracion para guardar los electivos y cfgs no cursados, en arreglos separados
	for aux1 in range(len(ramos_disponibles)):

		if str(ramos_disponibles[aux1])[0:5] == "CIT33":
			cod_elect_inf.append(ramos_disponibles[aux1])
		
		if str(ramos_disponibles[aux1])[0:5] == "CIT34":
			cod_elect_teleco.append(ramos_disponibles[aux1])
		
		if str(ramos_disponibles[aux1]) == "CFG":
			cod_CFG.append(ramos_disponibles[aux1])
		
	excelArray, electivosArray, equivArray, miMallaArray = readingExcels('INGENIERÍA-CIVIL-EN-INFORMÁTICA-Y-TELECOMUNICACIONES.xlsx', miMalla) #miMalla es el nombre de la sheet 

	ramosDisponibles,ramos_disp_holgura, ramos_criticos = equivalencia(ramos_disponibles, equivArray, excelArray,ramos_disp_holgura,ramos_criticos)


	#La idea para los electivos es que el alumno coloque en el Excel el electivo que ya curso, desde la sheet 'Electivos', y se filtra para no ofrecerle ese electivo.
	#Si los arreglos cod_elec_inf y cod_elect_teleco tienen elementos, se le ofrecerán los que no haya rendido. En cambio, si están vacios, quiere decir que ya dio esos electivos
	#y no se le ofreceran de ese tipo (teleco o inf)

	# Para los CFG se debe hacer algo similar con el arreglo cod_CFG, pero lo complicado es que son muchos CFG y el alumno no podrá indicar en el Excel cual ha cursado. Cuando se 
	# saque del portal será más facil. Igual es posible hacer un excel que entregue ordenados por categorias los CFG y asi el alumno podria ingresar facilmente el dato. 
	# Estudiar sobre esta posibilidad. 

	#Si el semestre máximo aprobado por el alumno es mayor a 6, se le mostraran los electivos que se impartirán este semestre
	
	#if semestre >= 4:
	ramosDisponibles = appendElectivos(ramosDisponibles, electivosArray, miMallaArray, cod_elect_inf, cod_elect_teleco,asignaturasNoCursadas)

	#print(ramosDisponibles)

	verificador = [0 for i in range(len(ramosDisponibles))]

	nombres_ramos_tomar = {}
	for i in range (0,len(excelArray)):
		elem=excelArray[i]
		if isinstance(elem[21], str): 
			if elem[21][0] == "C": #se verifica que la informacion de la fila sea una Catedra
				aux_horario = [] 
				try:
					if len(elem[22].split()) == 5: #se procesa los datos de los horarios para usarlos posteriormente
						aux = elem[22].split()[0]+" "+elem[22].split()[2] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
						aux = elem[22].split()[1]+" "+elem[22].split()[2] # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
						aux_horario.append(aux)
					elif len(elem[22].split()) == 4:
						aux = elem[22].split()[0]+" "+elem[22].split()[1] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
					elif len(elem[22].split()) == 6:
						aux = elem[22].split()[0]+" "+elem[22].split()[3] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
						aux = elem[22].split()[1]+" "+elem[22].split()[3] # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
						aux_horario.append(aux)
						aux = elem[22].split()[2]+" "+elem[22].split()[3] # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
						aux_horario.append(aux)
					elif len(elem[22].split()) == 8:
						aux = elem[22].split()[0]+" "+elem[22].split()[1] # se guarda el primer modulo de la Catedra ejemplo LU 08.30
						aux_horario.append(aux)
						aux = elem[22].split()[4]+" "+elem[22].split()[5] # se guarda el segundo modulo de la Catedra ejemplo MA 10.00
						aux_horario.append(aux)
					

					codigo = elem[26]  
					codRamo = elem[16]
					nombre = elem[17]
					if len(elem[20]) == 10:
						seccion = int(elem[20][8]+elem[20][9])
					else:
						seccion = int(elem[20][8])
					
					profesor = elem[23]
				except:
					pass 
				finally:
					continue
			elif elem[21][0] == "A": #se verifica que la informacion de la fila sea una Ayudantia
				aux = elem[22].split()[0]+" "+elem[22].split()[1]  # se guarda el primer modulo de la ayudantia ejemplo VI 17.25
				aux_horario.append(aux)
			else:
				continue
		else:
			if codRamo in ramosDisponibles: 
				
				aux33 = ramosDisponibles.index(codRamo)
				nombres_ramos_tomar[nombre] = nombre

				verificador[aux33] = 1
				alfa = {'codigo':codigo,'nombre':nombre, 'seccion':seccion, "horario":aux_horario, "profesor":profesor}
				aux_count = 0
				for k in range(0,len(lista_secciones)): 
					if lista_secciones[k]["codigo"] == codigo: # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
						aux_count+=1
				if aux_count == 0 and seccion != 99: #con esto solo se agrega una vez la seccion
					lista_secciones.append(alfa)
					patata.append(alfa)
			else:
		
				alfa = {'codigo':codigo,'nombre':nombre, 'seccion':seccion, "horario":aux_horario, "profesor":profesor}
				aux_count = 0
				for k in range(0,len(lista_secciones)): 
					if lista_secciones[k]["codigo"] == codigo: # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
						aux_count+=1
				if aux_count == 0 and seccion != 99: #con esto solo se agrega una vez la seccion
					patata.append(alfa)


	#falta un if aqui -> solo funciona si sale como ramos disponible un cfg 
	lista_secciones,nombres_cfg_tomar,count_cfg = secciones_cfg(lista_secciones)



	ramos_sin_horario =[]				
	for i in range(len(verificador)):
		if verificador[i] == 0:
			ramos_sin_horario.append(ramosDisponibles[i])

	""" for i in range(0,count_cfg):
		if count_cfg < 10:
			codigo = "CFG_0"+str(i+1)
			lista_secciones.append({'codigo':codigo,'nombre':"CFG-"+str(i+1), 'seccion':"Sección "+str(i+1), "horario":[codigo] ,"profesor": "CFG"})
		else:
			codigo = "CFG_"+str(i+1)
			lista_secciones.append({'codigo':codigo,'nombre':"CFG-"+str(i+1), 'seccion':"Sección "+str(i+1), "horario":[codigo] ,"profesor": "CFG"}) """
	""" 
	for i in lista_secciones:
		print(i)
	"""
	#print(lista_secciones)
	#print(nombres_ramos_tomar)

	#print(cod_elect_inf, cod_elect_teleco, cod_CFG)
	return lista_secciones ,ramos_sin_horario, ramos_disp_holgura, nombres_ramos_tomar,ramos_criticos,count_cfg,nombres_cfg_tomar




