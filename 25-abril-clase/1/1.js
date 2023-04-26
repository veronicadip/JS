/* Tarea Carrito de compras con Array
■ Crear una aplicación de carrito de compras donde se ingresen productos como
elementos en un array. Las tareas que debe hacer son las siguientes:
● Agregar producto al carrito
● Listar los productos del carrito
● Buscar un producto en el carrito
● Filtrar productos que coincidan con una palabra, parte de ella o una letra
● Eliminar producto del carrito 
- Terminarlo con clases 
- Que sea un mini programa, con opciones (cada punto una opcion), que sea con clases para cada usuario.*/

let carrito = ["papa", "manzana", "pera"];

carrito.push("lechuga");

console.log(carrito);

let search = prompt(`nuevo articulo`);

console.log(carrito.find(element => element === search));

let filter = prompt(`ingrese filtro`);
console.log(carrito.filter(element => element.includes(filter)));

let del = prompt(`que eliminar`);

let index = carrito.indexOf(del);

carrito.splice(index, 1);

console.log(carrito);


