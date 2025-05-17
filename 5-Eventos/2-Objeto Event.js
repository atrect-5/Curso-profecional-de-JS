
// Se asigna por JS una funcion al evento onClick al boton
const agregaEvento = () => {
    const elemento = document.querySelector('button')
    elemento.addEventListener('click', mostrarMensaje)

    // Se obtiene una lista de elementos <li> y se les asignan 2 eventos a cada uno
    let lista = document.querySelectorAll('li')
    lista.forEach((li) => {
        let random = (Math.random() * 10).toFixed(0)
        li.addEventListener('click', cambiarColor)
        li.addEventListener('click', (e) => {
            cambiarContenido(e, random)
        })
    })
}

// Muestra un mensaje
    // Las funciones que responden a un evento, reciben el objeto 'event'
const mostrarMensaje = (event) => {
    // alert('Se presiono del boton')
    // alert(event) // [object PointerEvent]

    // Propiedades del evento
    alert(`
        Evento ${event}\n
        Target: ${event.target}\n
        Tipo: ${event.type}\n
        `)

}

// Cambia el color del elemento
const cambiarColor = (event) => {
    event.target.style.color = 'purple'
}

// Agrega un numero recibido al contenido del elemento
const cambiarContenido = (event, valor) => {
    event.target.innerHTML += ` ${valor}`
}

// Se asegura que al cargarse la pagina se le asigne el evento al onClock del boton
addEventListener('load', agregaEvento)