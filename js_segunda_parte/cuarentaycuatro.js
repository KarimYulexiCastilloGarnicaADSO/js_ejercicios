// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.


let dolares = 0.00026
let euros = 0.00024
let pesos = prompt("Ingrese le valor a convertir")

let conver_dol = pesos * dolares
let conver_eu = pesos * euros

alert(`La cantidad de dolares es de: ${conver_dol.toFixed(2)}$ \nLa cantidad de euros es de: ${conver_eu}`)