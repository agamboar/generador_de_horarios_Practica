
import json
import logging
from ..models import *
from . import utils
from . import stateControl as stc
import traceback


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
    except OSError as exc:
        raise OSError(
            "Error en writeJSONFile(), path: " + fullpath
        ) from exc    

def readJSONFile(folder, fileName):
    if not ENABLED: return []

    fullpath = './generador_horarios/io_log/' + folder + '/' + fileName + '.json'
    try:
        with open(fullpath) as f:
            data = json.load(f)
        return data
    except OSError as exc:
        raise OSError(
            "Error en readJSONFile(), path: " + fullpath
        ) from exc

# Guarda todos los datos de la oferta academica de ramos y cfgs en formato json
# Se deben subir los excel por la aplicación primero para que funcione
def saveOferta(fileName): #fileName no debe incluir ".json" 
    oferta = dict()
    oferta["secciones"] = list(seccion.objects.all().values())
    oferta["seccionAsignatura"] = list(seccion.to_asignatura_real.through.objects.all().values())
    oferta["eventos"] = list(evento.objects.all().values())
    oferta["cfgAreas"] = list(cfg_areas.objects.all().values())

    writeJSONFile('Setup', fileName, oferta)
 
# Carga los datos de la oferta academica desde archivo json
# Se crear el json con saveOferta primero para que funcione
def loadOferta(fileName): #fileName no debe incluir ".json"
    utils.clearOfertaMalla()
    utils.clearOfertaCFG()

    oferta = readJSONFile('Setup', fileName)
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

#guarda el estado antes de PERT en json
def saveState_beforePERT(userId, fileName):
    beforePERT = stc.getState_beforePERT(userId)
    # dateTimeFields no son json-serializable, por lo que no se incluyen
    for AC in beforePERT["asignaturas_cursadas"]:
        del AC["fecha_modificacion"] # quita la llave "fecha_modificacion" del diccionario

    writeJSONFile('PERT', fileName, beforePERT)

# carga el estado antes de PERT desde archivo. fileName debe ser el nombre de un archivo en io_log/PERT (sin .json al final)
def loadState_beforePERT(fileName):
    state = readJSONFile('PERT', fileName)
    stc.setState_beforePERT(state) 



def saveState_beforeClique(userId, fileName):
    beforeClique = stc.getState_beforeClique(userId)
    # dateTimeFields no son json-serializable, por lo que no se incluyen
    for NA in beforeClique["nodos_asignatura"]:
        del NA["fecha_mod"]
    for NS in beforeClique["nodos_seccion"]:
        del NS["fecha_mod"]

    writeJSONFile('Clique', fileName, beforeClique)

# def loadState_beforeClique(fileName):