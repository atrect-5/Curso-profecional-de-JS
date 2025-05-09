
var producto = 1
var calificacion = ''

switch (producto) {
    case 1:
        calificacion = 'Aceptable'
        break // Sin este, sigue corriendo el bloque de abajo
    case 2 :
        calificacion = 'Regular'
        break
    case 3 :
        calificacion = 'Rechazado'
        break
    default:
        calificacion = 'Sin calificacion'
        break
}

alert(calificacion)