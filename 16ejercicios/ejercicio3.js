// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

let a = prompt("Ingrese el primer numero")
let b = prompt("Ingrese el segundo numero")

function mayor(a, b) {
  return Math.max(a, b)
}
alert(mayor(a, b))