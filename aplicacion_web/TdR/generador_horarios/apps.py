from django.apps import AppConfig
from contextlib import suppress

#Ejecutar runserver con "SETUP_SEED = True" solo un vez para cargar datos iniciales (en caso de resetear db), luego cambiar a False.
SETUP_SEED = False 

SETUP_OFERTA = False

def setupSeed():
    print("\n\nCargar datos Iniciales? (y/n)\n")
    r = input()
    if r != "y": return

    #import aqui porque no se pueden importar modulos antes de que ejecute "django.setup()".
    from .helpers import DBSeed as dbs

    print("\nCargando datos iniciales..\n")
    dbs.loadAllSeeds()
    print("\nDatos Iniciales cargados.\n")

def setupOferta():
    print("\n\nCargar Oferta Academica? (y/n)\n")
    r = input()
    if r != "y": return

    from .helpers import jsonLog as jl
    print("\nCargando Oferta Academica..\n")

    print('Ingrese nombre de archivo json en /io_log/Setup/ (no incluir .json)')
    fileName = input()
    ok = False
    while not ok:
        try:
            jl.loadOferta(fileName)
            ok = True
        except OSError:
            print("Intente otro archivo: ")
            fileName = input()

    print("\nOferta Academica cargada.\n")

class GeneradorHorariosConfig(AppConfig):
    name = 'generador_horarios'

    def ready(self):
        from .helpers import signals

        if SETUP_SEED: setupSeed()
        if SETUP_OFERTA: setupOferta() 
