
PATH = './generador_horarios/codigos_cfg/codigos_2021-2/'

class CfgNotFoundException(Exception):
    def __init__(self, message='No encontro el cfg en archivos areas en '+ PATH):
        # Call the base class constructor with the parameters it needs
        super(CfgNotFoundException, self).__init__(message)

def get_codigos(fileName) -> list:
    path = PATH + fileName
    with open(path, 'r') as f:
        codigos = f.read().splitlines()
        codigos_fix = set()
        for codigo in codigos:
            codigos_fix.add(codigo[:-3]) # quita sufijo no deseado
        return codigos_fix

def get_area(codigo : str) -> str:
    if codigo in get_codigos('codigos_Historia.txt'): return 'Historia'
    if codigo in get_codigos('codigos_Ciencia-y-Sociedad.txt'): return 'Ciencia y Sociedad' 
    if codigo in get_codigos('codigos_Ciencias-Sociales.txt'): return 'Ciencias Sociales'
    if codigo in get_codigos('codigos_Humanidades.txt'): return 'Humanidades'
    raise CfgNotFoundException('no se encontro codigo cfg: ' +codigo+ ' en catalogo de areas (' +PATH+ ')')
    


