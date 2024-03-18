// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

let contraseña = prompt("Ingrese la contraseña")
let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;

if (regex.test(contraseña)) {
    window.alert(`La contraseña ${contraseña} es valida`)
}
else {
    window.alert(`La contraseña ${contraseña} no es valida`)
}