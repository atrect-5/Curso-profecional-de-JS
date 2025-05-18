
// Muestra la posición del mause al hacer click en el documento
const mostrarPosicion = (e) => {
    //alert(`Posicion: x: ${e.clientX}, y: ${e.clientY}`) // Posición del cursor dentro de la ventana del navegador (viewport).
    //alert(`Posicion: x: ${e.offsetX}, y: ${e.offsetY}`) // Posición del cursor relativa al elemento HTML que disparó el evento.
    alert(`Posicion: x: ${e.pageX}, y: ${e.pageY}`) // Posición del cursor relativa a toda la página, incluyendo cualquier desplazamiento (scroll).
}

// Obtiene el elemento 'contenedor y se le agrega un listener de evento
const movimiento = () => {
    const contenedor = document.getElementById('contenedor')
    contenedor.addEventListener('mousemove', moverBarra)
}

// Se agrega la funcion mostrarPosicion al evento click
addEventListener('click', mostrarPosicion)

// Desplaza la barra segun la posicion del raton relativa a 'contenedor'
const moverBarra = (e) => {
    const barra = document.getElementById('barra-progreso')
    // Posicion del mouse relativo al elemento
    let posicion = e.offsetX - 10 // Descontamos los 10 pixeles del padding de contenedor
    if(posicion <= 0){
        posicion = 0
    } else if (posicion >= 400){
        posicion = 400
    }
    barra.style.width = `${posicion}px`
}

// Se agrega la funcion movimiento al evento load
addEventListener('load', movimiento)

// Detecta la tecla presionada y cambia el color de 'bloque'
const detectarTecla = (e) => {
    const tecla = e.key
    const bloque = document.getElementById('bloque')
    switch (tecla) {
        case '0':
            bloque.style.backgroundColor = 'red'
            break
        case '1':
            bloque.style.backgroundColor = 'blue'
            break
        case '2':
            bloque.style.backgroundColor = 'green'
            break
        case '3':
            bloque.style.backgroundColor = 'yellow'
            break
        case '4':
            bloque.style.backgroundColor = 'purple'
            break
        case '5':
            bloque.style.backgroundColor = 'orange'
            break
        case '6':
            bloque.style.backgroundColor = 'pink'
            break
        case '7':
            bloque.style.backgroundColor = 'brown'
            break
        case '8':
            bloque.style.backgroundColor = 'gray'
            break
        case '9':
            bloque.style.backgroundColor = 'black'
            break
        default:
            bloque.style.backgroundColor = 'white'
            break
    }
}

// Se agrega la funcion detectarTecla al evento keydown
addEventListener('keydown', detectarTecla)