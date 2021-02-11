from django.db import models


# COMPONENTE ESCUELA


# ¿es necesaria la clase box? solo complica las consultas desde views. Quizas es mejor incluir el numero
# correlativo y el semestre dentro de asignatura_real, para facilitar las querys.
# Se puede agregar un atributo de a que malla corresponde la asignatura, para que de esta manera
# se muestre la asignatura que corresponde a la malla del alumno, pero aun asi, se le indica que
# esa asignatura puede equivaler a otras asignaturas, de las otras mallas.

# class box(models.Model):

#    num_correlativo = models.IntegerField(default=0, primary_key=True)
#   semestre = models.CharField(max_length=15)


class asignatura_real(models.Model):

    codigo = models.CharField(max_length=30, primary_key=True)
    nombre = models.CharField(max_length=50)
    creditos = models.IntegerField(null=False)
    nro_correlativo = models.CharField(max_length=20)
    semestre = models.CharField(max_length=10)
    equivale = models.ManyToManyField('self', default=None)
    prerrequisito = models.ManyToManyField('self')


class malla_curricular(models.Model):

    class Meta:
        unique_together = [['agno', 'carrera']]

    agno = models.IntegerField(null=False, primary_key=True)
    carrera = models.CharField(max_length=60)
    json_malla = models.JSONField(default=None)

    to_asignatura_real = models.ManyToManyField(asignatura_real)


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
    num_seccion = models.IntegerField(default=0)

    to_asignatura_real = models.ForeignKey(
        to=asignatura_real,
        on_delete=models.CASCADE)


class evento(models.Model):

    tipo = models.CharField(max_length=15)
    dia = models.CharField(max_length=3)
    modulo = models.CharField(max_length=20)
    profesor = models.CharField(max_length=50)

    to_seccion = models.ForeignKey(
        to=seccion,
        on_delete=models.CASCADE)


# COMPONENTE ALUMNO

class alumno(models.Model):

    rut = models.CharField(max_length=11, primary_key=True)
    password = models.CharField(max_length=12, default=None)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    correo = models.CharField(max_length=50)
    token = models.CharField(max_length=30, default=None)
    psu_matematicas = models.IntegerField(default=0)
    psu_lenguaje = models.IntegerField(default=0)
    psu_historia = models.IntegerField(default=0)
    psu_ciencias = models.IntegerField(default=0)
    nem = models.IntegerField(default=0)


class avance_academico(models.Model):

    semestre = models.CharField(max_length=10, primary_key=True)
    json_avance = models.JSONField()
    fgd_count = models.IntegerField(default=0)
    cfg_count = models.IntegerField(default=0)
    einf_count = models.IntegerField(default=0)
    etele_count = models.IntegerField(default=0)

    to_alumno = models.ForeignKey(
        to=alumno,
        on_delete=models.CASCADE
    )


class asignatura_cursada(models.Model):

    codigo = models.CharField(max_length=25)
    nota = models.FloatField()
    estado = models.CharField(max_length=15)
    fecha_modificacion = models.DateTimeField(auto_now=True)

    to_alumno = models.ForeignKey(
        to=alumno,
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

    to_alumno = models.ForeignKey(
        to=alumno,
        on_delete=models.CASCADE)


# COMPONENTE TOMA DE RAMOS

class nodo_asignatura(models.Model):

    holgura = models.IntegerField(default=0)
    ef = models.IntegerField(default=0)
    es = models.IntegerField(default=0)
    ls = models.IntegerField(default=0)
    lf = models.IntegerField(default=0)
    fecha_mod = models.DateTimeField(auto_now=True)

    to_asignatura_real = models.OneToOneField(
        to=asignatura_real,
        on_delete=models.CASCADE
    )

    to_alumno = models.ManyToManyField(alumno)


class ramo_por_tomar(models.Model):

    cc = models.IntegerField(default=0)
    uu = models.IntegerField(default=0)
    kk = models.IntegerField(default=0)

    to_nodo_asignatura = models.OneToOneField(
        nodo_asignatura,
        on_delete=models.CASCADE
    )

    to_asignatura_real = models.OneToOneField(
        asignatura_real,
        on_delete=models.CASCADE
    )


class nodo_seccion(models.Model):

    ss = models.IntegerField(default=0)
    fecha_mod = models.DateTimeField(auto_now=True)

    to_ramo_por_tomar = models.ForeignKey(
        to=ramo_por_tomar,
        on_delete=models.CASCADE)

    to_seccion = models.ManyToManyField(seccion)


class solucion(models.Model):

    fecha_mod = models.DateTimeField()

    # esto indica una relacione one-to-one. Una solucion contiene un horario, y un horario solo puede formar parte de una solucion.

    to_horario = models.OneToOneField(
        to=horario,
        on_delete=models.CASCADE

    )
    to_nodo_seccion = models.ManyToManyField(nodo_seccion)
