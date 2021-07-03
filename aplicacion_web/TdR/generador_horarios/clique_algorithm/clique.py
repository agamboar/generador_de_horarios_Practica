import networkx as nx
import matplotlib.pyplot as plt
import random
import traceback
from ..models import *
from ..helpers import utils as ut, jsonLog as jl

VERSION = 2

# seria bueno modularizar esta funcion
def get_clique_max_pond(userId):
    pass

def getData(userId):
    # --- retorna los datos de la bdd que necesita get_clique_max_pond, ejemplo de la estructura de 'data' en clique_algorithm/ejemplo_getData.json --- #
    data = {}

    nodosAsignatura = nodo_asignatura.objects.filter(
        to_user=userId,
        es = 1
    ).values(
        'id',
        'to_asignatura_real', # entrega la primary key (codigo)
        'to_asignatura_real__nro_correlativo', 'to_asignatura_real__nombre',
        'cc', 'uu', 'kk', 'critico'
    ).order_by(
        '-to_asignatura_real__importancia',
        'to_asignatura_real'
    ).distinct()

    data['asignaturas'] = {}
    for nodoAsig in list(nodosAsignatura):
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
        if (len(nodosSeccion) == 0): continue # no se consideran ramos sin secciones

        # se crea diccionario de asignaturas
        codigoAsig = nodoAsig['to_asignatura_real']
        data['asignaturas'][codigoAsig] = {
            'nombre' : nodoAsig['to_asignatura_real__nombre'],
            'nodo_asignatura' : nodoAsig
        }

        # se agrega diccionario de secciones dentro del diccionario de asignaturas
        data['asignaturas'][codigoAsig]['secciones'] = {}
        for nodoSecc in list(nodosSeccion):
            # se obtienen todos los eventos de la seccion
            codigoSecc = nodoSecc['to_seccion']
            events = evento.objects.filter(
                to_seccion=codigoSecc
            ).values().distinct()
            if (len(events) == 0): continue # no se consideran secciones sin eventos

            # se crea diccionario de eventos dentro del diccionario de secciones
            data['asignaturas'][codigoAsig]['secciones'][codigoSecc] = {
                'nodo_seccion' : nodoSecc
            }
            parsedEvents = [] # se ajusta el formato de los eventos
            for event in list(events): 
                parsedEvents.append(getParsedEvent(event))
            data['asignaturas'][codigoAsig]['secciones'][codigoSecc]['eventos'] = parsedEvents

    return data

        
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