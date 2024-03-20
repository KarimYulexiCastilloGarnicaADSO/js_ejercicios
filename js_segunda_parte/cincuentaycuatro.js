// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla.

let num1 = prompt("Ingrese un numero")
let num2 = prompt("Ingrese un segundo numero")
let resultado

if (num1 > num2) {
    resultado = num1 - num2
    window.alert(`La resta de ${num1} con ${num2} da como resultado ${resultado}`)
}
else{
    window.alert(`No se pueden restar porque le primer numero no es mayor que el segundo`)
}