import traceback
from ..models import *
from ..helpers import utils as ut, jsonLog as jl


def getData(userId, cfgAreaLimit):
    # --- retorna los datos de la bdd que necesita get_clique_max_pond, ejemplo de la estructura de 'data' en clique_algorithm/ejemplo_getData.json --- #
    data = {}

    prioridadesArea = getPrioridadesArea(userId) # diccionario -> llave='nombre area' valor='prioridad de area'
    data['prioridades_area_cfg'] = prioridadesArea

    nodosAsignatura = getNodosAsignatura(userId) # desde nodo_asignatura en bdd
    asignaturas = {} #diccionario -> llave='codigo asignatura' valor ='{nombre, nodo_asignatura, is_cfg, secciones}'
    for nodoAsig in list(nodosAsignatura): 
        nodosSeccion = getNodosSeccion(nodoAsig) # se obtienen todas las secciones de la asignatura 
        if (len(nodosSeccion) == 0): continue # no se consideran ramos sin secciones

        # se agrega asignatura a diccionario de asignaturas
        codigoAsig = nodoAsig['to_asignatura_real']
        asignaturas[codigoAsig] = getDictAsignatura(nodoAsig, nodosSeccion, prioridadesArea, cfgAreaLimit)
    data['asignaturas'] = asignaturas

    return data
def getNodosAsignatura(userId):
    nodosAsignatura = nodo_asignatura.objects.filter(
        to_user=userId,
        es = 1
    ).values(
        'id',
        'to_asignatura_real', # entrega la primary key (codigo)
        'to_asignatura_real__nro_correlativo', 'to_asignatura_real__nombre', 'to_asignatura_real__importancia',
        'cc', 'uu', 'kk', 'critico'
    ).order_by(
        '-to_asignatura_real__importancia',
        'to_asignatura_real'
    ).distinct()
    return nodosAsignatura
def getPrioridadesArea(userId):
    prioridadesArea = {} # diccionario -> llave='nombre area', valor='prioridad de area'
    listaPrioidadCFG = list(prioridad_cfg.objects.filter(to_user=userId).values('area', 'prioridad'))
    if len(listaPrioidadCFG) != 4:
        prioridadesArea = {
            'Ciencias Sociales' : 1,
            'Ciencia y Sociedad' : 2,
            'Humanidades'  : 3,
            'Historia' : 4
        }
    else:
        for prioridadCFG in listaPrioidadCFG:
            prioridadesArea[prioridadCFG['area']] = prioridadCFG['prioridad']
    return prioridadesArea
def getNodosSeccion(nodoAsig):
    # se obtienen todas las secciones de la asignatura  
    nodosSeccion = nodo_seccion.objects.filter(
        to_nodo_asignatura=nodoAsig['id'],
        to_seccion__vacantes_libres__gt=0
    ).exclude(
        to_seccion__num_seccion='99' # las pruebas de eximicion de ingles tienen numero de seccion 99
    ).values(
        'ss', 'to_seccion', 'to_seccion__num_seccion'
    ).order_by(
        'to_seccion'
    ).distinct()
    return nodosSeccion
def getEventos(codigoSeccion):
    # se obtienen todos los eventos de la seccion 
    events = evento.objects.filter(
        to_seccion=codigoSeccion
    ).values().distinct()
    return events
def getDictAsignatura(nodoAsig, nodosSeccion, prioridadesArea, cfgAreaLimit):
    # se agrega asignatura a diccionario de asignaturas
    isCfg = nodoAsig['to_asignatura_real__importancia'] == 1 # cfgs tienen importancia 1

    secciones = {} # diccionario -> llave='codigo seccion' valor='{nodo_seccion, eventos}'
    for nodoSecc in list(nodosSeccion):             
        codigoSecc = nodoSecc['to_seccion']
        if isCfg:
            codigoAsignaturaReal = codigoSecc[0:7] # primeros 7 digitos del codigo de seccion son el codigo del ramo cfg real (y no los ramos CFG1/CFG2..)
            cfgArea = cfg_areas.objects.get(codigo=codigoAsignaturaReal).area
            if (prioridadesArea[cfgArea] > cfgAreaLimit): continue # solo se consideran como seccion cfgs de ciertas areas

        events = getEventos(codigoSecc) # se obtienen todos los eventos de la seccion            
        if (len(events) == 0): continue # no se consideran secciones sin eventos

        secciones[codigoSecc] = getDictSeccion(nodoSecc, events)

    dictAsignatura = {
        'nombre' : nodoAsig['to_asignatura_real__nombre'],
        'nodo_asignatura' : nodoAsig,
        'is_cfg' : isCfg,
        'secciones' : secciones  
    }
    return dictAsignatura
def getDictSeccion(nodoSecc, events):
    parsedEvents = [] # se ajusta el formato de los eventos
    for event in list(events): 
        parsedEvents.append(getParsedEvent(event))

    # se crea diccionario seccion conteniendo con nodo_seccion y lista de eventos.
    dictSeccion = {
        'nodo_seccion' : nodoSecc,
        'eventos' : parsedEvents
    }
    return dictSeccion
def getParsedEvent(event):
    # elimina las tildes de catedra y ayudantia
    if event['tipo'][0] == 'C':
        tipo = 'CATEDRA'
    elif event['tipo'][0] == 'A':
        tipo = 'AYUDANTIA'
    elif event['tipo'][0] == 'L':
        tipo = 'LABORATORIO'
    else:
        tipo = event['tipo']

    prof = event['profesor']

    # Algoritmo para eliminar las Ñ y las tildes de los nombres de profesores de la oferta academica.
    if prof != '':
        a, b = 'ÁÉÍÓÚÑáéíóúñ', 'AEIOUNaeioun'
        trans = str.maketrans(a, b)
        prof_modificado = prof.translate(trans)
    else:
        prof_modificado = ''
    parsedEvent = {
        'bloque': event['dia'] + '_' + event['modulo'][0:2],
        'tipo': tipo, 
        'profesor': prof_modificado
    }
    return parsedEvent
