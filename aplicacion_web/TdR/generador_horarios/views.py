from django.shortcuts import render
from django.http import JsonResponse, QueryDict
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User, Group
from django.shortcuts import get_object_or_404
from django.views import View
from rest_framework.views import APIView
from django.views.decorators.http import require_http_methods

from rest_framework.authtoken.models import Token
from rest_framework.decorators import permission_classes
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS


#from .tasks import start_scrapers #se puede llamar a otro archivo de py

from .models import Alumno, Horario
from .serializers import (
    UserSerializer,
    AlumnoSerializer,
    UserSerializer,
    HorarioSerializer,
)
# Create your views here.

""" @require_http_methods(["POST"])
@permission_classes((IsAuthenticated,))
def start_daemon(request):
    check,total=start_scrapers() #se llama a task
    if check ==0:
        return JsonResponse({
            'description': 'Finished ! :)'
        }, status=200)
    elif check >=1:
        return JsonResponse({
            'errors': check,
            'total_judges':  total
        }, status=503) """