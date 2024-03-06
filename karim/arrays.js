let array = []
console.log(array)
let datos = [1, 2, 3, "HOla", true, [
  "samuel", "ola", false
]]
console.log(datos)
let arrglo = new Array(1, 2, 3, 4, 5, 6);
console.log(arrglo)
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes"]
console.log(dias)
console.log(dias.push("sabado"))
console.log(dias.pop)
dias.pop()
console.log(dias)

let numeros = Array(50).fill();
console.log(numeros)
console.log(dias)

dias.forEach(
  function (elemento, index) {
    console.log(
      `
        <li>
          ${elemento}
        </li>`
    )
  }
);