// Determinar si un número es positivo y menor que 100.

let ingresar = prompt("Ingrese un numero")

if (ingresar >0 && ingresar <= 100) {
    window.alert(`Numero correcto ${ingresar}`)
}
else {
    window.alert(`Nunmero incorrecto ${ingresar}`)
}