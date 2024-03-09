// Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
// Normal.

let presion = prompt("Ingrese un valor para presion")
let temperatura =  prompt("Ingrese un valor para temperatura")

if (presion > 200 || temperatura > 100) {
    window.alert(`esta`)
} else {
    window.alert("Normal")
}
qui