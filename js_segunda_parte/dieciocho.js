// Escribir un programa que evalúe la siguiente expresión(a + 7 * c) / (b + 2 - a) + 2 * b

let a = prompt("Ingrese el valor de a")
let b = prompt("Ingrese el valor de b")
let c = prompt("Ingrese el valor de c")
let expresion = (a + 7 * c) / (b + 2 - a) + 2 * b
window.alert(`El valor de la expresion es ${expresion}`)