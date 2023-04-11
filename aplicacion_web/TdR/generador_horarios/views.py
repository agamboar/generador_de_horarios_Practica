from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django import forms
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from django.db.models import IntegerField
from django.db.models.functions import Cast

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
import pytz

from .serializers import *
from .models import *
from .tasks import *
from .PERT import *
from .clique_algorithm.clique_actual import get_clique_max_pond

from .helpers import jsonLog as jl, utils, DBSeed, stateControl as stc
import traceback
# 'try: ... except ExceptionName: pass' == 'with suppress(ExceptionName): ...'
from contextlib import suppress
from django.core.exceptions import *
from generador_horarios.codigos_cfg.categorize_cfgs import get_area

import time
import logging

logging.basicConfig(filename='views_info.log', level=logging.INFO,
                    format='%(levelname)s:%(asctime)s:%(message)s')

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
        malla_curricular__agno=year
    )
    serializer = asignaturaSerializer(asignatura, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def secciones(request, cod):
    secc = seccion.objects.filter(to_asignatura_real=cod)

    serializer = seccionSerializer(secc, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@csrf_exempt
def import_malla(request):
    if request.method == "POST":
        try:
            excel_file = request.FILES["file"]
            has_vacantes = is_oferta_vacantes(excel_file)
            arr_secciones = read_secciones(excel_file)
            arr_eventos = read_eventos(excel_file)

            utils.clearOfertaMalla()
            added_sec = 0
            # for elem in arr_secciones:
            #     print('elem4', elem[4])
            #     try:
            #         a = asignatura_real.objects.get(codigo=elem[4])
            #     except Exception as exc:
            #         print('no existe asignatura: ', elem[4])
            # return JsonResponse()
            for elem in arr_secciones:
                # try:
                #     for i in range(0,19):
                #         print('item[',i,']: ', elem[i])
                # except Exception as exc:
                #     print('fallo en indice ', i)

                if has_vacantes:
                    # print('codigo: ', elem[6])
                    a = asignatura_real.objects.get(codigo=elem[6])
                    s = seccion(cod_seccion=elem[0], semestre=elem[1], num_seccion=elem[2],
                                vacantes=elem[3], inscritos=elem[4], vacantes_libres=elem[5])
                else:
                    # print('codigo: ', elem[4])
                    try:
                        a = asignatura_real.objects.get(codigo=elem[4])
                    except:
                        print(elem[4])
                        raise Exception("error")
                    if elem[0] == '':
                        elem[0] = 10
                    s = seccion(cod_seccion=elem[3], semestre=elem[1], num_seccion=elem[2],
                                vacantes=elem[0], inscritos=0, vacantes_libres=elem[0])
                s.save()
                s.to_asignatura_real.add(a)
                added_sec += 1

            for elem in arr_eventos:

                s = seccion.objects.get(cod_seccion=elem[4])
                e = evento(tipo=elem[0], dia=elem[1],
                           modulo=elem[2], profesor=elem[3], to_seccion=s)
                e.save()

            return JsonResponse({'cantidad': added_sec, 'description': "Oferta subida!"}, status=200)
        except Exception:
            traceback.print_exc()
            return JsonResponse({'cantidad': 0, 'description': "Error en import_malla: " + traceback.format_exc()}, status=500)


@csrf_exempt
def import_cfg(request):

    if request.method == "POST":
        try:
            excel_file = request.FILES["excel_file"]

            has_vacantes = is_oferta_cfg_vacantes(excel_file)

            (cfg_secciones, nombres) = read_seccion_cfg(excel_file, has_vacantes)

            # try:
            #     for i in range(0,20):
            #         print('elem[',i,']: ',cfg_secciones[0][i])
            # except:
            #     print('fallo ')

            # faltantes = []
            # for secc in cfg_secciones: # para revisar si estan todos los cfgs de la oferta en catalogo.
            #     codigo = secc[3][0:7]
            #     try:
            #         get_area(codigo)
            #         print('encontro codigo: ',codigo)
            #     except Exception as exc:
            #         print('fallo codigo', codigo)
            #         faltantes.append(codigo)
            # print('faltan ', len(faltantes), ' codigos: ', faltantes)
            # return 'n'

            cfg_eventos = read_evento_cfg(excel_file, has_vacantes)

            cfg1 = asignatura_real.objects.get(codigo='CFG1')
            cfg2 = asignatura_real.objects.get(codigo='CFG2')
            cfg3 = asignatura_real.objects.get(codigo='CFG3')
            cfg4 = asignatura_real.objects.get(codigo='CFG4')

            if has_vacantes:
                # con vacantes si ingresa cfgs por area, sin vac. es todo junto
                utils.clearCFGsArea(area=request.POST['area'])
            else:
                utils.clearOfertaCFG()

            added_cfg = 0
            for elem in cfg_secciones:
                if has_vacantes:
                    codigo_seccion = elem[0]
                else:
                    codigo_seccion = elem[3]
                codigo_ramo = codigo_seccion[0:7]

                if codigo_seccion[0:3] == 'CFG':
                    added_cfg += 1

                    if has_vacantes:
                        s1 = seccion.objects.create(
                            cod_seccion=codigo_seccion, semestre=elem[1], num_seccion=elem[2],
                            vacantes=elem[3], inscritos=elem[4], vacantes_libres=elem[5]
                        )
                    else:
                        s1 = seccion.objects.create(
                            cod_seccion=codigo_seccion, semestre=elem[1], num_seccion=elem[2],
                            vacantes=elem[0], inscritos=0, vacantes_libres=elem[0]
                        )
                        ramo = asignatura_real(
                            codigo=codigo_ramo,
                            nombre=nombres[codigo_ramo], creditos=5,
                            nro_correlativo='10-20-26-32-38-42', semestre='(2-4-5-6-7-8)',
                            tipo=1, importancia=1
                        )
                        ramo.save()
                        ramo.equivale.add(cfg1)
                        ramo.equivale.add(cfg2)
                        ramo.equivale.add(cfg3)
                        ramo.equivale.add(cfg4)

                    s1.to_asignatura_real.add(cfg1)
                    s1.to_asignatura_real.add(cfg2)
                    s1.to_asignatura_real.add(cfg3)
                    s1.to_asignatura_real.add(cfg4)

                    # cambiado de elem[0][6] a elem[0][7], para que incluya los 4 numeros del
                    if len(cfg_areas.objects.filter(codigo=codigo_ramo)) == 0:
                        if has_vacantes:
                            area = cfg_areas.objects.create(
                                codigo=codigo_ramo, area=request.POST['area'])
                            area.save()
                        else:
                            area = cfg_areas.objects.create(
                                codigo=codigo_ramo, area=get_area(codigo_ramo))

            for elem in cfg_eventos:

                if elem[4][0:3] == 'CFG':

                    s = seccion.objects.get(cod_seccion=elem[4])
                    e = evento(
                        tipo=elem[0], dia=elem[1], modulo=elem[2], profesor=elem[3], to_seccion=s)
                    e.save()

            return JsonResponse({'cantidad': added_cfg, 'description': "CFG subidos!"}, status=200)
        except Exception:
            traceback.print_exc()
            return JsonResponse({'cantidad': added_cfg, 'description': "Error en import_cfg: " + traceback.format_exc()}, status=500)


@csrf_exempt
def upload_mi_malla(request):

    if request.method == "POST":
        try:
            current_user = request.POST.getlist('id')[0]

            excel_file = request.FILES["file"]
            codigos = read_mi_malla(excel_file)
            user = User.objects.get(id=current_user)

            with suppress(ObjectDoesNotExist):
                asignatura_cursada.objects.filter(
                    to_User=current_user).delete()
                nodo_asignatura.objects.filter(to_user=current_user).delete()
                nodo_seccion.objects.filter(
                    to_nodo_asignatura__to_user=current_user).delete()
                solucion.objects.filter(to_user=current_user).delete()

            avance_academico_user = avance_academico.objects.get(
                to_user_id=current_user, semestre=getSemestreActual())
            avance_academico_user.json_avance = {}
            avance_academico_user.save()

            counters = {
                'semestre': utils.getSemestreActual(),
                'cfg_count': codigos[2],
                'einf_count': codigos[3],
                'etele_count': codigos[4],
                'to_user': user,
                'agno_malla': codigos[0]
            }

            av, created = avance_academico.objects.update_or_create(
                semestre=utils.getSemestreActual(), to_user=user,
                defaults=counters
            )

            semestre = utils.getSemestreActual()

            avance = avance_academico.objects.get(
                semestre=semestre, to_user=user)

            for elem in codigos[6:]:

                if elem[0] != '':
                    asignatura = asignatura_real.objects.get(codigo=elem[0])
                else:
                    continue
                a = asignatura_cursada(
                    codigo=elem[0], to_User=user, to_asignatura_real=asignatura, to_avance_academico=avance)
                a.save()

            return JsonResponse({'description': "Malla Subida."}, status=status.HTTP_201_CREATED)
        except Exception:
            traceback.print_exc()
            return JsonResponse({'description': "Error al subir malla."}, status=500)


@api_view(['GET'])
def get_PERT(request):
    if request.method == "GET":
        try:
            user_id = request.user.id
            start = time.time()
            ramos = calc_PERT(user_id)
            end = time.time()
            logging.info('PERT:{} segundos'.format(end-start))
            return Response(calc_PERT(user_id))
        except Exception:
            traceback.print_exc()
            return Response("Error al calcular PERT.", status=500)


ENABLED = False
TEST_CASE = {
    "fileName": 'case6',
    "title": 'probando restriccion prerrequisitos electivos de oferta en clique.'
}


def calc_PERT(user_id):
    # stateBefore = stc.getState_beforePERT(user_id)

    try:
        avance_academico_user = avance_academico.objects.get(
            to_user_id=user_id, semestre=utils.getSemestreActual())
        avance_academico_user_json = avance_academico_user.json_avance
        agno_malla = avance_academico.objects.get(
            to_user_id=user_id, semestre=utils.getSemestreActual()).agno_malla
        # agno_malla = alumno.objects.get(to_user_id=user_id).to_malla
    except avance_academico.DoesNotExist:
        new_dict = {}
        new_dict.update({"PERT": {}})
        new_dict["malla"] = "empty"

        return new_dict

    # el PERT se borra cuando se modifica el avance, solo se calcula el PERT si esta vacio.
    if avance_academico_user.json_avance == {}:
        codigos_asignaturas_cursadas = asignatura_cursada.objects.filter(
            to_User=user_id).values_list('codigo', flat=True)
        codigos_ramos_malla = asignatura_real.objects.filter(
            malla_curricular__agno=agno_malla, tipo=0).values_list('codigo', flat=True)

        nodo_asignatura.objects.filter(to_user=user_id).delete()

        get_ramos_PERT(codigos_asignaturas_cursadas,
                       codigos_ramos_malla, user_id)
        add_nodo_seccion(user_id)

        ramos_disponibles = nodo_asignatura.objects.filter(
            to_user__id=user_id, to_asignatura_real__tipo=0
        )
        serializer = nodoAsignaturaSerializer(ramos_disponibles, many=True)
        aux_pert = serializer.data
        # "guardo el json"
        avance_academico_user.json_avance = serializer.data
        avance_academico_user.save()
    else:
        # "uso el json"
        aux_pert = avance_academico_user.json_avance

    new_dict = {}
    new_dict.update({"PERT": aux_pert})
    new_dict["malla"] = agno_malla

    # if ENABLED: jl.createStateTestCase_PERT(
    #     TEST_CASE["fileName"],
    #     stateBefore, new_dict,
    #     TEST_CASE["title"]
    # )
    return new_dict


@api_view(['GET'])
def get_clique(request):
    if request.method == "GET":
        try:
            user_id = request.user.id
            start = time.time()
            solucion = calc_clique(user_id)
            end = time.time()
            logging.info('Clique:{} segundos'.format(end-start))
            return Response(solucion, status=status.HTTP_200_OK)
        except Exception:
            traceback.print_exc()
            return Response("Error en get_clique: " + traceback.format_exc(), status=500)


def calc_clique(current_user):
    # stateBefore = stc.getState_beforeClique(current_user)

    user = User.objects.get(id=current_user)
    existen_soluciones = False

    # un usuario tiene una solucion por horario recomendado
    sol = solucion.objects.filter(to_user=current_user)
    if sol:
        existen_soluciones = True

    if not existen_soluciones:  # las soluciones se borran cada vez que se modifica algun valor
        jsons = get_clique_max_pond(current_user)
        for recomendacion in jsons:
            counters = {'json_solucion': recomendacion,
                        'is_horario': False,
                        'to_user': user
                        }
            solucion_alumno = solucion(is_horario=False, to_user=user)
            if recomendacion != "n":
                solucion_alumno.json_solucion = recomendacion
                solucion_alumno.save()
            else:
                return 'n'
            # asociar los objetos nodo_seccion a el objeto solucion
            for elem2 in recomendacion:
                nodoSeccion = nodo_seccion.objects.filter(
                    to_seccion__cod_seccion=elem2['cod_seccion'], to_nodo_asignatura__to_user=current_user)[0]

                solucion_alumno.to_nodo_seccion.add(nodoSeccion)
        # 'guardo el json'
    else:
        # pasar variable "sol" a "jsons"
        jsons = []
        for elem in sol:
            jsons.append(elem.json_solucion)
        if jsons == []:
            jsons = "n"
        # 'uso el json' # esto no va aca

    # if ENABLED: jl.createStateTestCase_Clique(
    #     TEST_CASE["fileName"],
    #     stateBefore, jsons,
    #     TEST_CASE["title"]
    # )
    return jsons


@api_view(['POST'])
def asignar_kk(request):
    if request.method == "POST":

        current_user = request.user.id
        with suppress(solucion.DoesNotExist):
            solucion.objects.filter(to_user=current_user).delete()

        json_data = request.data

        for elem in json_data:

            for aux in elem:

                if aux[0] != None:
                    codigo_asignatura = (
                        aux[0]['to_asignatura_real']['codigo'])
                    id_ns = nodo_asignatura.objects.get(
                        to_asignatura_real__codigo=codigo_asignatura, to_user=current_user).id
                    peso_asignado = aux[1]

                    nodo = nodo_asignatura.objects.get(id=id_ns)

                    serializer = nodoAsignaturaPesoSerializer(
                        nodo, data={'kk': peso_asignado}, partial=True)

                    if serializer.is_valid():
                        serializer.save()

        return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)


@api_view(['POST'])  # esto se tiene q hacer
def asignar_ss(request):
    if request.method == "POST":
        current_user = request.user.id

        with suppress(solucion.DoesNotExist):
            solucion.objects.filter(to_user=current_user).delete()

        json_data = request.data
        cantidad_secciones = len(json_data)
        for index, aux in enumerate(json_data):

            nodo = nodo_seccion.objects.get(id=aux['id'])
            ss = 1+cantidad_secciones-index
            serializer = nodoSeccionSerializer(
                nodo, data={'ss': ss}, partial=True)

            if serializer.is_valid():  # esto funciona ?
                serializer.save()

        return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def mi_malla_manual(request):

    if request.method == "POST":
        current_user = request.user.id
        user = User.objects.get(id=current_user)

        json_data = request.data
        cfg_count = 0
        einf_count = 0
        etele_count = 0
        today = date.today()
        codigos_aprobados = []
        malla = json_data['malla']
        semestre = utils.getSemestreActual()

        for elem in json_data:

            if 'CFG' in elem and json_data[elem] == True:
                cfg_count += 1
            elif 'CIT33' in elem and json_data[elem] == True:
                einf_count += 1
            elif 'CIT34' in elem and json_data[elem] == True:
                etele_count += 1

            if json_data[elem] == True:
                count_pre_req = 0
                pre_req = asignatura_real.objects.get(
                    codigo=elem).prerrequisito.all().values_list('codigo', flat=True)

                for i in pre_req:
                    if json_data[i] == True:
                        count_pre_req += 1

                if count_pre_req == len(pre_req):
                    codigos_aprobados.append(elem)
                else:
                    return JsonResponse({
                        'error': 'Comprueba que los datos ingresados sean válidos.'
                    }, safe=True, status=status.HTTP_409_CONFLICT)

        stc.resetAvance(current_user, semestre)

        counters = {'semestre': semestre,
                    'cfg_count': cfg_count,
                    'einf_count': einf_count,
                    'etele_count': etele_count,
                    'to_user': user,
                    'agno_malla': malla
                    }

        av, created = avance_academico.objects.update_or_create(
            semestre=semestre, to_user=user,
            defaults=counters)

        avance = avance_academico.objects.get(
            semestre=semestre, to_user=user)

        for elem in codigos_aprobados:

            asignatura = asignatura_real.objects.get(codigo=elem)

            a = asignatura_cursada(
                codigo=elem, to_User=user, to_asignatura_real=asignatura, to_avance_academico=avance)
            a.save()

        avance_academico_user = avance_academico.objects.get(
            to_user_id=current_user, semestre=semestre)  # to_user_id no es unique por si solo en avance_academico (!)
        avance_academico_user.json_avance = {}
        avance_academico_user.save()

        return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_nodo_seccion(request):  # esto no se esta usando

    current_user = request.user

    json_array = []

    ns = nodo_seccion.objects.filter(to_nodo_asignatura__to_user=current_user)

    for elem in ns:
        json = {}

        codigo_asignatura = asignatura_real.objects.filter(
            nodo_asignatura__nodo_seccion__id=elem.id)[0].codigo
        nombre_asignatura = asignatura_real.objects.filter(
            nodo_asignatura__nodo_seccion__id=elem.id)[0].nombre

        if nombre_asignatura[0:3] == 'CFG':
            continue

        json['codigo'] = codigo_asignatura
        json['nombre'] = nombre_asignatura
        json['id'] = elem.id
        json['ss'] = elem.ss

        json_array.append(json)

    return JsonResponse(json_array, safe=False, status=status.HTTP_200_OK)


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})


