// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function Inverso (params) {
    let numeros = prompt("Ingrese un numero")
    let reves
    if (numeros >0) {
        reves = (numeros * (-1))
        window.alert(`Su inverso negativo es ${reves}`)
    }
    else if (numeros <0) {
        reves = numeros*(-1)
        window.alert(`Su inverso positivo es ${reves}`)
    }
    else{
        window.alert("Ingrese un numero valido")
    }
}
