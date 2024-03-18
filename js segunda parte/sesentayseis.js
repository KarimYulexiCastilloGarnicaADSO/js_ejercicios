// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidad = prompt ("Ingrese la cantidad a invertir")
let interes = prompt ("Ingrese el interes anual")
let años = prompt ("Ingrese los años a invertir")
for (let i = 1; i < años; i++) {
    let capital = cantidad * (1 + interes / 100) ** i
    window.alert(`Capital obtenido en el año ${i}: ${capital}`)    
}