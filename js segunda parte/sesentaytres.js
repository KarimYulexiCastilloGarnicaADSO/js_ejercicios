// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).

let edad = prompt ("Ingrese su edad")

if (edad && edad > 0) {
    window.alert(`Has cumplido ${edad} años`)
    for (let i = 1; i <= edad; i++) {
        console.log(i)
    }
}
else {
    window.alert(`Ingrese una edad valida`)
}