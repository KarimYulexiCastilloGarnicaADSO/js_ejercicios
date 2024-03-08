// En una determinada empresa, sus empleados son evaluados al final de cada año.Los
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
//   traduciéndose en mejores beneficios.Los puntos que pueden conseguir los empleados
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
//   a.La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
// puntuación del nivel.
//   b.Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
//   así como la cantidad de dinero que recibirá el usuario.

let puntos = prompt("Ingrese la cantidad de puntos del empleado, sabiendo que los niveles son (0.0, 0.4. 0.6 o mas)")
let nivel, dinero;

if (puntos === "0.0") {
  nivel = "Inaceptable"
  dinero = 0;
  window.alert(`El nivel del empleado es ${nivel} y el dinero es de ${dinero}`)
}
else if (puntos === "0.4") {
  nivel = "Aceptable"
  dinero = 2400 * parseFloat(puntos)
  window.alert(`El nivel del empleado es ${nivel} y el dinero es de ${dinero}`)
}
else if (puntos === "0.6") {
  nivel = "Meritorio"
  dinero = 2400 * parseFloat(puntos)
  window.alert(`El nivel del empleado es ${nivel} y el dinero es de ${dinero}`)
}
else (parseFloat(puntos) > 0.6) 
  nivel = "Mayor"
  dinero = 2400 * parseFloat(puntos)
  window.alert(`El nivel del emplead es ${nivel} y el dinero es de ${dinero}`)
