// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function convertir(numeros) {
    switch (numeros) {
        case 0:
            return "cero"
        case 1: 
            return "uno"
        case 2: 
            return "dos"
        case 3: 
            return "tres"
        case 4: 
            return "cuatro"
        case 5: 
            return "cinco"
        default: 
            return "Numero fuera del rango"
    }
}
window.alert(convertir(4))