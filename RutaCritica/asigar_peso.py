from .models import *

def put_pesos(ramos_disponibles,json,current_user):
    for i in ramos_disponibles:
        try :
           aux_kk=  json[i]["KK"] #  if not un random
        except :
            #consulta a la base para obtener el numero correlativo del ramo i
            aux_kk = randomint(1,54)
        nodo_asignatura=nodo_asignatura.objects.get(to_asignatura_real="i",to_user=current_user)
        nodo_asignatura.kk=aux_kk
        nodo_asignatura.save()

        #consulta a la base para obtener la base
        #alfa = seccion.objects.filter(to_asignatura_real=i).values_list('cod_seccion', flat =True)
        for j in alfa
            try:
                json[i]["SS"] = save en la base # un random 
            except :
                #consulta a la base para obtener el numero de la seccion j del ramo i
                save en la base a i ss = randomint(1,35)
 
 
 #esto para el clique
        nodo_asignatura.objects.filter(to_user__id=2, to_asignatura_real=codigo).cc
        nodo_asignatura.objects.filter(to_user__id=2, to_asignatura_real=codigo).UU

        #alfa = seccion.objects.filter(to_asignatura_real='CIT2104')[0].cod_seccion
        for j in alfa:
            nodo_seccion.objects.get(to_seccioncod_seccion=j, to_nodo_asignaturato_user=current_user).ss
        [{"codigo":"CIT2070","kk":"20"},{"codigo":"CIT2000","kk":"88"},{"codigo":"CIT2005","kk":"55"},{"codigo":"CIT1001","kk":"90"}