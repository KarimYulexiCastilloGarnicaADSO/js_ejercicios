// Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

let numero = prompt("Por favor introduce un numero entero");

if (numero && numero > 0) {
    for (let i = 1; i <= numero; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += "* ";
        }
        console.log(fila);
    }
} else {
    console.log("Por favor introduce un numero entero positivo válido");
}
