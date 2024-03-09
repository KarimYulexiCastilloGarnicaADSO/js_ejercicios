// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let calcular = prompt("Ingrese T(triangulo) o C(circulo) para calcular el area").toUpperCase()

let pi = 3.1416

if (calcular === "T") {
    let base = prompt("Ingrese la base para triangulo")
    let altura = prompt("Ingeres la altura para triangulo") 
    let area_t = (base * altura) / 2
    alert(`El area es de: ${area_t}`)
}
else if (calcular === "C") {
    let radio = prompt("Ingrese el valor a aradio de circulo")
    let area_c = pi * Math.pow(radio, 2)
    alert(`El area es de: ${area_c}`)
}
else {
    alert("Ingresaste un valor invalido")
}