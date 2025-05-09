
/**************************************************************************
 * DESCRIPCION
Se requiere calcular el precio de ida y vuelta en ferrocarril, 
conociendo tanto la distancia entre las dos ciudades como el tiempo de estancia 
en la ciudad destino.

Si el número de días de estancia es superior a 10 y la distancia total 
(ida y vuelta) a recorrer es superior a 500k, el precio del billete se 
reduce en 20%. El precio por km es de $0.19.
**************************************************************************/

var distanciaEntreCuidades = 300
var diasEstancia = 15

var distanciaTotal = distanciaEntreCuidades * 2
var precioBoleto = distanciaTotal * 0.19

if (diasEstancia > 10 && (distanciaEntreCuidades * 2) > 500){
    precioBoleto *= 0.8
}

alert(`Precio del boleto: $${precioBoleto.toFixed(2)}`)