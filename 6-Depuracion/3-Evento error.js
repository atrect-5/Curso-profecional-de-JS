
/***** clear *****/
// Limpia el contenido de la consola
function limpiarConsola () {
    console.clear() // Console was cleared
}

// NOTA !important
// los datos del error solo se muestran si el error ocurre en el archivo HTML, si ocurren en 
// el archivo JS, aparecera vacio
// Esto porque se esta abriendo el archivo directamente con el navegador.
// Para ver los errores en el archivo de JS, es necesario levantar un servidor.

// Se llama cuando hay un evento de tipo error (En este caso, que se llame a una funcion que no existe)
function mostrarError (e) {
    console.log(`Typo de evento: ${e.type}`) // error
    console.log(`Informacion del error: ${e.error}`) // ReferenceError: funcionInexistente is not defined
    console.log(`Mensaje de error: ${e.message}`) // Uncaught ReferenceError: funcionInexistente is not defined    
    console.log(`Linea donde ocurrio el error: ${e.lineno}`) // 22
    console.log(`Columna donde inicia el error: ${e.colno}`) // 44
    console.log(`Archivo donde ocurrio el error: ${e.filename}`) //file:///C:/Users/alex1/School%20Files/Curso%20profesional%20de%20JS/6-Depuracion/3-Evento%20error.html
}

// Agregamos la funcion mostrarError al evento de error
addEventListener('error', mostrarError)
