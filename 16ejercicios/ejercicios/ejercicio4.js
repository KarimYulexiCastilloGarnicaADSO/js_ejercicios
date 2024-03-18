// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

const palabra = prompt("Ingrese una palabra")
var sapo = palabra.length
function contar(palabra) {
  if (sapo > 5) {
    console.log(`La palabra ${palabra} es larga`)
  }
  else {
    console.log(`La palabra ${palabra} es corta`)
  }
}
contar(palabra)