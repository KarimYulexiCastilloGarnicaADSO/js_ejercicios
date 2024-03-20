// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

let a = parseInt(prompt("Ingrese un numero"))
let b = parseInt(prompt("Ingrese un numero"))
function binarios(a, b) {

  suma = a + b;

  let residuo;
  let newNumber = [];

  while (suma > 0) {

    residuo = suma % 2;
    newNumber.push(residuo)
    suma = Math.floor(suma / 2);

  }

  console.log(newNumber.reverse().join(""))

}

binarios(a, b)