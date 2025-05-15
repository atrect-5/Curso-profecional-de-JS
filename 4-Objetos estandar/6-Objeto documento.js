
// Obtiene el elemento con id "description" y lo guarda en una variable
function iniciar () {
    let elemento = document.getElementById('description')
    // alert(elemento) // [object HTMLParagraphElement]
}

// Obtiene una lista de todos los elementos parrafos y muestra el id de estos
function mostrarParrafos () {
    let listaElementos = document.getElementsByTagName('p')
    // alert(listaElementos) // [object HTMLCollection]
    let ids = []

    for (let i = 0; i < listaElementos.length; i++) {
        ids.push(listaElementos[i].id)
    }
    alert(`Lista de ids de los parrafos:\n${ids.join(', ')}`) // Lista de ids: <lista de ids>
}

// Obtiene el id del primer parrafo dentro de un div con id "division"
function mostrarPorQuery () {
    // Busca en el div con id 'division' y devuelve el primer parrafo (el primer elemento que cumple la condicional)
    let elemento = document.querySelector('div#division > p')
    alert(elemento.id) // temas
}

// Obtiene los ids de los parrafos dentro de un div con id "division"
function mostrarTodosPorQuery () {
    // Busca en el div con id 'division' y devuelvelos parrafos
    let listaElementos = document.querySelectorAll('div#division > p')
    let ids = []

    for (let i = 0; i < listaElementos.length; i++) {
        ids.push(listaElementos[i].id)
    }
    alert(`Lista de ids de los parrafos:\n${ids.join(', ')}`) // Lista de ids: <lista de ids>
}

// Busca todos los elementos hijos de un elemento
function buscarSeccion () {
    let seccion = document.getElementById('division')
    let listaElementos = seccion.getElementsByTagName('p') // Obtiene los parrafos dentro del elemento seccion

    let ids = []

    for (let i = 0; i < listaElementos.length; i++) {
        ids.push(listaElementos[i].id)
    }
    alert(`Lista de ids de los parrafos:\n${ids.join(', ')}`) // Lista de ids: <lista de ids>
}