// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

let cantidad_libros = prompt("Ingrese la cantidad de libros")
let cantidad_cuadernos = prompt("Ingrese la cantidad de cuadernos")
let cantidad_lapiceros = prompt("Ingrese la cantidad de lapiceros")
let libros = 10000
let cuadernos = 7550
let lapiceros = 5550
let monto = (cantidad_libros * libros) + (cantidad_cuadernos * cuadernos) + (cantidad_lapiceros * lapiceros)
window.alert(`El monto de la venta es de ${monto}`)