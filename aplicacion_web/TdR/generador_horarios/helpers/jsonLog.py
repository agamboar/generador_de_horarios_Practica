
import json
import logging
from ..models import *

ENABLED = True

def writeJSONFile(folder, fileName, data, indent=True):
    if not ENABLED: return

    fullpath = './generador_horarios/io_log/' + folder + '/' + fileName + '.json'
    try:
        with open(fullpath, 'w') as f:
            if indent:
                json.dump(data, f, indent=2) #json formateado
            else:
                json.dump(data,f)
    except Exception as e:
        logging.error("Error al intentar crear Json: " + fileName, e)    

def readJSONFile(folder, fileName):
    if not ENABLED: return []

    fullpath = './generador_horarios/io_log/' + folder + '/' + fileName + '.json'
    try:
        with open(fullpath) as f:
            data = json.load(f)
        return data
    except Exception as e:
        logging.error("Error al intentar leer Json: " + fileName, e)
        return []

# Guarda todos los datos de la oferta academica de ramos y cfgs en formato json
# Se deben subir los excel por la aplicación primero para que funcione
def saveOferta(fileName): #fileName no debe incluir ".json"  
    oferta = dict()
    oferta["secciones"] = list(seccion.objects.all().values())
    oferta["seccionAsignatura"] = list(seccion.to_asignatura_real.through.objects.all().values())
    oferta["eventos"] = list(evento.objects.all().values())
    oferta["cfgAreas"] = list(cfg_areas.objects.all().values())

    writeJSONFile('Oferta', fileName, oferta)

# Carga los datos de la oferta academica desde archivo json
# Se crear el json con saveOferta primero para que funcione
def loadOferta(fileName): #fileName no debe incluir ".json"
    oferta = readJSONFile('Oferta', fileName)
    for S in oferta["secciones"]:
        sec = seccion(**S)
        sec.save()
    for SA in oferta["seccionAsignatura"]:
        secAsig = seccion.to_asignatura_real.through(**SA)
        secAsig.save()
    for E in oferta["eventos"]:
        ev = evento(**E)
        ev.save()
    for CA in oferta["cfgAreas"]:
        cfgArea = cfg_areas(**CA)
        cfgArea.save()

def saveAvance(userId, fileName):
    avance = dict()
    avance["user_id"] = userId
    # avance_academico 
    # asignatura cursada
