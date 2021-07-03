from ..models import *
from datetime import date
from contextlib import suppress
from django.core.exceptions import *
import json

def getSemestreActual():
    today = date.today()
    if 1 <= today.month <= 6:
        return str(today.year)+'-1'
    else:
        return str(today.year)+'-2'

def clearOfertaCFG(): # para limpiar las tablas relacionadas a oferta de CFGs
    with suppress(ObjectDoesNotExist):
        seccion.objects.filter(cod_seccion__contains='CFG').delete()
        evento.objects.filter(to_seccion__cod_seccion__contains='CFG').delete()
        cfg_areas.objects.all().delete()

def clearOfertaMalla():
    with suppress(ObjectDoesNotExist):
        seccion.objects.exclude(cod_seccion__contains='CFG').delete()
        evento.objects.exclude(to_seccion__cod_seccion__contains='CFG').delete()  

def ordered(obj): # ordena recursivamente objeto con diccionarios como elementos. (para comparar jsons)
    if isinstance(obj, dict):
        return sorted((k, ordered(v)) for k, v in obj.items())
    if isinstance(obj, list):
        return sorted(ordered(x) for x in obj)
    else:
        return obj

def prettyPrint(obj):
    try:
        print(json.dumps(obj, indent=2))
        return True
    except (TypeError, OverflowError):
        return False


