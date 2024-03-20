// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

const numeros = parseInt(prompt("Ingrese numeros"))

function Inverso(numeros) {
  let reves
  if (numeros > 0) {
    reves = (numeros * (-1))
    alert(`Su inverso negativo es ${reves}`)
  }
  else if (numeros < 0) {
    reves = numeros * (-1)
    alert(`Su inverso positivo es ${reves}`)
  }
  else {
    alert("Ingrese un numero valido")
  }
}
Inverso(numeros)