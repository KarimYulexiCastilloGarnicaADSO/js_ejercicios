// Genera un patrón de asteriscos en forma de pirámide.

let numero = prompt("Por favor introduce un numero entero");

if (numero && numero > 0) {
  for (let i = 1; i <= numero; i++) {
    let linea = "";
    for (let j = 0; j < i; j++) {
      linea += "*";
    }
    console.log(linea);
  }
} else {
  window.alert("Por favor introduce un numero entero positivo válido.");
}