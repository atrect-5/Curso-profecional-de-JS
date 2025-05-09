
/**************************************************************************
 * DESCRIPCION
En un hospital de la Ciudad de México se creó un esquema para determinar 
los gastos médicos que un paciente tendrá que pagar por concepto de servicio 
hospitalario solicitado.

Crea un programa que permita calcular el costo de internación de un cliente 
según los datos en la siguiente tabla. 

Tratamiento 	Costo por persona por día
1	            2800
2	            1950
3   	        2500
4   	        1150

El hospital tiene la política de otorgar un descuento del 25% sobre el total 
de los gastos a los pacientes mayores de 60 años y a los clientes menores de 
25 años se les otorga un 15% de descuento.
**************************************************************************/

var tratamiento = 4
var diasInternacion = 15
var edadPaciente = 25


var precioPorDia = 0

switch (tratamiento) {
    case 1:
        precioPorDia = 2800
        break
    case 2:
        precioPorDia = 1950
        break
    case 3:
        precioPorDia = 2500
        break
    case 4:
        precioPorDia = 1150
        break
    default:
        alert('Ese tratammiento no esta disponible')
        break
}

var precioTotal = precioPorDia * diasInternacion

if (edadPaciente > 60){
    precioTotal *= 0.75
} else if (edadPaciente < 25){
    precioTotal *= 0.85
}

alert(`Precio total por internacion: $${precioTotal}`)