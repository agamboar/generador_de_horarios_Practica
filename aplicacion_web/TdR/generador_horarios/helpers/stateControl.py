import logging
from ..models import *
from . import utils

def getState_beforePERT(userId):
    semestreActual = [utils.getSemestreActual()] # en /views/mi_malla_manual el semestre se guarda como una lista de strings con 1 string
    state = dict()
    state["user_id"] = userId
    state["tabla_avance"] = list(avance_academico.objects.filter(to_user__id=userId, semestre=semestreActual).values())[0]
    state["asignaturas_cursadas"] = list(asignatura_cursada.objects.filter(to_User__id=userId).values())
    return state

def setState_beforePERT(state):
    TA = state["tabla_avance"]
    tablaAvance = avance_academico(**TA)
    tablaAvance.save()
    for AC in state["asignaturas_cursadas"]:
        asigCursada = asignatura_cursada(**AC)
        asigCursada.save()


def getState_beforeClique(userId):
    state = dict()
    state["user_id"] = userId

    nodosAsignatura = list(nodo_asignatura.objects.filter(to_user__id=userId).values())
    state["nodos_asignatura"] = nodosAsignatura

    nodosSeccion = list(nodo_seccion.objects.filter(to_nodo_asignatura_id__to_user__id=userId).values().order_by('to_seccion'))
    state["nodos_seccion"] = nodosSeccion

    return state

def setState_beforeClique(state):
    for NA in state["nodos_asignatura"]:
        nodoAsignatura = nodo_asignatura(**NA)
        nodoAsignatura.save()
    for NS in state["nodos_seccion"]:
        nodoSeccion = nodo_seccion(**NS)
        nodoSeccion.save()            
