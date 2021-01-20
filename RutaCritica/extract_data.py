# Probado con la oferta academica 2019-1

import numpy as np
import pandas as pd

#solo se consideran Catedra y Ayudantias, no Laboratorios

def extract_data(ramos_disponibles,sheet_name='Sheet1'): 
	verificador = [0 for i in range(len(ramos_disponibles))] # se usa para saber que ramos no tienen horarios asigandos en la oferta academica

	#count_cfg= ramos_disponibles.count("CFG") #cuenta cuantos cfg se deben tomar 
	
	excel = pd.read_excel('INGENIERÍA-CIVIL-EN-INFORMÁTICA-Y-TELECOMUNICACIONES.xlsx', sheet_name=sheet_name) #se obtiene los datos de la secciones de la oferta academica
	excelArray = np.array(excel)
	lista_secciones=[]

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

					codigo = elem[26]  
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
			if nombre in ramos_disponibles : #con esto se guarda info incesaria en memoria, poquito la verdad
				aux33 = ramos_disponibles.index(nombre)
				verificador[aux33] = 1
				alfa = {'codigo':codigo,'nombre':nombre, 'seccion':seccion, "horario":aux_horario, "profesor":profesor}
				aux_count = 0
				for k in range(0,len(lista_secciones)): 
					if lista_secciones[k]["codigo"] == codigo: # se verifica si ya existe esta seccion en la lista de secciones (se evitan datos repetidos)
						aux_count+=1
				if aux_count == 0: #con esto solo se agrega una vez la seccion
					lista_secciones.append(alfa)

	ramos_sin_horario =[]				
	for i in range(len(verificador)):
		if verificador[i] == 0:
			ramos_sin_horario.append(ramos_disponibles[i])

	""" for i in range(0,count_cfg):
		if count_cfg < 10:
			codigo = "CFG_0"+str(i+1)
			lista_secciones.append({'codigo':codigo,'nombre':"CFG-"+str(i+1), 'seccion':"Sección "+str(i+1), "horario":[codigo] ,"profesor": "CFG"})
		else:
			codigo = "CFG_"+str(i+1)
			lista_secciones.append({'codigo':codigo,'nombre':"CFG-"+str(i+1), 'seccion':"Sección "+str(i+1), "horario":[codigo] ,"profesor": "CFG"}) """

	return lista_secciones ,ramos_sin_horario




