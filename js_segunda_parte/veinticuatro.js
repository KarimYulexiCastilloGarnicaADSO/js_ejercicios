// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2).

let numero = prompt ("Ingrese un numero")
let regex = /\./;
if (regex.test(numero)) {
    alert("El numero si tiene punto flotante")
}
else{
    alert("El numero no tiene punto flotante")
}