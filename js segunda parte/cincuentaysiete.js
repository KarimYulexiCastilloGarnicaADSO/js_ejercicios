// Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera:
// Rango de calificaciones:
// • 9.1 a 10 Asignar la calificación de A equivale a Excelente
// • 8.1 a 9 Asignar la calificación de A equivale a Muy bien
// • 7.5 a 8 Asignar la calificación de A equivale a Bien
// • Menor a 7.5 asignar la calificación de NA No Aprobado

let calificacion = prompt("Ingrese la calificacion")

if (calificacion >= 9.1 && calificacion <= 10) {
    window.alert("Excelente")
}
else if (calificacion >= 8.1 && calificacion <= 9) {
    window.alert("Muy Bien")
}
else if (calificacion >= 7.5 && calificacion <= 8) {
    window.alert("Bien")
}
else{
    window.alert("No Aprobado")
}