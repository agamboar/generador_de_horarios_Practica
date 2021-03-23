"""TdR URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from generador_horarios import views
from generador_horarios.views import GoogleLogin
from django.shortcuts import render

def render_react(request):
    return render(request, "index.html")

urlpatterns = [

    path('admin/', admin.site.urls),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('api/', views.api_overview),
    path('accounts/', include('allauth.urls')),
    path('ramos/<str:year>/', views.ramo_list, name='ramos'),
    path('upload/', views.import_malla, name='upload'),
    path('uploadcfg/', views.import_cfg, name='uploadcfg'),
    path('ramosaprobados/', views.upload_mi_malla, name='uploadmimalla'),
    path('PERT/', views.get_PERT, name='PERT'),
    path('kk/', views.asignar_kk, name='kk'),
    path('ss/', views.asignar_ss, name='ss'),
    path('clique/', views.get_clique, name='clique'),
    path('mimallamanual/', views.mi_malla_manual, name='manual'),
    path('csrf/', views.csrf),
    path('get_nodos/', views.get_nodo_seccion, name='get_ns'),
    path('is_staff/', views.is_staff),
    path('PERT_es1/', views.PERT_es1, name='get_es1'),
    path('list_users/', views.list_users_not_staff, name='list_users_not_staff'),
    path('asignaturasCursadas/', views.get_asignaturas_cursadas,
         name='asignaturas_cursadas'),
    path('set_staff/', views.set_staff),
    path('remove_staff/', views.remove_staff),
    path('delete_asignaturasCursadas/', views.delete_asignaturas_cursadas),
    #re_path(r"^$", render_react),
    #re_path(r"^(?:.*)/?$", render_react),
]
