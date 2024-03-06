// Escribir un programa que pida al usuario un numero entero y muestre por pantalla
// si es par o impar.

let numero = prompt(`Ingrese un numero entero`)
if (numero %2 == 0) {
  console.log("El numero es par")
}
else console.log("El numero es impar")
console.log(numero)