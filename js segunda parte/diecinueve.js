// Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = prompt("Ingrese el radio")
let altura = prompt("Ingrese la altura")
let pi = 3.1416
let area = (2 * pi * radio * altura) + (2 * pi * Math.pow(radio, 2))
window.alert(`El area del cilindro es de ${area}`)
let volumen = area * altura
window.alert(`El valor del volumen es de ${volumen}`)