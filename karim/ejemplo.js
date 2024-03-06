console.log("Hola js");

var saludo = "Hola adso";
let adso = "Hola compañeros";
console.log(saludo);
console.log(adso);
console.log("///")
console.log(window);
console.log(window.saludo);
console.log(window.adso);

var tema = "javascrpit";
console.log("variable tema antes del bloque", tema);
{
  var tema = "html css"
  console.log("variable tema dentro del bloque", tema);
}
console.log("variable tema despues del bloque", tema);

console.log("///")
let tema2 = "javascrpit con let"
console.log("variable let antes del bloque", tema2);
{
  let tema2 = "html css"
  console.log("variable tema dentro del bloque", tema2);
}
console.log("variable let tema2 despues del bloque", tema2);