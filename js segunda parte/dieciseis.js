// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros / segundo.

let distancia_km = 2
let tiempo_m = 5 
let distancia_m = distancia_km * 1000
let tiempo_s = tiempo_m * 60
let velocidad = distancia_m / tiempo_s
window.alert(`La velocidad del proyectil es de ${velocidad}`)