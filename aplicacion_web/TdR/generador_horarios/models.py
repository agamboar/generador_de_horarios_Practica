from django.db import models
from django.contrib.auth.models import User


# COMPONENTE ESCUELA

class asignatura_real(models.Model):

    codigo = models.CharField(max_length=30, primary_key=True)
    nombre = models.CharField(max_length=50)
    creditos = models.IntegerField(null=False)
    nro_correlativo = models.CharField(max_length=30)
    semestre = models.CharField(max_length=30)
    tipo = models.IntegerField(default=0)
    equivale = models.ManyToManyField('self', default=None)
    prerrequisito = models.ManyToManyField('self')


class malla_curricular(models.Model):

    class Meta:
        unique_together = [['agno', 'carrera']]

    agno = models.IntegerField(null=False, primary_key=True)
    carrera = models.CharField(max_length=60)
    json_malla = models.JSONField(default=None)

    to_asignatura_real = models.ManyToManyField(asignatura_real)

    to_user = models.ManyToManyField(User)


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

    to_asignatura_real = models.ForeignKey(
        to=asignatura_real,
        on_delete=models.CASCADE)


class evento(models.Model):

    tipo = models.CharField(max_length=40)
    dia = models.CharField(max_length=3)
    modulo = models.CharField(max_length=20)
    profesor = models.CharField(max_length=50)

    to_seccion = models.ForeignKey(
        to=seccion,
        on_delete=models.CASCADE)


# COMPONENTE ALUMNO

class alumno(models.Model):

    rut = models.CharField(max_length=11, primary_key=True)
    agno_ingreso = models.IntegerField(default=0)
    psu_matematicas = models.IntegerField(default=0)
    psu_lenguaje = models.IntegerField(default=0)
    psu_historia = models.IntegerField(default=0)
    psu_ciencias = models.IntegerField(default=0)
    nem = models.IntegerField(default=0)
    agno_malla = models.IntegerField(default=0)

    to_user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE

    )


class avance_academico(models.Model):

    semestre = models.CharField(max_length=10, primary_key=True)
    json_avance = models.JSONField(default=dict)
    fgd_count = models.IntegerField(default=0)
    cfg_count = models.IntegerField(default=0)
    einf_count = models.IntegerField(default=0)
    etele_count = models.IntegerField(default=0)

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
        on_delete=models.DO_NOTHING
    )

    to_avance_academico = models.ForeignKey(
        to=avance_academico,
        on_delete=models.CASCADE
    )


class horario(models.Model):

    semestre = models.CharField(max_length=8, primary_key=True)

    # esto indica una relación one-to-many (un alumno puede tener varios horarios de antiguos semestres guardados)

    to_user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE)


# COMPONENTE TOMA DE RAMOS

class nodo_asignatura(models.Model):

    holgura = models.IntegerField(default=0)
    ef = models.IntegerField(default=0)
    es = models.IntegerField(default=0)
    ls = models.IntegerField(default=0)
    lf = models.IntegerField(default=0)
    cc = models.CharField(max_length=3, default='0')
    uu = models.CharField(max_length=3, default='0')
    kk = models.CharField(max_length=3, default='0')
    fecha_mod = models.DateTimeField(auto_now=True)
    critico = models.BooleanField(default=False)

    to_asignatura_real = models.OneToOneField(
        to=asignatura_real,
        on_delete=models.CASCADE
    )

    to_user = models.ManyToManyField(User)


class nodo_seccion(models.Model):

    ss = models.CharField(max_length=3)
    fecha_mod = models.DateTimeField(auto_now=True)

    to_seccion = models.ManyToManyField(seccion)

    to_nodo_asignatura = models.ForeignKey(
        to=nodo_asignatura,
        on_delete=models.CASCADE,
        default=1
    )


class solucion(models.Model):

    fecha_mod = models.DateTimeField()

    # esto indica una relacione one-to-one. Una solucion contiene un horario, y un horario solo puede formar parte de una solucion.

    to_horario = models.OneToOneField(
        to=horario,
        on_delete=models.CASCADE

    )
    to_nodo_seccion = models.ManyToManyField(nodo_seccion)
