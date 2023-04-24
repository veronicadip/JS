/* Confeccionar un programa que permita cargar un número entero positivo de hasta
tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. */

let numero = parseFloat(prompt(`Ingrese un número positivo de hasta 3 cifras:`));

if (isNaN(numero)) {
    document.write(`Porfavor ingrese un número válido`);
} else if (numero <= 0) {
    document.write(`Porfavor, ingrese un número positivo mayor a cero.`);
} else if (numero.toString().length > 3) {
    document.write(`Porfavor, ingrese un número de hasta tres cifras.`);
} else {
    document.write(`El número ingresado tiene ${numero.toString().length} cifras.`);
};