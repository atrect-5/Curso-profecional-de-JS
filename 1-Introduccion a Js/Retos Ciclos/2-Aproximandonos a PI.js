
/**************************************************************************
 * DESCRIPCION
Se puede aproximar el valor de π mediante la siguiente serie:
π= 4/1 – 4/3 + 4/5 – 4/7 + 4/9 . . .

La diferencia entre la serie y π debe ser menor a 0.0005. 
Determina el número de términos que se requieren para obtener esta precisión.
**************************************************************************/

var aproximacionPI = 0
var denominador = 1

var PI = Math.PI
var diferenciaPermitida = 0.0005
var maximoPermitido = PI + diferenciaPermitida
var minimoPermitodo = PI - diferenciaPermitida

var isSuma = true
var termino = 0

while(aproximacionPI < minimoPermitodo || aproximacionPI > maximoPermitido)
{
    if (isSuma){
        aproximacionPI += 4 / denominador
    } else {
        aproximacionPI -= 4 / denominador
    }
    isSuma = !isSuma
    denominador += 2
    termino++ 
}

alert(`Se alcanza la precisión de ±${diferenciaPermitida} con ${termino} términos. Aproximación: ${aproximacionPI}`);