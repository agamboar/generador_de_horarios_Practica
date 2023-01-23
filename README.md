# generador_de_horarios_Practica

# Instrucciones de uso:

1. Instalar NodeJS desde: https://nodejs.org/en/ (cualquier version sirve)
2. Primera vez ejecutar en la carpeta 'horarios':
```
   npm install
```
Nota: hay errores y vulnerabilidades que apareceran al correr el comando ya que la aplicacion esta hecha con una version de npm antigua con librerias que estan obsoletas o modificadas, las soluciones que ofrece la consola puede causar errores por lo tanto se recomienda ignorar bulnerabilidades (Se recomienda actualizar eventualmente para mayor seguridad).

3. En la carpeta 'horarios':
   ```
   npm run build
   ```
   Mover la carpeta 'build' generada a la ubicacion: 'aplicación_web/TdR/'

4. Instalar librerias requeridas, usando el archivo 'requirements.txt' ubicado en la carpeta principal:
   ```
   python -m pip install -r requirements.txt
   ```
   Nota: La version de python debe ser la 3.9

5. En aplicacion_web/tdr/tdr/ se encuentra settings.py, y ahi el objeto "DATABASES". Modificar las credenciales que debe tener la base (puedes cambiarlas o bien modificar las de la base para que sean iguales).

6. Ubicar el archivo 'manage.py' (aplicación_web/TdR/), y en esa carpeta ejecutar:
   ```
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```
7. Luego, con todo lo anterior listo, cada vez que se quiera correr la aplicacion web, utilizar:

   ```
   1. python manage.py runserver
   ```

   # Archivos
8. Para modificar la oferta academica de cfgs: aplicacion_web\TdR\generador_horarios\codigos_cfg\ dentro de esta carpeta, agregar carpeta correspondiente y modificar los nombres de acuerdo al codigo 'categorize_cfgs.py'.

# Base de datos

Para cambiar los valores de la coneccion a la base de datos, cambiar las credenciales en el archivo:

    \TdR\settings.py linea 97

# Modo Admin para actualizar Oferta Academica

Para darse permisos de administrador, se puede hacer de dos maneras:

1. Acceder a la base de datos, modificar la tabla auth_user de la forma:
```
   UPDATE auth_user SET is_staff = true WHERE id=(tuID);

   Donde tuID se obtiene de la misma tabla con:

   SELECT * FROM auth_user;
   ```
2. Que un usuario staff agregue al nuevo usuario.

# Actualizar Oferta Academica

Al tener permisos de staff, en el header ir a "Administrador>Subir Ofertas".

Para la oferta academica de Informatica, el archivo debe tener formato .xlsx, ademas de tener la columna 'Asignatura' en la columna M.

# Problemas conocidos:

1. No usar Python 3.10.x, ya que tiene problemas conocidos con algunas librerias como pandas o numpy 
2. No usar Python 3.11.x problemas de compatibilidad con librerias errores similares a los problemas con la version 3.10.x 

# Objetivos a futuro:

1. Hay muchas librerias obsoletas o desactualizadas, si se quiere usar la aplicacion de manera no local se recomienda actualizarlas para mayor seguridad
2. Mejorar la documentacion, hay muchas funciones de la aplicacion que no estan explicadas aun
