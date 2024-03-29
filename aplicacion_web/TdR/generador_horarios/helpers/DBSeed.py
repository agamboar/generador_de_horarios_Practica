from json import load
from ..models import *
from . import jsonLog as jl
import logging
import traceback

# Funciones para guardar y cargar el seed de la base de datos como JSON, se guardan en io_log/Setup
# Se usan para seedear la test-database creada por Pytest
# Las funciones "saveTabla" necesitan que los archivos .csv en la carpeta "DB_data" ya se hayan cargado

def saveAllSeeds():
    saveAsignaturaReal()
    saveMallaCurricular()
    saveMallaAsignatura()
    saveEquivalencia()
    savePrerrequisito()

def saveAsignaturaReal():
    tablaAsignaturaReal = asignatura_real.objects.all().values()
    data = list(tablaAsignaturaReal)
    jl.writeJSONFile("Setup", "AsignaturasReales", data)

def saveMallaCurricular():
    mallaCurricular = malla_curricular.objects.all().values()
    data = list(mallaCurricular)
    jl.writeJSONFile("Setup", "MallasCurriculares", data)

def saveMallaAsignatura():
    mallaAsignatura = malla_curricular.to_asignatura_real.through.objects.all().values('malla_curricular_id', 'asignatura_real_id')
    data = list(mallaAsignatura)
    jl.writeJSONFile("Setup", "MallaAsignatura", data)

def saveEquivalencia():
    equivalencia = asignatura_real.equivale.through.objects.all().values('from_asignatura_real_id', 'to_asignatura_real_id')
    data = list(equivalencia)
    jl.writeJSONFile("Setup", "Equivalencias", data)

def savePrerrequisito():
    prerrequisito = asignatura_real.prerrequisito.through.objects.all().values('from_asignatura_real_id', 'to_asignatura_real_id')
    data = list(prerrequisito)
    jl.writeJSONFile("Setup", "Prerrequisitos", data)


# funciones de carga

def loadAllSeeds():
    loadAsignaturaReal()
    loadMallaCurricular()
    loadMallaAsignatura()
    loadEquivalencias()
    loadPrerrequisitos()

# seed tabla asignatura_real
def loadAsignaturaReal():
    asignaturasReales = jl.readJSONFile('Setup', 'AsignaturasReales')
    for AR in asignaturasReales:
        asignatura = asignatura_real(**AR)
        asignatura.save()

# seed tabla malla_curricular
def loadMallaCurricular():
    mallasCurriculares = jl.readJSONFile('Setup', 'MallasCurriculares')
    for MC in mallasCurriculares:
        malla = malla_curricular(**MC)
        malla.save()


# seed tabla malla_curricular_to_asignatura_real
def loadMallaAsignatura():
    mallaAsignatura = jl.readJSONFile('Setup', 'MallaAsignatura')
    for MA in mallaAsignatura:
        mallaAsig = malla_curricular.to_asignatura_real.through(**MA)
        mallaAsig.save()        

# seed tabla asignatura_real_equivale
def loadEquivalencias():
    equivalencias = jl.readJSONFile('Setup', 'Equivalencias')
    for EQ in equivalencias:
        equivalencia = asignatura_real.equivale.through(**EQ)
        equivalencia.save()

# seed tabla asignatura_real_prerrequisito
def loadPrerrequisitos():
    prerrequisitos = jl.readJSONFile('Setup', 'Prerrequisitos')
    for PR in prerrequisitos:
        prerrequisito = asignatura_real.prerrequisito.through(**PR)
        prerrequisito.save()

