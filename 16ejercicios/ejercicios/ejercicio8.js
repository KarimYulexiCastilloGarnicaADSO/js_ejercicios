// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

function invertir(frase) {
  if (typeof frase !== 'string') {
    return frase;
  }

  let fraseInvertida = frase.split('').reverse().join('');
  window.alert(`La frase invertida es ${fraseInvertida}`);

  return fraseInvertida;
}
let frase = prompt("Ingrese una palabra")
let fraseInvertida = invertir(frase)
console.log(fraseInvertida)