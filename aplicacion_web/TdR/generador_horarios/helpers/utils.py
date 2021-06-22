from ..models import seccion, evento, cfg_areas
from datetime import date
from contextlib import suppress
from django.core.exceptions import *

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