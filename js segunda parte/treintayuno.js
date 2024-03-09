// Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

let x1 = prompt("Ingrese le valor de x1")
let x2 = prompt("Ingrese el valor de x2")
let y1 = prompt("Ingrese el valor de y1")
let y2 = prompt("Ingrese el valor de y2")
let  distancia 
distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
window.alert(`La distancia del pubnto  ${x1} , ${y1} ey ${x2} , ${y2} es ${distancia}`)