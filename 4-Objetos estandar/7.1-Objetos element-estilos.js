
// Obtiene el elemento con id "description" y cambiamos su estilo
function iniciar () {
    let elemento = document.getElementById('description')
    elemento.style.width = '200px'
    elemento.style.border = '5px solid #000000'
    elemento.style.padding = '20px'
}

// Agranda el ancho de 'descripcion'
function modificarPropiedades () {
    let elemento = document.getElementById('description')
    let ancho = elemento.clientWidth

    ancho += 100

    elemento.style.width = `${ancho}px`
}

// Alterna entre 2 clases de estilos
function cambiarColor () {
    let elemento = document.getElementById('description')

    if (elemento.classList.contains('color-negro')){
        elemento.className = 'color-azul'
    } else {
        elemento.className = 'color-negro'
    }
}

// Remueve la clase 'color-azul' si la encuentra
function alternarAzul () {
    let elemento = document.getElementById('description')
    let clase = 'color-azul'

    elemento.classList.toggle(clase)
    // ===
    // if (elemento.classList.contains(clase)){
    //     elemento.classList.remove(clase)
    // } else {
    //     elemento.classList.add(clase)
    // }
}