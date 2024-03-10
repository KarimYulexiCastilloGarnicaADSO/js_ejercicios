// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

let n1 = prompt("Ingrese el primer numero")
let n2 = prompt("Ingrese el segundo numero")
let n3 = prompt("Ingrese el tercer numero")
let mayor = n1
if (n2 > mayor) {
    mayor = n2
}
if (n3 > mayor) {
    mayor = n3
}
window.alert(`El mayor de los tres numeros es ${mayor}`)