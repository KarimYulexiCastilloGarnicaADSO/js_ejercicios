// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let nombre = prompt("Ingrese el nombre del mes").toLowerCase()

if (nombre === "enero") {
    window.alert("Capricornio")
}
else if (nombre === "febrero") {
    window.alert("Acuario")
}
else if (nombre === "marzo") {
    window.alert("Piscis")
}
else if (nombre === "abril") {
    window.alert("Aries")
}
else if (nombre === "mayo") {
    window.alert("Tauro")
}
else if (nombre === "junio") {
    window.alert("Geminis")
}
else if (nombre === "julio") {
    window.alert("Cancer")
}
else if (nombre === "agosto") {
    window.alert("Leo")
}
else if (nombre === "septiembre") {
    window.alert("Virgo")
}
else if (nombre === "octubre") {
    window.alert("Libra")
}
else if (nombre === "noviembre") {
    window.alert("Escorpio")
}
else if (nombre === "diciembre") {
    window.alert("Sagitario")
}
else{
    window.alert("Nombre del mes no valido")
}