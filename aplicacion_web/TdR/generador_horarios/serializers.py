from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import serializers
#from rest_framework.authtoken.models import Token

from .models import Alumno, Horario

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email', 'password']
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        #Token.objects.create(user=user)
        return user

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = ['rut','nombre', 'apellido','mail','psuPonderado','NEM']

class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = ['semestre','alumno']

""" class ProblemSerializer(serializers.ModelSerializer):
    tests = TestCaseSerializer(many=True) #esta asociado a la tabla testcase
    categories = CategorySerializer(many=True)
    class Meta:
        model = Problem
        fields = [
            'pk',
            'title',
            'content',
            'difficulty',
            'tests',
            'categories'
        ]
    
    def create(self, validated_data):
        tests = validated_data.pop('tests')
        categories = validated_data.pop('categories')
        problem = Problem.objects.create(**validated_data)
        for test in tests:
            TestCase.objects.create(problem=problem, **test)
        for category in categories:
            cat, created = Category.objects.get_or_create(**category)
            if created:
                cat.save()
            problem.categories.add(cat)
        return problem """