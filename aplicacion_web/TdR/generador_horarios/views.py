from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django import forms

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import *
from .models import *
from .tasks import read_eventos, read_secciones, read_evento_cfg, read_seccion_cfg

# Create your views here.


class UploadFileForm(forms.Form):
    file = forms.FileField()


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Ramos': '/ramos/',
    }

    return Response(api_urls)


class asignaturaView(APIView):

    def get(self, request, pk):
        asignatura = get_object_or_404(asignatura_real, pk=pk)
        serializer = asignaturaSerializer(asignatura)
        return Response(serializer.data)


class mallaView(APIView):

    def get(self, request, year):

        asignatura = asignatura_real.objects.filter(
            malla_curricular__agno=year)
        serializer = asignaturaSerializer(asignatura, many=True)

        return Response(serializer.data)


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
