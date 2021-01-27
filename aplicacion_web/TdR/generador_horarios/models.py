from django.db import models


class MallaCurricular(models.Model):

    agno = models.IntegerField()
    carrera = models.CharField(max_length=40)


class Box(models.Model):
    nroCorrelativo = models.IntegerField(primary_key=True)
    semestre = models.CharField(max_length=8)
    # Indica una relacion many-to-many (box puede estar en varias mallas curr, una malla curricular tiene multiples boxes)
    mallacurricular = models.ManyToManyField(MallaCurricular)


class Asignatura(models.Model):
    codigo = models.CharField(max_length=9, primary_key=True)
    nombre = models.CharField(max_length=40)
    creditos = models.IntegerField()
    prerrequsitos = models.CharField(max_length=30)
    box = models.ManyToManyField(Box)
    equivalencias = models.CharField(max_length=20)


class Seccion(models.Model):

    class Meta:
        unique_together = [['codigoSeccion', 'semestre']]

    codigoSeccion = models.CharField(max_length=25, primary_key=True)
    semestre = models.CharField(max_length=8)
    asignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)


class Evento(models.Model):
    tipo = models.CharField(max_length=10)
    dia = models.CharField(max_length=3)
    modulo = models.CharField(max_length=15)
    profesor = models.CharField(max_length=30)
    seccion = models.ForeignKey(Seccion, on_delete=models.CASCADE)


# Componentes de datos del alumno

class Alumno(models.Model):
    rut = models.CharField(max_length=11, primary_key=True)
    nombre = models.CharField(max_length=15)
    apellido = models.CharField(max_length=15)
    mail = models.CharField(max_length=40)
    psuPonderado = models.IntegerField()
    NEM = models.IntegerField()
    mallacurricular = models.ForeignKey(
        MallaCurricular, on_delete=models.DO_NOTHING)


class AsignaturaCursada(Seccion):

    nota = models.FloatField()
    estado = models.CharField(max_length=15)
    fechaModificacion = models.DateTimeField(auto_now=True)
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)


class Horario(models.Model):

    semestre = models.CharField(max_length=8, primary_key=True)
    # esto indica una relación one-to-many (un alumno puede tener varios horarios guardados)
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)

# componentes para la toma de ramos


class NodoAsignatura(models.Model):

    holgura = models.IntegerField()
    EF = models.IntegerField()
    ES = models.IntegerField()
    LS = models.IntegerField()
    LF = models.IntegerField()
    CC = models.IntegerField()
    UU = models.IntegerField()
    KK = models.IntegerField()

    box = models.ManyToManyField(Box)


class NodoSeccion(Seccion):

    ss = models.IntegerField()
    nodoasignatura = models.ForeignKey(
        NodoAsignatura, on_delete=models.CASCADE)


# solucion pueden ser varias. La escogida por el usuario se transforma en un horario, y se relaciona con la clase horario.
class Solucion(models.Model):

    # esto indica una relacione one-to-one. Una solucion contiene un horario, y un horario solo puede formar parte de una solucion.
    horario = models.OneToOneField(
        Horario,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    nodoseccion = models.ManyToManyField(NodoSeccion)