@api_view(['GET'])
def is_staff(request):
    current_user = request.user
    aux_id = current_user.id
    aux_user = User.objects.get(id=aux_id)
    aux_staff = aux_user.is_staff
    aux_username = aux_user.username
    if aux_staff == True:
        aux_staff = "si"
    else:
        aux_staff = "no"

    return JsonResponse({'is_staff': aux_staff, 'id': aux_id, "username": aux_username})


# @api_view(['GET'])
def PERT_es1(request):

    if request.method == "GET":

        current_user = request.user.id
        ns = nodo_asignatura.objects.annotate(int_kk=Cast('kk', output_field=IntegerField(
        ))).filter(to_user=current_user, es=1).order_by('-int_kk')
        serializer = nodoAsignaturaSerializer(ns, many=True)

        if serializer.data == []:
            return JsonResponse("no", safe=False, status=status.HTTP_200_OK)
        else:
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)


@api_view(['GET'])
def list_users_not_staff(request):

    users = User.objects.filter(is_staff=False).values("username")

    return JsonResponse({'list_user': list(users)}, safe=False, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_asignaturas_cursadas(request):

    current_user = request.user.id
    asignaturas = asignatura_cursada.objects.filter(to_User_id=current_user)

    serializer = asignaturaCursadaSerializer(asignaturas, many=True)

    return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)


