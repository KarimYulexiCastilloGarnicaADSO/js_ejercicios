// . Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase

let frase = prompt("Por favor, introduce una frase:");
let letra = prompt("Por favor, introduce una letra:");
letra = letra.toLowerCase();
let contador = 0;
for (let i = 0; i < frase.length; i++) {
    let caracterActual = frase[i].toLowerCase();
    if (caracterActual === letra) {
        contador++;
    }
}
window.alert(`La letra '${letra}' aparece ${contador} veces en la frase`);
