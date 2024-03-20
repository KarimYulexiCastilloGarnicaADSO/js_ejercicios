// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos.

let contraseña = "Karim"
let confirmar = prompt(`Introduce la contraseña`)
if (contraseña.toLowerCase === confirmar.toLowerCase) {
  console.log("Son iguales")
}
else { console.log("No coinciden") }