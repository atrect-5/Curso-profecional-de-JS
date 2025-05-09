
var contador = 0
var serie = 0

while(serie < 100){
    var isImpar = contador % 2
    if (isImpar){
        serie += 2
    } else {
        serie += 3
    }
    contador ++
}

alert(`Se llega el nummero 100 en ${contador} iteraciones`)