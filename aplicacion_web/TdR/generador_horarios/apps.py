from django.apps import AppConfig

#Ejecutar runserver con "SEEDING = True" solo un vez para cargar datos iniciales (en caso de resetear db), luego cambiar a False.
SEEDING = True  

def seed_data():
    print("\n\nCargar datos Iniciales? (y/n)\n\n")
    r = input()
    if r != "y": return

    #import aqui porque no se pueden importar modulos antes de que ejecute "django.setup()".
    from .helpers import DBSeed as dbs, jsonLog as jl 

    dbs.loadAllSeeds()

    print("\n\nCargar también Oferta Academica? (y/n)\n\n")
    r = input()
    if r == "y":
        print("Cargando Oferta Academica..")
        jl.loadOferta()

class GeneradorHorariosConfig(AppConfig):
    name = 'generador_horarios'

    def ready(self):
        if SEEDING: seed_data()          
