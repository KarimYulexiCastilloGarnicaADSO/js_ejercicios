// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o menor de edad, el programa debe validar que solo se puedan ingresar números positivos.
let edad = prompt("Introduce tu edad");
if (isNaN(edad) || edad <=0) {
  console.log("Debes ingresar un numero positivo")
  
}
else {
  if (edad < 18) {
  console.log(`eres menor de edad`)
}
else if (edad >= 18) {
  console.log(`eres mayor de edad `)
}
}

// console.log(`tienes ${edad} años`)