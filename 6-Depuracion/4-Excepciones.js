
/***** clear *****/
// Limpia el contenido de la consola
function limpiarConsola () {
    console.clear() // Console was cleared
}

// Funcion que simula una venta
// Si la cantidad solicitada es mayor a la existencia, lanza un error
const vender = (cantidad, existencia) => {
    if (cantidad > existencia) {
        const error = {
            name: 'Error existencia',
            message: 'La cantidad solicitada exceda a la existencia'
        }
        throw error
    } else {
        existencia -= cantidad
        return existencia
    }
}

// Intenta ejecutar la funcion de la venta
try{
    let existenciaTotal = 10
    let cantidad = 1
    existenciaTotal = vender(cantidad, existenciaTotal)
    console.log('Existencia total : ',existenciaTotal)
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}