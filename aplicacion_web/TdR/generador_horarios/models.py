from django.db import models


class MallaCurricular(models.Model):

    agno = models.IntegerField()
    carrera = models.CharField(max_length=40)


class Box(models.Model):
    nro_correlativo = models.IntegerField(primary_key=True)
    semestre = models.CharField(max_length=8)
    # Indica una relacion many-to-many (box puede estar en varias mallas curr, una malla curricular tiene multiples boxes)
    mallacurricular = models.ManyToManyField(MallaCurricular)


class Asignatura(models.Model):
    codigo = models.CharField(max_length=9, primary_key=True)
    nombre = models.CharField(max_length=40)
    creditos = models.IntegerField()
    prerrequsitos = models.CharField(max_length=30)
    equivalencias = models.CharField(max_length=20)

    box = models.ManyToManyField(Box)


class Seccion(models.Model):

    # class Meta:
    #    unique_together = [['codigoSeccion', 'semestre']]

    codigo_seccion = models.CharField(max_length=25, primary_key=True)
    semestre = models.CharField(max_length=8)
    asignatura = models.ForeignKey(
        to=Asignatura,
        on_delete=models.CASCADE)


class Evento(models.Model):
    tipo = models.CharField(max_length=10)
    dia = models.CharField(max_length=3)
    modulo = models.CharField(max_length=15)
    profesor = models.CharField(max_length=30)
    seccion = models.ForeignKey(
        to=Seccion,
        on_delete=models.CASCADE)


# Componentes de datos del alumno

class Alumno(models.Model):
    rut = models.CharField(max_length=11, primary_key=True)
    nombre = models.CharField(max_length=15)
    apellido = models.CharField(max_length=15)
    mail = models.CharField(max_length=40)
    psu_ponderado = models.IntegerField()
    nem = models.IntegerField()
    mallacurricular = models.ForeignKey(
        to=MallaCurricular,
        on_delete=models.DO_NOTHING)


class AsignaturaCursada(Seccion):

    nota = models.FloatField()
    estado = models.CharField(max_length=15)
    fecha_modificacion = models.DateTimeField(auto_now=True)
    alumno = models.ForeignKey(
        to=Alumno,
        on_delete=models.CASCADE)


class Horario(models.Model):

    semestre = models.CharField(max_length=8, primary_key=True)
    # esto indica una relación one-to-many (un alumno puede tener varios horarios guardados)
    alumno = models.ForeignKey(
        to=Alumno,
        on_delete=models.CASCADE)

# componentes para la toma de ramos


class NodoAsignatura(models.Model):

    holgura = models.IntegerField()
    ef = models.IntegerField()
    es = models.IntegerField()
    ls = models.IntegerField()
    lf = models.IntegerField()
    cc = models.IntegerField()
    uu = models.IntegerField()
    kk = models.IntegerField()

    box = models.ForeignKey(
        to=Box,
        on_delete=models.CASCADE, default=None)


class NodoSeccion(Seccion):

    ss = models.IntegerField()
    nodo_asignatura = models.ForeignKey(
        to=NodoAsignatura,
        on_delete=models.CASCADE)


# solucion pueden ser varias. La escogida por el usuario se transforma en un horario, y se relaciona con la clase horario.
class Solucion(models.Model):

    # esto indica una relacione one-to-one. Una solucion contiene un horario, y un horario solo puede formar parte de una solucion.
    horario = models.OneToOneField(
        Horario,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    nodo_seccion = models.ManyToManyField(NodoSeccion)
