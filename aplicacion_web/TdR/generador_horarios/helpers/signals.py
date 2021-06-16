from django.db.models.signals import post_save
from django.contrib.auth.models import User
#reciever
from django.dispatch import receiver
from ..models import alumno

@receiver(post_save, sender=User)
def create_alumno(sender, instance, created, **kwargs):
    print("create_alumno signal..")
    if created:
        try:
            alumno.objects.create(to_user=instance)
        except Exception as e:
            print("error signals.create_alumno(): ", e)

@receiver(post_save, sender=User)
def save_alumno(sender, instance, **kwargs):
    print("save_alumno signal..")
    to_alumno = instance.alumno
    if to_alumno:
        try:
            to_alumno.save()
        except Exception as e:
            print("error signals.save_alumno(): ", e)

