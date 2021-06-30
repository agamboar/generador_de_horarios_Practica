
import json
import logging
from os import write
from ..models import *
from . import utils
from . import stateControl as stc
import traceback


def writeJSONFile(folder, fileName, data, indent=True):
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
    fullpath = './generador_horarios/io_log/' + folder + '/' + fileName + '.json'
    try:
        with open(fullpath) as f:
            data = json.load(f)
        return data
    except OSError as exc:
        raise OSError(
            "Error en readJSONFile(), path: " + fullpath
        ) from exc

#Oferta
def saveOferta(fileName): #fileName no debe incluir ".json" 
    # Guarda todos los datos de la oferta academica de ramos y cfgs en formato json. Se deben subir los excel por la aplicación primero para que funcione
    oferta = dict()
    oferta["secciones"] = list(seccion.objects.all().values())
    oferta["seccionAsignatura"] = list(seccion.to_asignatura_real.through.objects.all().values())
    oferta["eventos"] = list(evento.objects.all().values())
    oferta["cfgAreas"] = list(cfg_areas.objects.all().values())

    writeJSONFile('Setup', fileName, oferta)
def loadOferta(fileName): #fileName no debe incluir ".json"
    # Carga los datos de la oferta academica desde archivo json. Se debe crear el json con saveOferta primero para que funcione
    utils.clearOfertaMalla()
    utils.clearOfertaCFG()
    oferta = readJSONFile('Setup', fileName)

    for sec in oferta["secciones"]: seccion(**sec).save()
    for secAsig in oferta["seccionAsignatura"]: seccion.to_asignatura_real.through(**secAsig).save()
    for event in oferta["eventos"]: evento(**event).save()
    for cfgArea in oferta["cfgAreas"]: cfg_areas(**cfgArea).save()

#PERT
def saveState_beforePERT(userId, fileName):
    # guarda el estado antes de PERT en json
    beforePERT = stc.getState_beforePERT(userId)   
    for AC in beforePERT["asignaturas_cursadas"]: # dateTimeFields no son json-serializable, por lo que no se incluyen
        del AC["fecha_modificacion"] # quita la llave "fecha_modificacion" del diccionario
    writeJSONFile('PERT', fileName, beforePERT)

def loadState_beforePERT(fileName):
    # carga el estado antes de PERT desde archivo. fileName debe ser el nombre de un archivo en io_log/PERT (sin .json al final)
    state = readJSONFile('PERT', fileName)
    stc.setState_beforePERT(state)

def createStateTestCase_PERT(fileName, stateBefore, output, title="---"):
    for AC in stateBefore["asignaturas_cursadas"]:
        del AC["fecha_modificacion"]

    testCase = dict()
    testCase["title"] = title
    testCase["stateInput"] = stateBefore
    testCase["output"] = output
    writeJSONFile('PERT/stateTestCases', fileName, testCase)

#Clique
def saveState_beforeClique(userId, fileName):
    beforeClique = stc.getState_beforeClique(userId)
    # dateTimeFields no son json-serializable, por lo que no se incluyen
    for NA in beforeClique["nodos_asignatura"]:
        del NA["fecha_mod"]
    for NS in beforeClique["nodos_seccion"]:
        del NS["fecha_mod"]
    for PC in beforeClique["prioridades_cfg"]:
        del PC["fecha_mod"]
    writeJSONFile('Clique', fileName, beforeClique)

def loadState_beforeClique(userId, fileName):
    state = readJSONFile('Clique', fileName)
    stc.setState_beforeClique(state)

def createStateTestCase_Clique(fileName, stateBefore, output, title="---"):
    for NA in stateBefore["nodos_asignatura"]:
        del NA["fecha_mod"]
    for NS in stateBefore["nodos_seccion"]:
        del NS["fecha_mod"]
    for PC in stateBefore["prioridades_cfg"]:
        del PC["fecha_mod"]

    testCase = dict()
    testCase["title"] = title
    testCase["stateInput"] = stateBefore
    testCase["output"] = output
    writeJSONFile('Clique/stateTestCases', fileName, testCase)

#User

def saveUsersState(fileName):
    users = list(User.objects.all().values())
    usersDict = dict()
    for user in users:
        del user["last_login"]
        del user["date_joined"]
        usersDict[user["id"]] = user
    writeJSONFile('Users', fileName, usersDict)