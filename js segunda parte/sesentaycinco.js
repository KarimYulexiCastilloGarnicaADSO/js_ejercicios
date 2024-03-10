// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// // la cuenta atrás desde ese número hasta cero separados por comas.

let numero = prompt ("Ingrese un numero entero positivo")

if (numero && numero > 0) {
    let cuenta_atras = ""
    for (let i = numero; i >=0 ; i--) {
        if (cuenta_atras !== "") {
            cuenta_atras = cuenta_atras + ", "
        }
        cuenta_atras = cuenta_atras + i
    }
    window.alert(`La cuenta atras desde ${numero} hasta 0 es ${cuenta_atras}`)
}
else{
    window.alert("Ingrese un numero entero positivo valido ")
}