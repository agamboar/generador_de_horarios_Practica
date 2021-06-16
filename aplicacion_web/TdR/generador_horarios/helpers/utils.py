from datetime import date

def getSemestreActual():
    today = date.today()
    if 1 <= today.month <= 6:
        return str(today.year)+'-1'
    else:
        return str(today.year)+'-2'
