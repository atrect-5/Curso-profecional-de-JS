
// Crea un nuevo elemento
function agregarElemento () {
    let elemento = document.querySelector('section')
    // Se crea un nuevo elemento
    let nuevo = document.createElement('p')
    // Se le agrega contenido al nuevo elemento
    nuevo.innerHTML = 'Este es un nuevo elemento'
    // Se agrega el nuevo elemento al section
    elemento.appendChild(nuevo)
}

// Elimina un elemento 
function eliminarElemento () {
    let elemento = document.querySelector('section')
    let eliminar = document.getElementById('otro-parrafo')
    // Si encuentra el elemento lo elimina, si no, avisa que ya se elimino
    if (eliminar){
        elemento.removeChild(eliminar)
    } else {
        alert('Ya se ha eliminado el elemento')
    }
}