# serialization es transformar data en un formato que se
# puede almacenar facilmente, y despues reconstruir el formato original.
# Puede trabajar con JSON, YAML, y XML, pero puedes crear tu propio formato
# En este caso, se trabajará con JSON y REST, ya que es un framework que
# posee los mejores serializers.

from rest_framework import serializers
from .models import *


class asignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = asignatura_real
        fields = '__all__'


class boxSerializer(serializers.ModelSerializer):
    class Meta:
        model = box
        fields = '__all__'
