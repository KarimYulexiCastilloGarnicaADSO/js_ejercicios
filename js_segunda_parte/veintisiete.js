// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let par1 = prompt("Ingrese la nota del parcial 1")
let par2 = prompt("Ingrese la nota del parcial 2")
let par3 = prompt("Ingrese la nota del parcila 3")
let exm = prompt("Ingrese la nota del examen final")
let trb = prompt("Ingrese la nota del trabajo final")
let trb_fn = trb * 0.15
let exm_fn = exm * 0.30
let prom_parc = (par1 + par2 + par3) / 3 * 0.55
let promedio = (prom_parc + trb_fn + exm_fn) / 3
window.alert(`El promedio de los parciales es de ${prom_parc} y el promedio de la materia es de ${promedio}`)