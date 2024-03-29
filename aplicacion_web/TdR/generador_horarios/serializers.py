# serialization es transformar data en un formato que se
# puede almacenar facilmente, y despues reconstruir el formato original.
# Puede trabajar con JSON, YAML, y XML, pero puedes crear tu propio formato
# En este caso, se trabajará con JSON y REST, ya que es un framework que
# posee los mejores serializers.

from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model


class asignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = asignatura_real
        fields = '__all__'


class asignaturaSerializer_nombre(serializers.ModelSerializer):
    class Meta:
        model = asignatura_real
        fields = ['nombre', 'codigo']


class mallaSerializer(serializers.ModelSerializer):
    class Meta:
        model = malla_curricular
        fields = ['agno', 'carrera']


class seccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = seccion
        fields = ['cod_seccion', 'semestre', 'num_seccion', 'vacantes',
                  'inscritos', 'vacantes_libres', 'to_asignatura_real_id']


class eventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = evento
        fields = ['tipo', 'dia', 'modulo', 'profesor', 'to_seccion_id']


class nodoAsignaturaSerializer(serializers.ModelSerializer):

    to_asignatura_real = asignaturaSerializer_nombre(many=False)

    class Meta:
        model = nodo_asignatura
        #nombre = generador_horarios.asignatura_real.objects.get(codigo='to_asignatura_real').nombre
        fields = ['holgura', 'ef', 'es', 'ls', 'kk',
                  'lf', 'critico', 'to_asignatura_real']


class nodoAsignaturaPesoSerializer(serializers.ModelSerializer):

    class Meta:
        model = nodo_asignatura
        fields = ['id', 'kk']


class nodoSeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = nodo_seccion
        fields = '__all__'


class asignaturaCursadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = asignatura_cursada
        fields = ['codigo']

class prioridadCfgSerializer(serializers.ModelSerializer):
    class Meta:
        model = prioridad_cfg
        fields = '__all__'
