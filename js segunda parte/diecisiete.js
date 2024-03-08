// Escribir un programa que calcule el volumen de una esfera.

let radio = prompt("Ingrese el radio de la esfera")
let pi = 3.1416
let volumen = (4 / 3) * pi * Math.pow(radio, 3) 
window.alert(`El volumen de la esfera es ${volumen}`)