
// Cambia el texto de un parrafo 
function cambiarTexto () {
    let elemento = document.getElementById('description')
    elemento.innerHTML = 'Contenido Modificado '
}

// Agrega texto a un parrafo 
function agregarTexto () {
    let elemento = document.getElementById('description')
    texto = '-'
    elemento.innerHTML += texto 
}

// Agrega un elemento a una seccion
function agregarElemento () {
    let elemento = document.querySelector('section')
    
    elemento.insertAdjacentHTML('afterbegin', '<p class="color-blue">Nuevo parrafo afterbegin</p>')
    elemento.insertAdjacentHTML('beforebegin', '<p class="color-blue">Nuevo parrafo beforebegin</p>')
    elemento.insertAdjacentHTML('afterend', '<p class="color-blue">Nuevo parrafo afterend</p>')
    elemento.insertAdjacentHTML('beforeend', '<p class="color-blue">Nuevo parrafo beforeend</p>')
    //===
    //elemento.innerHTML += '<p>Parrafo nuevo</p>'
}