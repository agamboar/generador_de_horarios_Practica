from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django import forms
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from dj_rest_auth.registration.views import SocialLoginView

from django.http import JsonResponse
from django.middleware.csrf import get_token

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

import json
from datetime import date
import datetime

from .serializers import *
from .models import *
from .tasks import *
from .PERT import *
from .clique import *

# Create your views here.


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


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

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def secciones(request, cod):

    secc = seccion.objects.filter(
        to_asignatura_real=cod
    )

    serializer = seccionSerializer(secc, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@csrf_exempt
def import_malla(request):
    if request.method == "POST":

        print("fileeee", type(request.FILES["file"]))
        excel_file = request.FILES["file"]

        arr_secciones = read_secciones(excel_file)
        arr_eventos = read_eventos(excel_file)

        try:
            # hacer la sentencia SQL TRUNCATE generador_horarios_evento RESTART IDENTITY CASCADE; para resetear los ID
            seccion.objects.exclude(cod_seccion__contains='CFG').delete()
            evento.objects.exclude(to_seccion__contains='CFG').delete()
        except:
            pass

        for elem in arr_secciones:
            try:
                a = asignatura_real.objects.get(codigo=elem[6])

                s = seccion(cod_seccion=elem[0], semestre=elem[1], num_seccion=elem[2],
                            vacantes=elem[3], inscritos=elem[4], vacantes_libres=elem[5])
                s.save()
                s.to_asignatura_real.add(a)
            except:
                continue

        for elem in arr_eventos:
            try:
                s = seccion.objects.get(cod_seccion=elem[4])
                e = evento(tipo=elem[0], dia=elem[1],
                           modulo=elem[2], profesor=elem[3], to_seccion=s)
                e.save()
            except:
                continue

    return JsonResponse({'description': "Oferta subida!"}, status=200)


@csrf_exempt
def import_cfg(request):

    if request.method == "POST":
        print(request.FILES)
        excel_file = request.FILES["excel_file"]
        cfg_secciones = read_seccion_cfg(excel_file)
        cfg_eventos = read_evento_cfg(excel_file)
        cfg1 = asignatura_real.objects.get(codigo='CFG1')
        cfg2 = asignatura_real.objects.get(codigo='CFG2')
        cfg3 = asignatura_real.objects.get(codigo='CFG3')
        cfg4 = asignatura_real.objects.get(codigo='CFG4')

        try:
            seccion.objects.filter(cod_seccion__contains='CFG').delete()
            evento.objects.filter(to_seccion__contains='CFG').delete()
        except:
            pass

        for elem in cfg_secciones:

            s1 = seccion.objects.create(cod_seccion=elem[0], semestre=elem[1], num_seccion=elem[2],
                                        vacantes=elem[3], inscritos=elem[4], vacantes_libres=elem[5])

            s1.to_asignatura_real.add(cfg1)
            s1.to_asignatura_real.add(cfg2)
            s1.to_asignatura_real.add(cfg3)
            s1.to_asignatura_real.add(cfg4)

        for elem in cfg_eventos:
            s = seccion.objects.get(cod_seccion=elem[4])
            e = evento(tipo=elem[0], dia=elem[1],
                       modulo=elem[2], profesor=elem[3], to_seccion=s)
            e.save()

    return JsonResponse({'description': "CFG subidos!"}, status=200)


@csrf_exempt
def upload_mi_malla(request):

    if request.method == "POST":

        current_user = request.user
        excel_file = request.FILES["file"]
        codigos = read_mi_malla(excel_file)
        user = User.objects.get(id=current_user.id)

        try:
            asignatura_cursada.objects.filter(to_User=user).delete()
        except:
            pass

        counters = {'semestre': codigos[1],
                    'cfg_count': codigos[2],
                    'einf_count': codigos[3],
                    'etele_count': codigos[4],
                    'to_user': current_user,
                    'agno_malla': codigos[0]
                    }

        av, created = avance_academico.objects.update_or_create(
            semestre=codigos[1], to_user=current_user,
            defaults=counters)

        semestre = codigos[1]

        avance = avance_academico.objects.get(semestre=semestre, to_user=user)

        for elem in codigos[6:]:

            if elem[0] != '':
                asignatura = asignatura_real.objects.get(codigo=elem[0])
            else:
                continue
            a = asignatura_cursada(
                codigo=elem[0], to_User=user, to_asignatura_real=asignatura, to_avance_academico=avance)
            a.save()

    return JsonResponse({'description': "Malla Subida."}, status=200)


@api_view(['GET'])
def get_PERT(request):

    if request.method == "GET":

        current_user = request.user.id
        avance_academico_user = avance_academico.objects.get(
            to_user_id=current_user)
        avance_academico_user_json = avance_academico_user.json_avance
        año_malla = avance_academico.objects.get(
            to_user=current_user).agno_malla

        # falta colocar una condicion -> si se cambio recientemente los ramos aprobados
        if avance_academico_user.json_avance == {}:
            codigos_asignaturas_cursadas = asignatura_cursada.objects.filter(
                to_User_id__id=current_user).values_list('codigo', flat=True)

            codigos_ramos_malla = asignatura_real.objects.filter(
                malla_curricular__agno=año_malla, tipo=0).values_list('codigo', flat=True)

            nodo_asignatura.objects.filter(to_user=current_user).delete()

            getRamoCritico(codigos_asignaturas_cursadas,
                           codigos_ramos_malla, current_user)

            get_secciones_disponibles(current_user)

            ramos_disponibles = nodo_asignatura.objects.filter(
                to_user__id=current_user, to_asignatura_real__tipo=0)

            serializer = nodoAsignaturaSerializer(ramos_disponibles, many=True)
            aux_pert = serializer.data
            print("guardo el json")
            avance_academico_user.json_avance = serializer.data
            avance_academico_user.save()
        else:
            print("uso el json")
            aux_pert = avance_academico_user.json_avance

        new_dict = {}
        new_dict.update({"PERT": aux_pert})
        new_dict["malla"] = año_malla
        print(new_dict)
        return Response(new_dict)


@api_view(['GET'])
def get_clique(request):

    if request.method == "GET":

        current_user = request.user.id
        user = User.objects.get(id=current_user)

        # ojo cada vez q se suba la oferta academica se deben borrar todas las soluciones
        # guardadas de los usuarios, pero NO la tabla horario, esa no se toca hasta que el pibe
        # guarda otra solucion
        no_existen_soluciones = True

        try:
            sol = solucion.objects.filter(to_user=current_user)
            if sol == []:
                no_existen_soluciones = False
        except:
            pass

        current_timestamp = datetime.datetime.now()
        diff = current_timestamp-sol[0].fecha_mod
        segundos = diff.seconds

        if no_existen_soluciones:

            jsons = get_clique_max_pond(current_user)
            for elem in jsons:

                counters = {'json_solucion': elem,
                            'is_horario': False,
                            'to_user': user
                            }
                solucion_alumno = solucion(is_horario=False, to_user=user)
                solucion_alumno.json_solucion = elem
                solucion_alumno.save()

                for elem2 in elem:

                    nodoSeccion = nodo_seccion.objects.filter(
                        to_seccion__cod_seccion=elem2['cod_seccion'], to_nodo_asignatura__to_user=current_user)[0]

                    solucion_alumno.to_nodo_seccion.add(nodoSeccion)

            print('guardo el json')
        elif 90 < segundos < 3600:

            jsons = get_clique_max_pond(current_user)
            counter = 0
            for elem in jsons:
                sol[counter].json_solucion = elem
                sol[counter].save()
                counter += 1
                print('pasaron más de 90 segundos')
        else:
            aux = 1
            jsons = {}
            for elem in sol:
                jsons['Solucion'+aux] = elem.json_solucion
                aux += 1
            print('uso el json', jsons)
        # print(jsons)
        # for elem, index in jsons:
        # no entiendo como guardar se guardan las soluciones yo los guardaria en un json y era como el pert
        # aca falta guardar las soluciones a la tabla soluciones xd
        # y guardar el horario que el alumno escoja
        return Response(jsons, status=status.HTTP_200_OK)


@api_view(['POST'])
def asignar_kk(request):
    if request.method == "POST":

        json_data = request.data

        for aux in json_data:

            nodo = nodo_asignatura.objects.get(id=aux['id'])

            serializer = nodoAsignaturaSerializer(
                nodo, data={'kk': aux['kk']}, partial=True)

            if serializer.is_valid():
                serializer.save()

        return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def asignar_ss(request):
    if request.method == "POST":

        json_data = request.data

        for aux in json_data:

            nodo = nodo_seccion.objects.get(id=aux['id'])

            serializer = nodoSeccionSerializer(
                nodo, data={'ss': aux['ss']}, partial=True)

            if serializer.is_valid():
                serializer.save()

        return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def mi_malla_manual(request):

    if request.method == "POST":

        current_user = request.user
        user = User.objects.get(id=current_user.id)

        json_data = request.data
        cfg_count = 0
        einf_count = 0
        etele_count = 0
        today = date.today()
        codigos_aprobados = []
        malla = json_data['malla']
        semestre = []

        if 1 <= today.month <= 6:
            s = str(today.year)+'-1'
            semestre.append(s)
        elif 7 <= today.month <= 12:
            s = str(today.year)+'-2'
            semestre.append(s)

        for elem in json_data:

            if 'CFG' in elem and json_data[elem] == True:
                cfg_count += 1
            elif 'CIT33' in elem and json_data[elem] == True:
                einf_count += 1
            elif 'CIT34' in elem and json_data[elem] == True:
                etele_count += 1

            if json_data[elem] == True:
                codigos_aprobados.append(elem)

        try:
            asignatura_cursada.objects.filter(to_User=user).delete()
        except:
            pass

        counters = {'semestre': semestre,
                    'cfg_count': cfg_count,
                    'einf_count': einf_count,
                    'etele_count': etele_count,
                    'to_user': current_user,
                    'agno_malla': malla
                    }

        av, created = avance_academico.objects.update_or_create(
            semestre=semestre, to_user=current_user,
            defaults=counters)

        avance = avance_academico.objects.get(
            semestre=semestre, to_user=user)

        for elem in codigos_aprobados:

            asignatura = asignatura_real.objects.get(codigo=elem)

            a = asignatura_cursada(
                codigo=elem, to_User=user, to_asignatura_real=asignatura, to_avance_academico=avance)
            a.save()

        avance_academico_user = avance_academico.objects.get(
            to_user_id=current_user)
        avance_academico_user.json_avance = {}
        avance_academico_user.save()

        return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_nodo_seccion(request):

    current_user = request.user

    json = {}

    ns = nodo_seccion.objects.filter(to_nodo_asignatura__to_user=current_user)

    for elem in ns:
        json['id'] = elem.id
        json['ss'] = elem.ss
        json['codigo'] = asignatura_real.objects.filter(
            nodo_asignatura__nodo_seccion__id=elem.id)[0].codigo
        json['nombre'] = asignatura_real.objects.filter(
            nodo_asignatura__nodo_seccion__id=elem.id)[0].nombre

    return JsonResponse(json, safe=False, status=status.HTTP_200_OK)


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})
