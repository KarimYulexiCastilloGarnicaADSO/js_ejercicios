// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

let programas = prompt ("Ingrese la canridad e cursos")
let pago, pago_curso

if (programas < 6) {
    pago = 2000000
    pago_curso = pago * programas
    window.alert(`El pago total de sus ${programas} es ${pago_curso}`)
}
else if (programas >= 6) {
    pago = 1200000
    pago_curso = pago * programas
    window.alert(`El pago total de sus ${programas} es ${pago_curso}`) 
}
else{
    window.alert("Cantidad no valida")
}