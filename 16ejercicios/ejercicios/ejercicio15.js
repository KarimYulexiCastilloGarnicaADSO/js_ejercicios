// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar.

function aleatori(min, max) {
    return numero = Math.floor(Math.random() * (max - min + 1)) + min
}

function mostrar(numero) {
    if (numero % 2 === 0) {
        window.alert(`Este numero ${numero} es par`)
    }
    else{
        window.alert(`Este numero ${numero} es impar`)
    }
}
let min = 1
let max = 10
let numaleatorio = aleatori(min, max)
mostrar(numaleatorio)