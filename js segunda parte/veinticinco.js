//  Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let precio = prompt("Ingrese el precio del medicamento")
let descuento = 0.10 * precio
let precio_final
precio_final = precio - descuento
window.alert(`El descuento del producto es de  ${descuento} y el precio final es ${precio_final}`)