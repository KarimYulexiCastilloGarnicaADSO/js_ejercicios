// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let empleado = prompt("Ingrese si es de planta o administrativo")
let cd_hora = prompt("Ingrese cuantas hotas a trabajado")
let administrativo = "administrativo" 
let planta = "planta" 
let hora, tt_hrs

if (empleado === planta) {
    hora = 20000
    tt_hrs = hora * cd_hora
    window.alert(`El pago total de las ${cd_hora} es de ${tt_hrs}`)
}
else if (empleado === administrativo) {
    hora = 10000
    tt_hrs = hora * cd_hora
    window.alert(`El pago tototal de las ${cd_hora} es de ${tt_hrs}`)
}
else {
    window.alert(`Tipo de empleado no reconocido`)
}
