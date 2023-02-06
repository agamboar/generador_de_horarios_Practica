# generador_de_horarios_Practica

# Instrucciones de uso:

La aplicacion esta lista para correr sin modificaciones mayores, para ello necesitas:
1. Instalar las librerias requeridas usando el archivo 'requirements.txt' ubicado en la carpeta principal
   ```
   python -m pip install -r requirements.txt
   ```
NOTA: se necesita la version 3.9 de python (3.10.x y 3.11.x no sirven)

2. Crear una base de datos utilizando PostgreSQL con la aplicacion PGAdmin (la version no afecta)
   ```
      Para asegurar que la base de datos funcione correctamente hay un Archivo en la carpeta base de datos con un respaldo con las tablas y conecciones ya listas para importar a la base de datos, para ello se debe crear la base de datos en PGAdmin, luego se selecciona la base de datos y se "recupera" la base de datos utilizando el archivo en la carpeta
   ```
3. En aplicacion_web/tdr/tdr/ se encuentra settings.py, abre el archivo con un editor de tecto y busca "DATABASE" cambia el nombre y credenciales de acceso de esta seccion en base a la base de datos creada en el paso anterior.

4. Si es la primera vez que se corre la aplicacion se debe ubicar el archivo 'manage.py' ( esta deberia estar en aplicación_web/TdR/), y en esa carpeta ejecutar:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```
   Luego de correr esos 2 comandos no se requiere en los proximos arranques y para correr la aplicacion web se usa:
   ```
   python manage.py runserver
   ```

# Modificaciones al frontend o a algun archivo dentro de la carpeta "horarios"
Si se quiere modificar el frontend o algun archivo dentro de la carpta horarios, se debe "buildear" una version nueva por cada cambio que se realize, para ello debes seguir los siguientes pasos:

1. Requisitos previos
```
   npm install
```
Nota: hay errores y vulnerabilidades que apareceran al correr el comando ya que la aplicacion esta hecha con una version de npm antigua con librerias que estan obsoletas o modificadas, las soluciones que ofrece la consola puede causar errores por lo tanto se recomienda ignorar vulnerabilidades (Se recomienda actualizar eventualmente para mayor seguridad).

2. Entrar a la carpeta 'horarios' y correr:
   ```
   npm run build
   ```
   Mover la carpeta 'build' generada a la ubicacion: 'aplicación_web/TdR/'

3. Luego volver a ubicar manage.py y dentro de la carpeta contenedora de este archivo correr:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```
4. Luego, con todo lo anterior listo, cada vez que se quiera correr la aplicacion web, utilizar:

   ```
    python manage.py runserver
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

