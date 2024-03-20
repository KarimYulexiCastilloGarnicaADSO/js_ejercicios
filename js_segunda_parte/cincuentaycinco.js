// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

let ingrese = prompt("Ingrese que tipo de membresia tiene")
let A = "A"
let B = "B"
let C = "C"
let descuento 

if (ingrese == A) {
    descuento = 0.10
    window.alert(`Por ser de menbresia ${ingrese} su descuento es de ${descuento}`)
}
else if (ingrese == B) {
    descuento = 0.15
    window.alert(`Por ser de membresia ${ingrese} su descuento es de ${descuento}`)
}
else if (ingrese == C) {
    descuento = 0.20
    window.alert(`Por ser de menbresia ${ingrese} su descuento es de ${descuento}`)
}
else{
    window.alert(`Su membresia no es correcta`)
}