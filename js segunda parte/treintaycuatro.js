// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let pi = 3.1416;
let radio = parseFloat(prompt("Ingrese el radio en metros"));
let altura = parseFloat(prompt("Ingrese la altura en metros"));
let caudal = parseFloat(prompt("Ingrese el caudal en litros por minuto"));
let volumen = pi * Math.pow(radio, 2) * altura;
let tiempo = volumen / caudal;
window.alert(`El tiempo estimado para llenar el depósito es de ${tiempo} minutos.`);
