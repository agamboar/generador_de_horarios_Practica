
import json
import logging

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

