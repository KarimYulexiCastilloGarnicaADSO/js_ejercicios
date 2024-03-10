// Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

for (let i = 1; i <= 10; i++) {
    window.alert(`Tabla de multiplicar del ${i}`)
    for (let j = 0; j <= 10; j++) {
        let resultado = i * j
        window.alert(`${i} * ${j} es = ${resultado}`)        
    }
}