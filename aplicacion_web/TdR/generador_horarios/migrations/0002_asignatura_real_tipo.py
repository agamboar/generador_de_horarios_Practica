# Generated by Django 3.1.5 on 2021-02-18 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('generador_horarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='asignatura_real',
            name='tipo',
            field=models.IntegerField(default=0),
        ),
    ]