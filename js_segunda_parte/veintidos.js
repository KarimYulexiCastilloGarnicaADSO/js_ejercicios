// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

let llamada = prompt("Ingrese los minutos de su llamada")
let minutos = 355
let iva = 0.20
let pago = minutos * llamada
let final = pago + iva
window.alert(`El costo de su llamada es de ${final}`)