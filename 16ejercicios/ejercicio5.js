// < !--Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola. -- >

const palabra = prompt("Ingrese una palabra")
function silabas(palabra) {
  const contar_silaba = /([aeiou])(?:[aeiou]?)(?![aeiou])/g;
  const silabas = palabra.match(contar_silaba);
  const total = silabas ? silabas.length : 0

  return total
}
let total = silabas(palabra);
alert(`La plabra ${palabra} tiene ${total} silabas`)
