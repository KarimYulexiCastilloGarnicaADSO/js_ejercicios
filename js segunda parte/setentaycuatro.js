// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

function solicitarEntrada() {
    var entrada = prompt("Por favor, introduce algo (escribe 'salir' para terminar):");
    if (entrada.toLowerCase() === "salir") {
        return;
    }
    console.log("Eco: " + entrada);
    solicitarEntrada();
}
solicitarEntrada();