@api_view(['POST'])
def set_staff(request):
    if request.method == "POST":
        current_user = request.user.id

        if User.objects.get(id=current_user).is_staff:
            try:
                aux_new_staff = User.objects.get(username=request.data)
            except User.DoesNotExist:
                return JsonResponse({'noUser': 'Usuario ingresado no existe.'}, safe=False, status=status.HTTP_404_NOT_FOUND)
            if aux_new_staff.is_staff:
                return JsonResponse({'isStaff': 'El usuario ingresado ya es staff.'}, safe=False, status=status.HTTP_409_CONFLICT)
            else:
                aux_new_staff.is_staff = True
                aux_new_staff.save()
                return JsonResponse({'mensaje': 'Se ha modificado el usuario correctamente.'}, safe=False, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'unauthorized': 'No autorizado'}, safe=True, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def remove_staff(request):
    if request.method == "POST":
        current_user = request.user.id

        if User.objects.get(id=current_user).is_staff:
            try:
                aux_new_staff = User.objects.get(username=request.data)
            except User.DoesNotExist:
                return JsonResponse({'noUser': 'Usuario ingresado no existe.'}, safe=False, status=status.HTTP_404_NOT_FOUND)
            if not aux_new_staff.is_staff:
                return JsonResponse({'notStaff': 'Usuario ingresado no es staff.'}, safe=False, status=status.HTTP_409_CONFLICT)
            else:
                aux_new_staff.is_staff = False
                aux_new_staff.save()
            return JsonResponse({'mensaje': 'Se ha modificado el usuario correctamente.'}, safe=False, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'unauthorized': 'No autorizado'}, safe=True, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def delete_asignaturas_cursadas(request):

    current_user = request.user.id
    asignatura_cursada.objects.filter(to_User_id=current_user).delete()
    avance_academico.objects.filter(
        to_user_id=current_user).delete()  # o es un get ?
    nodo_asignatura.objects.filter(to_user=current_user).delete()
    nodo_asignatura.objects.filter(to_user=current_user).delete()
    solucion.objects.filter(to_user=current_user).delete()  # nose si esto va

    """
    #aca, ademas, se puede colocar el semestre actual como filtro
    semestre = []
    today = date.today()
        if 1 <= today.month <= 6:
            s = str(today.year)+'-1'
            semestre.append(s)
        elif 7 <= today.month <= 12:
            s = str(today.year)+'-2'
            semestre.append(s) 
    avance_academico.objects.get(to_user_id=current_user,semestre=semestre).delete()
    """

    return JsonResponse({"mensaje": "Se ha borrado el avance academico, junto con el año de la malla escogida previamente"}, safe=False, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_ramos_disponibles(request):
    if request.method == "GET":

        current_user = request.user.id

        aux_retornar = []
        ramos_disponibles = nodo_asignatura.objects.filter(to_user=current_user, es=1).values(
            "to_asignatura_real__codigo", "to_asignatura_real__nombre").distinct()
        #ramos_disponibles = nodo_seccion.objects.filter(to_nodo_asignatura__to_user=current_user,to_nodo_asignatura__es = 1).values("to_nodo_asignatura__to_asignatura_real__codigo","to_nodo_asignatura__to_asignatura_real__nombre").distinct('to_nodo_asignatura__to_asignatura_real__codigo')

        if len(ramos_disponibles) < 1:
            return JsonResponse("no", safe=False, status=status.HTTP_200_OK)

        for elem in ramos_disponibles:
            aux_retornar.append(
                {"codigo_ramo": elem["to_asignatura_real__codigo"], "nombre_ramo": elem["to_asignatura_real__nombre"]})

        return JsonResponse({"ramos_disponibles": aux_retornar}, safe=False, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_secciones_disponibles(request, codigo):

    if request.method == "GET":
        # cod_ramo = request.data #verificar como se mandara la info del ramo desde el front
        current_user = request.user.id
        secciones_disponibles = []

        secciones_disponibles = nodo_seccion.objects.filter(
            to_nodo_asignatura__to_user=current_user, to_nodo_asignatura__to_asignatura_real__codigo=codigo
        ).exclude(to_seccion__evento=None).values(
            'to_seccion__cod_seccion', 'to_seccion__num_seccion', 'to_seccion__vacantes_libres', 'to_seccion__evento__profesor',
            'to_seccion__evento__dia', 'to_seccion__evento__modulo', 'to_seccion__evento__tipo', 'id', 'ss'
        ).order_by('-ss').distinct()

        # print('secciones_disponibles: ', secciones_disponibles)
        # print('nodos seccion: ', nodo_seccion.objects.filter(to_nodo_asignatura__to_asignatura_real__codigo=codigo))
        # print('nodos asignatura: ', nodo_asignatura.objects.filter(to_asignatura_real__codigo=codigo).values() )

        if len(secciones_disponibles) == 0:
            return JsonResponse({"mensaje": "No existen secciones asociadas a ese codigo"}, safe=False, status=status.HTTP_204_NO_CONTENT)

        if codigo[0:3] == "CFG":
            try:
                prio_area_cfg = prioridad_cfg.objects.filter(
                    to_user=current_user).values('area').order_by('prioridad')
            except prioridad_cfg.DoesNotExist:
                prio_area_cfg = ["Ciencias Sociales", "Ciencia y Sociedad"]

        aux_retornar = []
        aux_horario = []
        # aux_codigo_sec = secciones_disponibles[0]['to_seccion__cod_seccion'] #agregar al final tambien
        prof = ""
        index = 0

        for i in range(0, len(secciones_disponibles)):
            elem = secciones_disponibles[i]
            cod_sec = elem['to_seccion__cod_seccion']

            try:
                nombre_ramo = asignatura_real.objects.get(
                    codigo=cod_sec[0:7]).nombre
            except Exception as e:
                print('--cod seccion:', cod_sec)
                raise e

            if cod_sec[0:3] == "CFG":
                current_cfg_area = cfg_areas.objects.get(
                    codigo=cod_sec[0:7]).area
                # se consideran los cfg de las primeras areas
                if current_cfg_area == prio_area_cfg[0]['area'] or current_cfg_area == prio_area_cfg[1]['area']:

                    pass
                else:
                    continue
            try:
                horario = (elem['to_seccion__evento__dia'] + ' ' +
                           elem['to_seccion__evento__modulo'] + ' | ')
            except Exception as exc:
                raise Exception(
                    "Seccion no tiene evento o evento no tiene horario asociado") from exc

            if elem['to_seccion__evento__tipo'][0] == 'C' or elem['to_seccion__evento__tipo'][0] == 'B':
                prof = elem['to_seccion__evento__profesor']

            cod_sec = elem['to_seccion__cod_seccion']
            numb_seccion = elem['to_seccion__num_seccion']
            vac_libres = elem['to_seccion__vacantes_libres']
            id_nodo_seccion = elem['id']
            ss_nodo_seccion = elem['ss']

            # if aux_codigo_sec == elem['to_seccion__cod_seccion']:
            if horario not in aux_horario:
                aux_horario.append(horario)

            if len(secciones_disponibles) > i+1:  # caso fin del arr
                # reviso si el sgte elemento es de una seccion diferente
                if cod_sec != secciones_disponibles[i+1]['to_seccion__cod_seccion']:
                    if str(numb_seccion) != "99" and vac_libres > 0:
                        aux_horario = sorted(aux_horario)
                        aux_retornar.append({'id': id_nodo_seccion, 'cod_seccion': cod_sec, 'numb_seccion': numb_seccion, 'profesor': prof,
                                             'vac_libres': vac_libres, 'horario': aux_horario, 'index': index, 'ss': ss_nodo_seccion, 'nombre_ramo': nombre_ramo})
                        index += 1
                        #aux_codigo_sec = elem['to_seccion__cod_seccion']
                    prof = ""
                    aux_horario = []

        # guardar la ultima info q se recolecto ya que el if de 660 no guarda la info si esta al final de la lista
        if str(numb_seccion) != "99" and vac_libres > 0:
            aux_retornar.append({'id': id_nodo_seccion, 'cod_seccion': cod_sec, 'numb_seccion': numb_seccion, 'profesor': prof,
                                 'vac_libres': vac_libres, 'horario': aux_horario, 'index': index,  'ss': ss_nodo_seccion, 'nombre_ramo': nombre_ramo})

        if len(aux_retornar) == 0:
            return JsonResponse({"mensaje": "No existen secciones asociadas a ese codigo"}, safe=False, status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({"secciones_disponibles": aux_retornar}, safe=False, status=status.HTTP_200_OK)


@api_view(['POST'])
def set_prio_areas_cfg(request):
    if request.method == "POST":
        current_user = request.user.id

        with suppress(ObjectDoesNotExist):
            prioridad_cfg.objects.filter(to_user=current_user).delete()
        with suppress(ObjectDoesNotExist):
            solucion.objects.filter(to_user=current_user).delete()

        json_data = request.data
        cantidad_areas = len(json_data)
        prio = 0
        count = 0
        for index, aux in enumerate(json_data):
            u = User.objects.get(id=current_user)
            area_cfg = prioridad_cfg(
                area=aux['area'], prioridad=index+1, to_user=u)
            area_cfg.save()

            serializer = prioridadCfgSerializer(
                area_cfg, data={'prioridad': index+1}, partial=True)

            if serializer.is_valid():  # esto funciona ?
                serializer.save()
                count += 1
        if count == cantidad_areas:
            return JsonResponse(json_data, safe=False, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({"mensaje": "error"}, safe=False, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_prio_cfg(request):

    if request.method == "GET":
        # cod_ramo = request.data #verificar como se mandara la info del ramo desde el front
        current_user = request.user.id
        prioridades_cfg = []

        with suppress(ObjectDoesNotExist):
            prioridades_cfg = prioridad_cfg.objects.filter(to_user=current_user).values(
                'area', 'prioridad').order_by('prioridad').distinct()

        if len(prioridades_cfg) == 0:
            return JsonResponse({"mensaje": "vacio"}, safe=False, status=status.HTTP_204_NO_CONTENT)
        aux_retornar = []

        for i in range(0, len(prioridades_cfg)):
            elem = prioridades_cfg[i]
            area = elem['area']
            prioridad = elem['prioridad']

            aux_retornar.append(
                {'area': area, 'prioridad': prioridad, 'index': i})

        if len(aux_retornar) == 0:
            return JsonResponse({"mensaje": "vacio"}, safe=False, status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({"prio_cfg": aux_retornar}, safe=False, status=status.HTTP_200_OK)
