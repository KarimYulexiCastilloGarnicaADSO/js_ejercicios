// Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar.

function numero(num) {
  if (num % 2 == 0) {
    console.log(`El numero ${num} es par`)
  }
  else {
    console.log(`El numero ${num} es impar`)
  }
}

let num = parseInt(prompt("Ingrese un numero"))
numero(num)