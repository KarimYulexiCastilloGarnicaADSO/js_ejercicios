// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

let año_ahora = prompt("Ingrese en que año estan")
let año_nacio = prompt("Ingrese el año en el que la persona nacio")
let edad = año_ahora - año_nacio
window.alert(`La edad de la persona es ${edad}`)