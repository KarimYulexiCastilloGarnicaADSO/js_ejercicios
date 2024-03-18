// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

function Sinvocales(cadena) {
    let regex = /[aeiou]/gi
    let nuevaFrase = cadena.replace(regex, "*")
    return nuevaFrase
}

let cadena = prompt ("Ingrese una frase")
let resultado = Sinvocales(cadena)
console.log(`La frase sin vocales es ${resultado}`)