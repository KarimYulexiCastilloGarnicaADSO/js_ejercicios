// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let regex = /"(?:\\.|[^"\\])*"/
let texto = `Esto es una cadena "con comillas" y con una cadena escapada: "cadena \\" escapada`
let conincidencia = texto.match(regex)
window.alert(conincidencia)