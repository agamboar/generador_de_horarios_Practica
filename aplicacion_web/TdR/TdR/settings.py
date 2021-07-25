"""
Django settings for TdR project.
Generated by 'django-admin startproject' using Django 3.1.3.
For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
from pathlib import Path
import os
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
#print(BASE_DIR)
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'na*2v($m74c(@ifhm&=x@g$+qnpent*5$6&$j46f6_otxfp6rw'
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'generador_horarios.apps.GeneradorHorariosConfig',
    'import_export',
    'rest_framework',
    'rest_framework.authtoken',
    'dj_rest_auth',
    'dj_rest_auth.registration',
    'django_extensions',
    'django.contrib.sites',
    'corsheaders',
    'allauth',
    'allauth.account',	
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
]
SITE_ID = 1

# cambiar despues por la URL para que alumno indique ramos aprobados
LOGIN_REDIRECT_URL = 'https://asistente-eit.udp.cl/users/usr'
ACCOUNT_LOGOUT_REDIRECT_URL = "https://asistente-eit.udp.cl/"


#SESSION_COOKIE_AGE = 10000 # preguntar 
FILE_UPLOAD_HANDLERS = ("django_excel.ExcelMemoryFileUploadHandler",
                        "django_excel.TemporaryExcelFileUploadHandler")
ALLOWED_HOSTS = ['127.0.0.1', 'localhost','200.14.84.238','asistente-eit.udp.cl','104.18.25.162:443']
CSRF_TRUSTED_ORIGINS = ['127.0.0.1', 'localhost', 'http://200.14.84.238:80/','104.18.25.162:443']
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
ROOT_URLCONF = 'TdR.urls'
LANGUAGE_COOKIE_HTTPONLY = True
SESSION_COOKIE_HTTPONLY = True
CSRF_COOKIE_HTTPONLY = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
#SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
ACCOUNT_EMAIL_VERIFICATION = 'none'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "build")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
STATICFILES_DIRS = [
  # Tell Django where to look for React's static files (css, js)
  os.path.join(BASE_DIR, "build/static"),
]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
WSGI_APPLICATION = 'TdR.wsgi.application'
# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'tdr',
        'USER': 'postgres',
        'PASSWORD': 'asistente.2021',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
AUTHENTICATION_BACKENDS = [
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',
    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
]
# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAdminUser'
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}
# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/
LANGUAGE_CODE = 'es-es'
TIME_ZONE = 'America/Santiago'
USE_I18N = True
USE_L10N = True
USE_TZ = True
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/
STATIC_URL = '/static/'
STATIC_ROOT = '/usr/generador_de_horarios_Practica/aplicacion_web/TdR/build/' #static
# super usuario admin: tdr
# password: tdr2021

DEFAULT_AUTO_FIELD='django.db.models.AutoField' # evita warnings: posibles migraciones no deseadas en upgrades de Django