// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área rectangulo= lado * lado

let lado1 = prompt("Ingresar el valor de la base") 
let lado2 = prompt("Ingresar el valor de la altura") 

if (lado1 > 0) {
    alert(`Es positivo ${lado1}`)
}
if (lado2 > 0) {
    alert(`Es positivo ${lado2}`)
    area = lado1 * lado2
    window.alert(`El area del rectangulo es ${area}`)
}
else{alert(`Es negativo`)}