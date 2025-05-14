
// Muestra una alerta que dice la url en la que se encuentra actualmente
function mostrarUrl () {
    alert(window.location)
}

// Redirecciona a otra pagina
function redirect () {
    window.location = 'https://google.com'
}

// Recarga la pagina
function recarga () {
    location.reload()
} 

// Abre otra pestaña
function abrirOtraPestana () {
    open('https://google.com')
}

// Lee un dato
function leerDato () {
    let dato = prompt('Ingresa algo aqui')
    alert(`Se ingreso: ${dato}`)
}