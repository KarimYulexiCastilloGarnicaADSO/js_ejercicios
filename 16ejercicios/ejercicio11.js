// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

let a = parseInt(prompt("Ingrese un numero"))
let b = parseInt(prompt("Ingrese un numero"))
let suma 
let no = 0
if (a > 0 && b > 0) {
  suma = a + b
  alert(`El resultado de la suma es ${suma}`)
}
else {
  alert(`El resultado de la suma es ${no}`)
}