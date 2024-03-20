// Escribir un programa que sume, resta, multiplique y divida dos números.

let n1 = parseFloat(prompt("Ingrese el primer numero"))
let n2 = parseFloat(prompt("Ingrese el segundo numero"))
let ingrese = prompt(`Ingrese que desea hacer`)
let operaciones = "suma, resta, multiplicacion, division"
let resultado

if (ingrese === "suma") {
  resultado = n1 + n2
  window.alert(`El resultado de su operacion es ${resultado}`)
}
else if (ingrese === "resta") {
  resultado = n1 - n2
  window.alert(`El resultado de su operacion es ${resultado}`)
}
else if (ingrese === "multiplicacion") {
  resultado = n1 * n2
  window.alert(`El resultado de su operacion es ${resultado}`)
}
else if (ingrese === "division") {
  if (n2 <= 0) {
    window.alert(`El numero no puede ser divido entre 0`)
  }
  resultado = n1 / n2
  window.alert(`El resultado de su operacion es ${resultado}`)
}