from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django import forms

from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .models import *
from .tasks import *

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
    current_user = request.user
    print(current_user.id)

    return Response(serializer.data)


@api_view(['GET'])
def secciones(request, cod):

    secc = seccion.objects.filter(
        to_asignatura_real=cod
    )

    serializer = seccionSerializer(secc, many=True)

    return Response(serializer.data)


def import_malla(request):
    if request.method == "POST":

        excel_file = request.FILES["excel_file"]
        arr_secciones = read_secciones(excel_file)
        arr_eventos = read_eventos(excel_file)
        try:
            seccion.objects.exclude(cod_seccion__contains='CFG').delete()
            evento.objects.exclude(to_seccion__contains='CFG').delete()
        except:
            pass

        for elem in arr_secciones:

            a = asignatura_real.objects.get(codigo=elem[6])
            s = seccion(cod_seccion=elem[0], semestre=elem[1], num_seccion=elem[2],
                        vacantes=elem[3], inscritos=elem[4], vacantes_libres=elem[5], to_asignatura_real=a)
            s.save()
        for elem in arr_eventos:
            s = seccion.objects.get(cod_seccion=elem[4])
            e = evento(tipo=elem[0], dia=elem[1],
                       modulo=elem[2], profesor=elem[3], to_seccion=s)
            e.save()

    return render(request, 'upload.html')


def import_cfg(request):

    if request.method == "POST":

        excel_file = request.FILES["excel_file"]
        cfg_secciones = read_seccion_cfg(excel_file)
        cfg_eventos = read_evento_cfg(excel_file)
        try:
            seccion.objects.filter(cod_seccion__contains='CFG').delete()
            evento.objects.filter(to_seccion__contains='CFG').delete()
        except:
            pass
        for elem in cfg_secciones:
            a = asignatura_real.objects.get(codigo=elem[6])
            s = seccion(cod_seccion=elem[0], semestre=elem[1], num_seccion=elem[2],
                        vacantes=elem[3], inscritos=elem[4], vacantes_libres=elem[5], to_asignatura_real=a)
            s.save()

        for elem in cfg_eventos:
            s = seccion.objects.get(cod_seccion=elem[4])
            e = evento(tipo=elem[0], dia=elem[1],
                       modulo=elem[2], profesor=elem[3], to_seccion=s)
            e.save()

    return render(request, 'upload.html')


def upload_mi_malla(request):

    if request.method == "POST":

        current_user = request.user
        excel_file = request.FILES["excel_file"]
        codigos = read_mi_malla(excel_file)
        user = User.objects.get(id=current_user.id)

        try:
            asignatura_cursada.objects.all().delete()

        except:
            pass

        if avance_academico.objects.count == 0:

            av = avance_academico.objects.create(
                semestre=codigos[1], to_user=user)
            av.save()
            semestre = codigos[1]
        else:
            semestre = codigos[1]

        avance = avance_academico.objects.get(semestre=semestre)

        for elem in codigos[3:]:

            asignatura = asignatura_real.objects.get(codigo=elem[0])

            a = asignatura_cursada(
                codigo=elem[0], to_User=user, to_asignatura_real=asignatura, to_avance_academico=avance)
            a.save()

    return render(request, 'upload.html')
