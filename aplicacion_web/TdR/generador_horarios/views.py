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
def ramo_list(request):
    asignatura = asignatura_real.objects.all()
    serializer = asignaturaSerializer(asignatura, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def box_list(request):
    boxes = box.objects.all()
    serializer = boxSerializer(boxes, many=True)

    return Response(serializer.data)
