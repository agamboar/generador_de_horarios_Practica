# Generated by Django 3.1.5 on 2021-02-21 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('generador_horarios', '0002_auto_20210221_1627'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alumno',
            name='agno_malla',
        ),
        migrations.AddField(
            model_name='avance_academico',
            name='agno_malla',
            field=models.IntegerField(default=0),
        ),
    ]
