// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

let pro1 = parseFloat(prompt("Ingrese el valor del producto 1"))
let pro2 = parseFloat(prompt("Ingrese el valor del producto 2"))
let pro3 = parseFloat(prompt("Ingrese el valor del producto 3"))
let pro4 = parseFloat(prompt("Ingrese el valor del producto 4"))
let pro5 = parseFloat(prompt("Ingrese el valor del producto 5"))
let iva = 0.20
let subt = pro1 + pro2 + pro3 + pro4 + pro5
let sub2 = subt * iva
let total = subt + sub2
window.alert(`El total de la compra es de ${total}`)
window.alert(`El sub total es de ${subt}`)
window,alert(`El IVA con el subtotal es de ${sub2}`)