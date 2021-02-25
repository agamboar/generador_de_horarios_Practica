# Generated by Django 3.1.5 on 2021-02-21 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('generador_horarios', '0003_auto_20210221_1745'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='nodo_asignatura',
            name='to_asignatura_real',
        ),
        migrations.AddField(
            model_name='nodo_asignatura',
            name='to_asignatura_real',
            field=models.ManyToManyField(to='generador_horarios.asignatura_real'),
        ),
    ]