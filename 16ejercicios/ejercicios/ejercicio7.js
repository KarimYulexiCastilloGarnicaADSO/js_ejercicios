// Crea una función de nos devuelva el elemento mayor de un arreglo de números.

function macimo(numeros) {
  if (!Array.isArray(numeros)) {
    return null;
  }

  return Math.max(...numeros);
}

console.log(macimo([9, 8, 7, 65, 4, 3, 2, 1]));