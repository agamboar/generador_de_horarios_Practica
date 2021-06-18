
import json
import logging
from ..models import *
from . import utils
from . import stateControl as stc


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
    try: 
        oferta = dict()
        oferta["secciones"] = list(seccion.objects.all().values())
        oferta["seccionAsignatura"] = list(seccion.to_asignatura_real.through.objects.all().values())
        oferta["eventos"] = list(evento.objects.all().values())
        oferta["cfgAreas"] = list(cfg_areas.objects.all().values())

        writeJSONFile('Setup', fileName, oferta)
    except Exception as e:
        print("error en saveOferta: ", e)

# Carga los datos de la oferta academica desde archivo json
# Se crear el json con saveOferta primero para que funcione
def loadOferta(fileName): #fileName no debe incluir ".json"
    utils.clearOfertaMalla()
    utils.clearOfertaCFG()
    try:
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
        return "ok"
    except Exception as e:
        print("error en loadOferta: ", e)

#guarda el estado antes de PERT en json
def saveState_beforePERT(userId, fileName):
    try:
        beforePERT = stc.getState_beforePERT(userId)
        # dateTimeFields no son json-serializable, por lo que no se incluyen
        for AC in beforePERT["asignaturas_cursadas"]:
            del AC["fecha_modificacion"] # quita la llave "fecha_modificacion" del diccionario
    
        writeJSONFile('PERT', fileName, beforePERT)
    except Exception as e:
        print("error jsonLog.saveState_BeforePERT: ", e)

# carga el estado antes de PERT desde archivo. fileName debe ser el nombre de un archivo en io_log/PERT (sin .json al final)
def loadState_beforePERT(fileName):
    try:
        state = readJSONFile('PERT', fileName)
        stc.setState_beforePERT(state) 
    except Exception as e:
        print("error en jsonLog.loadState_beforePERT: ", e)


def saveState_beforeClique(userId, fileName):
    try:
        beforeClique = stc.getState_beforeClique(userId)
        # dateTimeFields no son json-serializable, por lo que no se incluyen
        for NA in beforeClique["nodos_asignatura"]:
            del NA["fecha_mod"]
        for NS in beforeClique["nodos_seccion"]:
            del NS["fecha_mod"]

        writeJSONFile('Clique', fileName, beforeClique)
    except Exception as e:
        print("error en jsonLog.saveState_beforeClique", e)
