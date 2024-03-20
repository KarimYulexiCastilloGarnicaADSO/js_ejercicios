// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

let ingrese = prompt("Ingrese los m2 que desea pintar")
let m2 = 10000
let cobrar = m2 * ingrese
window.alert(`Lo que se va a cobrar es ${cobrar}`)