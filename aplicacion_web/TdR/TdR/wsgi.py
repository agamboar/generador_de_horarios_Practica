"""
WSGI config for TdR project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os, sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/usr/generador_de_horarios_Practica/aplicacion_web/TdR/TdR')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'TdR.settings')

os.environ.setdefault("LANG", "es_ES.UTF-8")
os.environ.setdefault("LC_ALL", "es_ES.UTF-8")

application = get_wsgi_application()
