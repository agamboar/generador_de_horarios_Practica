from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
# Create your views here.


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Ramos': '/ramos/',
    }

    return Response(api_urls)


@api_view(['GET'])
def ramo_list(request, year):

    asignatura = asignatura_real.objects.filter(
        malla_curricular__agno=year)
    serializer = asignaturaSerializer(asignatura, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def secciones(request, cod):

    secc = seccion.objects.filter(
        to_asignatura_real=cod
    )

    serializer = seccionSerializer(secc, many=True)

    return Response(serializer.data)
