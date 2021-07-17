from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE


# COMPONENTE ESCUELA

class asignatura_real(models.Model):

    codigo = models.CharField(max_length=30, primary_key=True)
    nombre = models.CharField(max_length=50)
    creditos = models.IntegerField(null=False)
    nro_correlativo = models.CharField(max_length=30)
    semestre = models.CharField(max_length=30) # quizas debe ser parte de llave primaria
    tipo = models.IntegerField(default=0) # {0,1,2} => {ramo/cfg/electivo en malla, cfg en oferta, electivo en oferta}
    equivale = models.ManyToManyField('self', default=None, symmetrical=False)
    prerrequisito = models.ManyToManyField('self')
    importancia = models.IntegerField(default=3) #para distinguir entre ramo de malla, electivo o cfg (3,2,1 respectivamente)


class malla_curricular(models.Model):

    class Meta:
        unique_together = [['agno', 'carrera']]

    agno = models.IntegerField(null=False, primary_key=True)
    carrera = models.CharField(max_length=60)
    json_malla = models.JSONField(default=None)

    to_asignatura_real = models.ManyToManyField(asignatura_real)

    #relacion con User debe ser one to many, por lo que "to_user" se elimina de aqui y se agrega foreign key "to_malla" a tabla "alumno"



class oferta_malla(models.Model):

    semestre = models.CharField(max_length=12, primary_key=True)
    json_oferta = models.JSONField()

    to_malla_curricular = models.ForeignKey(
        to=malla_curricular,
        on_delete=models.DO_NOTHING
    )


class seccion(models.Model):

    class Meta:
        unique_together = [['cod_seccion', 'semestre']]

    cod_seccion = models.CharField(max_length=25, primary_key=True)
    semestre = models.CharField(max_length=10)
    num_seccion = models.CharField(max_length=20)
    vacantes = models.IntegerField(default=0)
    inscritos = models.IntegerField(default=0)
    vacantes_libres = models.IntegerField(default=0)

    to_asignatura_real = models.ManyToManyField(asignatura_real) # no puede ser foreign por los cfgs que son 4 ramos que comparten las mismas secciones

    # to_asignatura_real = models.ForeignKey(
    #     asignatura_real, 
    #     on_delete=models.CASCADE
    # ) #cambiado de manytomany a foreign


class evento(models.Model):

    tipo = models.CharField(max_length=40)
    dia = models.CharField(max_length=3)
    modulo = models.CharField(max_length=20)
    profesor = models.CharField(max_length=50)

    to_seccion = models.ForeignKey(
        to=seccion,
        on_delete=models.CASCADE
    )


# COMPONENTE ALUMNO

class alumno(models.Model):

    to_user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        primary_key=True
    )

    rut = models.CharField(max_length=11, unique=True)
    agno_ingreso = models.IntegerField(default=0)
    psu_matematicas = models.IntegerField(default=0)
    psu_lenguaje = models.IntegerField(default=0)
    psu_historia = models.IntegerField(default=0)
    psu_ciencias = models.IntegerField(default=0)
    nem = models.IntegerField(default=0)

    to_malla = models.ForeignKey(
        malla_curricular, 
        on_delete=models.CASCADE,
        null=True,
        default=None,
    )


class avance_academico(models.Model):

    class Meta:
        unique_together = [['semestre', 'to_user']]

    semestre = models.CharField(max_length=10)
    json_avance = models.JSONField(default=dict)
    fgd_count = models.IntegerField(default=0)
    cfg_count = models.IntegerField(default=0)
    einf_count = models.IntegerField(default=0)
    etele_count = models.IntegerField(default=0)
    agno_malla = models.IntegerField(default=0)

    to_user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE
    )


class asignatura_cursada(models.Model):

    codigo = models.CharField(max_length=25)
    nota = models.FloatField(default=0)
    estado = models.CharField(max_length=15)
    fecha_modificacion = models.DateTimeField(auto_now=True)

    to_User = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE
    )

    to_asignatura_real = models.ForeignKey(
        to=asignatura_real,
        on_delete=models.DO_NOTHING #quizas debiese ser CASCADE
    )

    to_avance_academico = models.ForeignKey(
        to=avance_academico,
        on_delete=models.CASCADE
    )


# COMPONENTE TOMA DE RAMOS

class nodo_asignatura(models.Model):

    holgura = models.IntegerField(default=0)
    ef = models.IntegerField(default=0) #early finish
    es = models.IntegerField(default=0) #early start
    ls = models.IntegerField(default=0) #late start
    lf = models.IntegerField(default=0) #late finish
    cc = models.CharField(max_length=3, default='0') # si es critico o no
    uu = models.CharField(max_length=3, default='0') # urgencia (10 - holgula)*
    kk = models.CharField(max_length=3, default='0') #preferencia del usuario 
    fecha_mod = models.DateTimeField(auto_now=True)
    critico = models.BooleanField(default=False)

    to_asignatura_real = models.ForeignKey(asignatura_real, on_delete=CASCADE) #cambiado de manytomany a foreign

    to_user = models.ForeignKey(User, on_delete=CASCADE) #cambiado de manytomany a foreign


class nodo_seccion(models.Model):

    ss = models.IntegerField(default=1) #preferencia de secciones (cantidad de secciones - indice + 1)
    fecha_mod = models.DateTimeField(auto_now=True)

    to_seccion = models.ForeignKey(seccion, on_delete=CASCADE) #cambiado de manytomany a foreign

    to_nodo_asignatura = models.ForeignKey(
        to=nodo_asignatura,
        on_delete=models.CASCADE,
    )


class solucion(models.Model):

    fecha_mod = models.DateTimeField(auto_now=True)
    json_solucion = models.JSONField(default=list)
    is_horario = models.BooleanField(default=False) # es para elegir un horario entre las soluciones, pero no se implemento.

    to_nodo_seccion = models.ManyToManyField(nodo_seccion) 

    to_user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
    )

# COMPONENTES EXTRA

class prioridad_cfg(models.Model): #cual es el campo del excel que se usa para representar el area?
    # to_user y area deben ser unique together (***)
    area = models.CharField(max_length=50) #nombre del area.
    prioridad = models.IntegerField(default=0)
    fecha_mod = models.DateTimeField(auto_now=True)
    #se tiene que hacer un delete cada vez que se cambie la prioridad
    #ver la forma del codigo de los cfg en asignatura real -> CFG1 ?

    to_user = models.ForeignKey(User, on_delete=CASCADE) #cambiado de manytomany a foreign key

class cfg_areas(models.Model):
    # codigo y area deben ser unique together (***)
    codigo = models.CharField(max_length=25,primary_key=True)
    area = models.CharField(max_length=50)