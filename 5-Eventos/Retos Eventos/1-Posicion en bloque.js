
/**************************************************************************
 * DESCRIPCION
Hacer que en un bloque de 400px x 400px aparezca un recuadro de 10px x 10px
que siga al raton
(Auto impuesto)
**************************************************************************/

// Obtiene el elemento 'contenedor' y se le agrega un listener de evento
const movimiento = () => {
    const contenedor = document.getElementById('contenedor')
    contenedor.addEventListener('mousemove', moverBloque)
    contenedor.addEventListener('click', mostrarCoordenadas)
}

// Desplaza el bloque segun la posicion del raton relativa a 'contenedor'
const moverBloque = (e) => {
    const bloque = document.getElementById('bloque')
    // Posicion del mouse relativo al elemento
    let posicionX = e.offsetX - 5 // Descontando la mitad de lo que mide el bloque
    let posicionY = e.offsetY - 5 // Descontando la mitad de lo que mide el bloque
    if(posicionX < 0){
        posicionX = 0
    } else if (posicionX >= 390) {
        posicionX = 390 // Descontando los 10px que mide el bloque
    } 
    if (posicionY < 0) {
        posicionY = 0
    } else if (posicionY >= 390) {
        posicionY = 390 // Descontando los 10px que mide el bloque
    }
    bloque.style.top = `${posicionY}px`
    bloque.style.left = `${posicionX}px`
}

// Se agrega la funcion movimiento al evento load
addEventListener('load', movimiento)

const mostrarCoordenadas = (e) => {
    alert(`Posicion: x: ${e.offsetX}, y: ${e.offsetY}`)
}
