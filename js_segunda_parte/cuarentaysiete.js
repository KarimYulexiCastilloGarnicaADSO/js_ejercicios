// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

let n1 = prompt("Ingrese el primer numero")
let n2 = prompt("Ingrese el segundo numero")
let n3 = prompt("Ingrese el tercer numero")
let mayor = n1
let menor = n1
if (n2 > mayor) {
    mayor = n2
}
else if (n2 < menor) {
    menor = n2
}
if (n3 > mayor) {
    mayor = n3
}
else if (n3 < menor) {
    menor = n3  
}
if (n1 === n2 && n2 === n3) {
    window.alert(`Los tres numeros son iguales ${n1}`)
}
else {
    window.alert(`El mayor es ${mayor} el menor es ${menor}`)
}
