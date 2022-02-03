# Como actualizar oferta academica para un nuevo semestre

## Oferta informatica

- Descargar excel con ultima oferta academica de informatica
- Obtener pdf "prerrequisitos y equivalencias"

Primero probar en rama local

1.  Revisar que el excel tenga el formato correcto. La primera columna "Asignatura" debe comenzar en la columna "M" del excel, si no lo esta, modificar el excel para que quede de esta forma.  
2. Iniciar servidor local "python manage.py runserver"
3. En el navegador, ingresar al menu "Administrador", luego "Hacer Staff". Si no aparece el menu, es porque el usuario no es administrador, ver archivo "hacer_usuario_administrador.txt" de esta carpeta para hacer la cuenta admin.
4. En el panel "Ingreso de Oferta Informatica" intentar ingresar la nueva oferta. Aqui dara error en caso de que la oferta incluya ramos nuevos, esto va a pasar por lo general con electivos. El servidor debiese imprimir por consola el codigo del ramo.
5. Revisar el Excel de Oferta Academica por la informacion de los ramos que dan error. En caso de que no sea un ramo con secciones "verdaderas" (por ejemplo titulaciones, practicas) borrar sus filas del excel.

Para cada ramo valido que de error, se deben agregar entradas a las tablas (archivos .csv) que se encuentran en la carpeta "DB_data/": 
- asignaturaReal.csv
- equivale.csv 
- prerrequisito.csv"
- equivale.csv

### LLenar tabla asignaturas (asignaturaReal.csv)

Cada linea en esta tabla tiene la forma

    codigo;nombre;creditos;nro_correlativo;semestre;tipo;importancia

Por ejemplo, las entrada de electivos se ven asi

    CIT3332;ANALISIS DE DATOS GEOGRAFICOS;6;43-44-47-48-49-52;(9-10);2;2
    CIT3337;ASEGURAMIENTO DE CALIDAD;6;43-44-47-48-49-52;(9-10);2;2
    CIT3317;BASES DE DATOS DE GRAN VOLUMEN;6;43-44-47-48-49-52;(9-10);2;2

Las unicas entradas que cambian para ramos del mismo tipo (en este caso electivos) son el codigo y el nombre, por lo que para agregar los electivos nuevos se ingresan, al final del archivo las entradas asi (los nombres deben omitir tildes)

    <codigo de electivo>;<nombre de electivo>;6;43-44-47-48-49-52;(9-10);2;2

Para actualizar la base de datos con las nuevas entradas, guardar el archivo y ejecutar

    python manage.py runscript load_asignaturas

### Equivalencias y Prerrequisitos para ramos de malla 

Para estas tablas hay que revisar el pdf con equivalencias y prerrequisitos (revisar en esta carpeta), luego: CTLR+F y buscar los codigos de los ramos nuevos, revisar si son equivalentes a otro ramo, y si tienen ramos prerrequisitos.

Las entradas en las tablas prerrequisito.csv tienen la forma

    <codigo ramo>;<codigo ramo prerrequisito>

y en equivale.csv 

    <codigo ramo>;<codigo ramo equivalente>

### Equivalencias y Prerrequisitos para ramos electivos

En el caso de los ramos electivos nuevos siempre hay que agregar un conjunto de entradas en especifico, que depende de si es un electivo de informatica o telematica. Para los electivos de informatica se debe agregar lo siguiente en la tabla "equivale.csv"

    <codigo ramo>;CIT3310
    <codigo ramo>;CIT3311
    <codigo ramo>;CIT3312
    <codigo ramo>;CIT3313
    <codigo ramo>;CITOPTINF1
    <codigo ramo>;CITOPTINF2
    <codigo ramo>;CITOPTINF3

y para los de telematica lo siguiente

    <codigo ramo>;CIT3410
    <codigo ramo>;CIT3411
    <codigo ramo>;CIT3412
    <codigo ramo>;CIT3413
    <codigo ramo>;CITOPTEL1
    <codigo ramo>;CITOPTEL2
    <codigo ramo>;CITOPTEL3

Para los prerrquisitos el proceso es el mismo que para ramos normales pero hay que tener en cuenta que no apareceran en el pdf a no ser que este este actualizado a la fecha, en esta caso habria que conseguir el pdf actualizado o bien preguntar a la escuela por esta informacion. De todas formas si faltan prerrequisitos una vez hecha la actualización de oferta, es trivial agregarlos despues.


### Relacion Malla Asignatura

La tabla en mallaAsignatura.csv tiene la forma

    <año malla>;<codigo ramo>

Se debe agregar una entrada para cada malla a cual pertenece la asignatura. En el caso de los electivos, este información se debe preguntar a la escuela.

### Cargar tablas

Para cargar los archivos .csv a la base de datos se pueden utilizar scripts, primero en consola ir al directorio que contiene el archivo "manage.py" y ejecutar alguno de los siguientes comandos para cargar el archivo respectivo

    python manage.py runscript load_asignaturas
    python manage.py runscript load_equivale
    python manage.py runscript load_prerrequisitos
    python manage.py runscript load_malla_asignatura

## Actualizar en produccion

Una vez se agrega la oferta sin problemas en local, y se agregaron las entradas necesarias a las tablas, hacer el mismo proceso en produccion es mas simple.

1. Hacer merge a rama "main", para que contenga los archivos csv que se actualizaron en local.
2. git push en la rama main
3. Ingresar a servidor via ssh... (excluyo pasos porque el repo es publico)
4. Ejecutar comandos para llegar al directorio correcto:

        cd ..
        cd /usr/generador_de_horarios_Practica/aplicacion_web/TdR
5. git pull
6. Ejecutar scripts para cargar tablas:

        python manage.py runscript load_asignaturas
        python manage.py runscript load_equivale
        python manage.py runscript load_prerrequisitos
        python manage.py runscript load_malla_asignatura 
7. Cargar oferta desde pagina web en una cuenta de administrador (recordar usar mimo excel final que funciono en local)   
