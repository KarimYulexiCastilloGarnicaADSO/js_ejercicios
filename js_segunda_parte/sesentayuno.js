// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

let nota = prompt ("Ingrese la nota del alumno (Van del 1 al 100)")
let asignacion

if (nota < 100 && nota >= 90) {
    asignacion = "a"
    window.alert(`Su asignacion es de ${asignacion}`)
}
else if (nota < 90 && nota >= 80) {
    asignacion = "b"
    window.alert(`Su asignacio es de ${asignacion}`)
}
else if (nota < 80 && nota >= 70) {
    asignacion = "c"
    window.alert(`Su asignacion es de ${asignacion}`)
}
else if (nota < 70 && nota >= 60) {
    asignacion = "d"
    window.alert(`Su asigancion es de ${asignacion}`)
}
else{
    window.alert(`Nota invalida`)
}