/* 4- Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad
que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio
sin decimales, es decir un entero: 2, 7, 90 etc.) */

let precio = parseInt(prompt(`Ingrese el precio del artículo.`));
let cantidad = parseInt(prompt(`Ingrese la cantidad de productos que el cliente desea llevar.`));

if (isNaN(precio) || isNaN(cantidad)) {
    document.write(`Porfavor, ingrese números válidos.`)
} else {
    total = precio * cantidad
    document.write(`El total a pagar es $${total}`)
}