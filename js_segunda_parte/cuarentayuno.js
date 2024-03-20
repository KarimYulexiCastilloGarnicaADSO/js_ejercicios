// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.

let frase = prompt("Ingrese una frase que lo identifique como programador")
let frase_invertida = frase.split("").reverse().join("")
window.alert(`La frase invertida es ${frase_invertida}`)