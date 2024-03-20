// los tramos impositivos para la declaración de la renta en un determinado país son:
// a.entre 10000 y 20000 ----5 %
//   b.entre 20000 y 35000 ----10 %
//     c.entre 35000 y 60000 ----20 %
//       d.más de 60000 ----45 %
//         escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.

let renta = prompt("Ingrese su renta anual")
let precio_fijo
let descuento

if (renta >= 10000 && renta <= 20000) {
  descuento = renta * 0.05;
  precio_fijo = renta - descuento
  window.alert(`Tienes un descuento del 5%, el descuento es de ${descuento}, el precio es de ${precio_fijo}`)
}
else if (renta > 20000 && renta <= 35000) {
  descuento = renta * 0.10;
  precio_fijo = renta - descuento
  window.alert(`Tienes un descuento del 10%, el descuento es de ${descuento}, el precio es de ${precio_fijo}`)
}
else if (renta > 35000 && renta <= 60000) {
  descuento = renta * 0.20;
  precio_fijo = renta - descuento
  window.alert(`Tienes un descuento del 20%, el descuento es de ${descuento}, el precio es de${precio_fijo}`)
}
else {
  descuento = renta * 0.45;
  precio_fijo = renta - descuento
  window.alert(`Tienes un descuento del 45%, el descuento es de ${descuento}, el precio es de ${precio_fijo}`)
}