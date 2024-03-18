// En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75

let edad = prompt ("Ingrese su edad")
let estatura = prompt ("Ingrese su altura")
let peso = prompt ("Ingrese su peso")

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    window.alert("Seleccionado");
} else {
    window.alert("No seleccionado");
}