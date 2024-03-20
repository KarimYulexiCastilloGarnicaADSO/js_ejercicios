// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = prompt("Ingrese sus interese a pagar")
let intereses, saldo_fn

if (saldo < 100000) {
    intereses = 0.03
    saldo_fn = intereses * saldo
    window.alert(`Su saldo a pagar es ${saldo_fn} y su interes fue de ${intereses}`)
}
else if (saldo > 100000) {
    intereses = 0.04
    saldo_fn = intereses * saldo
    window.alert(`Su saldo a pagar es ${saldo_fn} y su interes fue de ${intereses}`)
}
else {
    window.alert(`Saldo incorecto`)
}