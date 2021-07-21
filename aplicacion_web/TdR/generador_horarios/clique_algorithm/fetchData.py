import traceback
from ..models import *
from ..helpers import utils as ut, jsonLog as jl

""" # TODO actualizar
ejemplo de estructura de diccionario 'data'

    data = {
        'prioridades_area_cfg': {
            'Ciencias Sociales' : 1~4,
            'Ciencia y Sociedad' : 1~4,
            'Humanidades'  : 1~4,
            'Historia' : 1~4
        },
        'asignaturas': {
            '<codigo asignatura 1>' : {
                'nombre' : '<nombre asignatura 1>',
                'nodo_asignatura' : '<nodo_asignatura de asignatura 1>',
                'is_cfg' : True/False,
                'secciones' : {
                    '<codigo seccion 1>' : {
                        'nodo_seccion' : '<nodo_seccion de seccion 1>',
                        'eventos' : [
                            {
                                'bloque': '<bloque(ej. JU_10)>', 
                                'tipo': '<tipo: ej. CATEDRA>', 
                                'profesor': '<profesor>'
                            },
                            {...},
                            {...},
                            ...
                        ],
                        'bloques' : set('LU_10', 'JU_10', ...)
                    },
                    '<codigo seccion 2>' : {...}
                } 
            },
            '<codigo asignatura 2>' : {...},
            '<codigo asignatura 3>' : {...},
            ...
        }
    }

"""

def getData(userId, cfgAreaLimit):
    # --- retorna los datos de la bdd que necesita get_clique_max_pond, ejemplo de la estructura de 'data' en clique_algorithm/ejemplo_getData.json --- #
    data = {}

    prioridadesArea = getPrioridadesArea(userId) # diccionario -> llave='nombre area' valor='prioridad de area'
    data['prioridades_area_cfg'] = prioridadesArea

    nodosAsignatura = getNodosAsignatura(userId) # desde nodo_asignatura en bdd
    asignaturas = {} #diccionario -> llave='codigo asignatura' valor ='{nombre, nodo_asignatura, is_cfg, secciones}'
    for nodoAsig in list(nodosAsignatura): 
        nodosSeccion = getNodosSeccion(nodoAsig, userId) # se obtienen todas las secciones de la asignatura 
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

# def filterPrerrequisitos(nodosAsignatura, userId):  ## se tenian que filtrar las secciones xd
#     filteredList = []
#     for node in list(nodosAsignatura):
#         codigo = node['to_asignatura_real']
#         nombre = node['to_asignatura_real__nombre']
#         importancia = node['to_asignatura_real__importancia']

#         if (importancia != 2) or ('INGLES' in nombre): 
#             filteredList.append(node)
#         else:
#             codigos_asignaturas_cursadas = asignatura_cursada.objects.filter(to_User=userId).values_list('codigo', flat=True)
#             prerrequisitos = asignatura_real.prerrequisito.through.objects.filter(
#                 from_asignatura_real_id=codigo
#             ).values_list('to_asignatura_real_id', flat=True)
            
#             ok = True
#             for preq in prerrequisitos:
#                 if preq not in codigos_asignaturas_cursadas: ok = False

#             if ok: filteredList.append(node)
#     return filteredList

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

def getNodosSeccion(nodoAsig, userId):
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

    cod_ramo = nodoAsig['to_asignatura_real']
    nombre_ramo = nodoAsig['to_asignatura_real__nombre']
    importancia = nodoAsig['to_asignatura_real__importancia']
    if (importancia != 2) or ('INGLES' in nombre_ramo): # si no es electivo no hay nada mas que hacer
        return list(nodosSeccion)

    # para electivos se quitan las secciones que no tienen sus prerrequisitos aprobados:
    nodosSeccionList = []
    ramosAprobados = asignatura_cursada.objects.filter(to_User=userId).values_list('codigo', flat=True)
    # print('\nramo--', cod_ramo, '-', nombre_ramo)
    # print('secciones de electivo: ', list(nodosSeccion))
    # print('ramosAprobados: ', list(ramosAprobados))
    for nodoSecc in nodosSeccion:
        codigo_electivo = getRamoReal(nodoSecc['to_seccion'])
        prerrequisitos = asignatura_real.prerrequisito.through.objects.filter(
            from_asignatura_real_id=codigo_electivo
        ).values_list('to_asignatura_real_id', flat=True)

        # print('codigo_electivo: ', codigo_electivo)
        # print('prerrequisitos: \n', prerrequisitos)
        ok = True
        for preq in prerrequisitos:
            if preq not in list(ramosAprobados):
                # print('prerreq fallo: ', preq) 
                ok = False
        if ok: 
            nodosSeccionList.append(nodoSecc)
    #     print('ok?',ok)
        
    # print('nodos seccion: ', nodosSeccionList)
    return nodosSeccionList

def getEventos(codigoSeccion):
    # se obtienen todos los eventos de la seccion 
    events = evento.objects.filter(
        to_seccion=codigoSeccion
    ).values().distinct('dia', 'modulo')
    return events

def getDictAsignatura(nodoAsig, nodosSeccion, prioridadesArea, cfgAreaLimit):
    # se agrega asignatura a diccionario de asignaturas
    isCfg = nodoAsig['to_asignatura_real__importancia'] == 1 # cfgs tienen importancia 1

    secciones = {} # diccionario -> llave='codigo seccion' valor='{nodo_seccion, eventos}'
    for nodoSecc in nodosSeccion:             
        codigoSecc = nodoSecc['to_seccion']
        if isCfg:
            CFGReal = getRamoReal(codigoSecc)
            cfgArea = cfg_areas.objects.get(codigo=CFGReal.codigo).area
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
    horario = [] # guarda la lista de bloques en un formato diferente a los de parsedEvents (se utiliza en el front)
    for event in list(events): 
        parsedEvents.append(getParsedEvent(event))
        bloque_v2 = event['dia'] + ' ' +event['modulo']
        if bloque_v2 not in horario: horario.append(bloque_v2)

    bloques = set()
    for parsedEvent in parsedEvents:
        bloques.add(parsedEvent['bloque'])

    ramoReal = getRamoReal(nodoSecc['to_seccion'])

    # se crea diccionario seccion conteniendo con nodo_seccion y lista de eventos.
    dictSeccion = {
        'codigo_ramo_real' : ramoReal.codigo,
        'nombre_ramo_real' : ramoReal.nombre,
        'nodo_seccion' : nodoSecc,
        'bloques' : bloques,
        'eventos' : parsedEvents,
        'horario' : horario,
    }
    return dictSeccion

def getRamoReal(codigoSeccion):
    # primeros 7 digitos del codigo de seccion son el codigo del ramo real (necesario para cfgs, que tienen CFG1/CFG2..etc y no el ramo real asociado en los nodos asignatura)
    codigoReal = codigoSeccion[0:7]
    ramoReal = asignatura_real.objects.get(codigo=codigoReal)
    return ramoReal

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
