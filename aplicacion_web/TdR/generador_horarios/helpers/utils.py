from ..models import seccion, evento, cfg_areas
from datetime import date
from contextlib import suppress

def getSemestreActual():
    today = date.today()
    if 1 <= today.month <= 6:
        return str(today.year)+'-1'
    else:
        return str(today.year)+'-2'

def clearOfertaCFG(): # para limpiar las tablas relacionadas a oferta de CFGs
    try:
        seccion.objects.filter(cod_seccion__contains='CFG').delete()
        evento.objects.filter(to_seccion__cod_seccion__contains='CFG').delete()
        cfg_areas.objects.all().delete()
    except ObjectDoesNotExist:
        print('error utils.clearOfertaCFG: ', e)

def clearOfertaMalla():
    from ..models import seccion, evento
    try:
        # hacer la sentencia SQL TRUNCATE generador_horarios_evento RESTART IDENTITY CASCADE; para resetear los ID
        seccionesCFG = seccion.objects.exclude(cod_seccion__contains='CFG').delete()
        evento.objects.exclude(to_seccion__cod_seccion__contains='CFG').delete()
    except Exception as e:
        print('error utils.clearOfertaMalla: ', e)