// . Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = prompt ("Ingrese un numero entero positivo")

if (numero && numero > 0) {
    let num_impar = ""
    for (let i = 1; i < numero; i++) {
        if (i % 2 != 0) {
            if (num_impar != "") {
                num_impar += ", "
            }
            num_impar = num_impar + i
        }
    }
    window.alert(`Los numeros impares desde ${numero} son ${num_impar}`)
}
else {
    window.alert("Por favor introduzca un numero valido")
}