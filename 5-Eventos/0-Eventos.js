
// Se asigna por JS una funcion al evento onClick al boton
const agregaEvento = () => {
    const elemento = document.querySelector('button')
    elemento.onclick = mostrarMensaje
}

const mostrarMensaje = () => {
    alert('Se presiono del boton')
}

// Se asegura que al cargarse la pagina se le asigne el evento al onClock del boton
onload = agregaEvento