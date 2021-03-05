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
from django.urls import path, include
from generador_horarios import views
from generador_horarios.views import GoogleLogin


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
]
