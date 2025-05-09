
var texto = 'Hello everyone'
alert (texto)

// Concatenar
var texto1 = 'Hello, my name is '
texto1 += 'Alejandro'

var texto2 = 'My age is '
texto2 += 24 // Algunos lenguajes requieren conversion explicita

alert(texto2)

var casas = 10
var tiendas = 20
var parques = 5

var reporte = 'Tenemos: ' + casas + ' casas, ' + tiendas + ' tiendas y ' + parques + ' parques'
var reporte2 = `Tenemos: ${casas} casas, ${tiendas} tiendas y ${parques} parques`
alert(reporte2)