
var array = [2,4,6,8,10,12,14]
var total = 0 

for (let i = 0; i < array.length; i++) {
    var numero = array[i]
    if(numero == 6 ){
        continue // Esto regresa a evaluar el for, evitando que se ejecute el codigo restante con el 6
    }
    if(numero==10){
        break // Esto termina el ciclo y continua con el codigo de abajo
    }
    total += numero
}

alert(total)