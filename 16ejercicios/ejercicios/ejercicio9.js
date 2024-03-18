// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.

function longitud(pin) {
  const pin_regex = /^\d{4,6}$/
  return pin_regex.test(pin)
}

let pin = prompt("Ingrese el pin")
if (longitud(pin)) {
  alert(`${pin} pin valido`)
}
else {
  alert(`${pin} pin invalido`)
}