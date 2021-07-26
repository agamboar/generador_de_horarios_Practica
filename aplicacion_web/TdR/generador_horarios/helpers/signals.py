from django.db.models.signals import post_save
from django.contrib.auth.models import User
#reciever
from django.dispatch import receiver
from ..models import alumno

# @receiver(post_save, sender=User)
# def create_alumno(sender, instance, created, **kwargs):
#     if created:
#         alumno.objects.create(to_user=instance)


# @receiver(post_save, sender=User)
# def save_alumno(sender, instance, **kwargs):
#     to_alumno = instance.alumno
#     if to_alumno:
#         to_alumno.save()
    

