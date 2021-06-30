import logging

from django.core.exceptions import ObjectDoesNotExist
from ..models import *
from . import utils
from contextlib import suppress

# --- PERT ---
def getState_beforePERT(userId):
    semestreActual = utils.getSemestreActual() # en /views/mi_malla_manual el semestre se guarda como una lista de strings con 1 string
    state = dict()
    state["user_id"] = userId
    state["tabla_avance"] = list(avance_academico.objects.filter(to_user__id=userId, semestre=semestreActual).values())[0]
    state["asignaturas_cursadas"] = list(asignatura_cursada.objects.filter(to_User__id=userId).values())
    return state

def setState_beforePERT(state):
    userId = state["user_id"]
    tablaAvance = state["tabla_avance"]
    semestre = tablaAvance["semestre"]

    resetAvance(userId, semestre)
    tabla = avance_academico(**tablaAvance)
    tabla.save()
    for asigCursada in state["asignaturas_cursadas"]: asignatura_cursada(**asigCursada).save()

def resetAvance(userId, semestre):
    with suppress(ObjectDoesNotExist):
        avance_academico.objects.filter(to_user=userId, semestre=semestre).delete()
        asignatura_cursada.objects.filter(to_User=userId).delete()
        nodo_asignatura.objects.filter(to_user=userId).delete()
        nodo_seccion.objects.filter(
            to_nodo_asignatura__to_user=userId).delete()
        solucion.objects.filter(to_user=userId).delete()

# --- Clique --- 
def getState_beforeClique(userId):
    state = dict()
    state["user_id"] = userId

    nodosAsignatura = list(nodo_asignatura.objects.filter(to_user__id=userId).values())
    state["nodos_asignatura"] = nodosAsignatura

    nodosSeccion = list(nodo_seccion.objects.filter(to_nodo_asignatura_id__to_user__id=userId).values().order_by('to_seccion'))
    state["nodos_seccion"] = nodosSeccion

    prioridadCFG = list(prioridad_cfg.objects.filter(to_user=userId).values())
    state["prioridades_cfg"] = prioridadCFG

    return state

def setState_beforeClique(state):
    resetState_beforeClique(state["user_id"])

    for nodoAsignatura in state["nodos_asignatura"]: nodo_asignatura(**nodoAsignatura).save()
    for nodoSeccion in state["nodos_seccion"]: nodo_seccion(**nodoSeccion).save()
    for prioridadCFG in state["prioridades_cfg"]: prioridad_cfg(**prioridadCFG).save()
          

def resetState_beforeClique(userId):
    with suppress(ObjectDoesNotExist):
        solucion.objects.filter(to_user=userId).delete()
        nodo_asignatura.objects.filter(to_user=userId).delete()
        nodo_seccion.objects.filter(to_nodo_asignatura__to_user=userId).delete()
        prioridad_cfg.objects.filter(to_user=userId)