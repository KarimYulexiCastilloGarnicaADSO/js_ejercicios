// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let prd1 = prompt ("Ingrese  el valor del primer producto") 
let prd2 = prompt ("Ingrese  el valor del segundo producto")
let prd3 = prompt ("Ingrese  el valor del tercer producto")
let prd4 = prompt ("Ingrese  el valor del cuarto producto")
let prd5 = prompt ("Ingrese  el valor del quinto producto")
let suma = (prd1 + prd2) * 0.05
let suma2 = (prd3 + prd4) * 0.02
let total = suma + suma2 + prd5
window.alert(`El valor a pagar por los primeros dos es ${suma}`)
window.alert(`El valor a pagar por los dos siguientes es ${suma2}`)
window.alert(`El valor total es ${total}`)
