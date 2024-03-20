// Escribir un programa para una empresa que tiene salas de juegos para todas las edades y
// quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar.El
// programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada.Si
// el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€
// y si es mayor de 18 años, 10€.

let edad = prompt("Ingrese su edad")
let precio

if (edad <= 4) {
  precio = "GRATIS"
  window.alert(`Su entrada es de ${precio}`)
}
else if (edad > 4 && edad < 18) {
  precio = 5000
  window.alert(`Su entrada es de ${precio}`)
}
else(edad > 18) 
  precio = 10000
  window.alert(`Su entarda es de ${precio}`)
