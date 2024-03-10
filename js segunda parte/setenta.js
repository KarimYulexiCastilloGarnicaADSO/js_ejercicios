// Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

let contraseña = prompt ("Ingrese una contraseña")
let real = "contraseña"
if (contraseña === real) {
    window.alert(`Contraseñas coninciden`)
}
else {
    window.alert(`Contraseñas no coinciden`)
}