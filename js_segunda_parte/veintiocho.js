// Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let Nombre = prompt("Ingrese el nombre del empleado")
let hr_trb = prompt("Ingrese las horas de trabajo del empleado")
let pg_hr = prompt("Ingrese el pago por hora")
let sueldo = hr_trb * pg_hr
window.alert(`El sueldo del empleado ${Nombre} es de ${sueldo}`)