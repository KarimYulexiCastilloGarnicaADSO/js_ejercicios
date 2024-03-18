// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let consumo_in = prompt("Ingrese el consumo ingresado")
let descuento 

if (consumo_in > 130000) {
    descuento = 0.15
    window.alert(`Como su consumo es ${consumo_in} su descuento es de ${descuento}`)
}
else {
    window.alert(`No hay descuento`)
}