// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

let n1 = prompt("Ingrese la nota 1");
let n2 = prompt("Ingrese la nota 2");
let n3 = prompt("Ingrese la nota 3");
let n4 = prompt("Ingrese la nota 4");
let regex = /^[1-5]$/;
let total = 0;

function promedio(n1, n2, n3, n4) {
    let calificaciones = [n1, n2, n3, n4];
    let validacion = calificaciones.every(calificacion => regex.test(calificacion));

    if (validacion) {
        calificaciones.forEach(calificacion => {
            total += parseInt(calificacion);
        });
        return total / calificaciones.length;
    } else {
        return "Las calificaciones deben ser números del 1 al 5.";
    }
}

let resultado_uno = promedio(n1, n2, n3, n4);
window.alert(`El promedio es ${resultado_uno}`);

// if (n1 >= 1 && n1 <= 5) {
//     window.alert(`Siguiente`)
// }
// else if (n2 >= 1 && n2 <= 5) {
//     window.alert(`Siguiente`)
// }
// else if (n3 >= 1 && n3 <= 5) {
//     window.alert(`Siguiente`)
// }
// else if (n4 >= 1 && n4 <= 5) {
//     window.alert(`Bien`)
// }else{(window.Error("Error"))}
// let promedio = (n1 + n2 + n3 + n4) / 4
// window.alert(`El promedio es ${promedio}`)