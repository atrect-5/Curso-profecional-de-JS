
// Se declara una funcion que mostrara un saludo en consola
function saludar () {
    console.log('Hello World')
}
// Es necesario llamar a la funcion para que se ejecute
saludar()


var variable = 5

// Multiplica por 2 el valor de 'variable'
function duplicador(){
    variable *= 2
}

// Se llama a la funcion duplicador 10 veces
for (let i = 0; i < 10; i++) {
    duplicador()
}
console.log(variable) // 5120
