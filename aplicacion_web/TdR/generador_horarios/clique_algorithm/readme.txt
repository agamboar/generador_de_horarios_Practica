clique_actual.py es la ultima version del calculo de recomendaciones y la que se utiliza en views.py. ajustes y nuevas funciones deben hacerse en este archivo.

fetchData.py contiene todas las funciones de acceso a bdd, clique_actual accede a los datos que necesita desde 'getData(userId, cfgAreaLimit)', parametro cfgAreaLimit es la maxima cantidad de areas que se consideran al obtener las secciones tipo CFG.

en caso de necesitar refactorizar clique_actual.py, recomiendo el siguiente flujo:
    renombrar clique_actual.py -> clique_v3.py
    crear copia de clique_v3.py -> clique_v3 copy.py
    renombrar clique_v3 copy.py -> clique_actual.py
luego trabajar en clique_actual.py
