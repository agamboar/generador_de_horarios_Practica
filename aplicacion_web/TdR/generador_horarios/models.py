from django.db import models


# COMPONENTE ESCUELA

class asignatura_real(models.Model):

    codigo = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=30)
    creditos = models.IntegerField(null=False)
    equivale = models.ManyToManyField('self')
    abre = models.ManyToManyField('self')
    prerrequisito = models.ManyToManyField('self')


class box(models.Model):

    num_correlativo = models.IntegerField()
    semestre = models.CharField(max_length=10)

    to_asignatura_real = models.ForeignKey(
        to=asignatura_real,
        on_delete=models.DO_NOTHING
    )


class malla_curricular(models.Model):

    class Meta:
        unique_together = [['agno', 'carrera']]

    agno = models.IntegerField(null=False)
    carrera = models.CharField(max_length=60)
    json_malla = models.JSONField()

    to_box = models.ForeignKey(
        to=box,
        on_delete=models.CASCADE
    )


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

    cod_seccion = models.CharField(max_length=25)
    semestre = models.CharField(max_length=10)
    num_seccion = models.IntegerField()

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

    to_box = models.ForeignKey(
        to=box,
        on_delete=models.DO_NOTHING
    )

    to_avance_academico = models.ForeignKey(
        to=avance_academico,
        on_delete=models.DO_NOTHING
    )


class horario(models.Model):

    semestre = models.CharField(max_length=8, primary_key=True)

    # esto indica una relación one-to-many (un alumno puede tener varios horarios de antiguos semestres guardados)

    to_alumno = models.ForeignKey(
        to=alumno,
        on_delete=models.CASCADE)


# COMPONENTE TOMA DE RAMOS

class nodo_asignatura(models.Model):

    holgura = models.IntegerField()
    ef = models.IntegerField()
    es = models.IntegerField()
    ls = models.IntegerField()
    lf = models.IntegerField()
    fecha_mod = models.DateTimeField(auto_now=True)

    to_asignatura_real = models.ManyToManyField(asignatura_real)

    to_alumno = models.ManyToManyField(alumno)

    to_box = models.ForeignKey(
        to=box,
        on_delete=models.CASCADE)


class ramo_por_tomar(models.Model):

    cc = models.IntegerField()
    uu = models.IntegerField()
    kk = models.IntegerField()

    to_nodo_asignatura = models.OneToOneField(
        nodo_asignatura,
        on_delete=models.CASCADE
    )

    to_asignatura_real = models.OneToOneField(
        asignatura_real,
        on_delete=models.CASCADE
    )


class nodo_seccion(models.Model):

    ss = models.IntegerField()
    fecha_mod = models.DateTimeField(auto_now=True)

    to_ramo_por_tomar = models.ForeignKey(
        to=ramo_por_tomar,
        on_delete=models.CASCADE)

    to_seccion = models.ManyToManyField(seccion)


class solucion(models.Model):

    fecha_mod = models.DateTimeField()

    # esto indica una relacione one-to-one. Una solucion contiene un horario, y un horario solo puede formar parte de una solucion.

    to_horario = models.OneToOneField(
        horario,
        on_delete=models.CASCADE

    )
    to_nodo_seccion = models.ManyToManyField(nodo_seccion)
