// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.Los
// ingredientes para cada tipo de pizza aparecen a continuación.
//   a.Ingredientes vegetarianos: Pimiento y tofu.
//     b.Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija.Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas.Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

let pizza = prompt("Desea una pizza vegetariana o no vegetariana")
let vegetariana, no_vegetariana, elegir, defecto

if (pizza == "vegetariana") {
  vegetariana = "pimineto y tofu"
  defecto = "tomate y mozarela"
  window.alert(`Los ingredientes por defecto son ${defecto}, los que van en su pizza son ${vegetariana}`)
  elegir = prompt(`Cual de los dos desea`)
  if (elegir == "pimiento") {
    window.alert(`Su pizza es vegetariana y los ingredientes son ${defecto} con pimiento`)
  }
  else if (elegir == "tofu") {
    window.alert(`Su pizza es vegetariana y los ingredientes son ${defecto} con tofu`)
  }
}
else if (pizza == "no vegetariana") {
  no_vegetariana = "pepperoni, jamon y salmon"
  defecto = "tomate y mozarela"
  window.alert(`Los ingredientes por defecto son ${defecto}, los que van en su pizza son ${no_vegetariana}`)
  elegir = prompt(`Cual de los tres desea`)
  if (elegir == "pepperoni") {
    window.alert(`Su pizza es no vegetariana y los ingredientes son ${defecto} con pepperoni`)
  }
  else if (elegir == "jamon") {
    window.alert(`Su pizza es no vegetariana y los ingreidntes son ${defecto} con jamon`)
  }
  else if(elegir == "salmon") 
  {
    window.alert(`Su pizza es no vegetariana y los ingredientes son ${defecto} son salmon`)
  }
}