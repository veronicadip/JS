/* Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el
número es positivo, cero o negativo. */

let numero = parseInt(prompt(`Ingrese un número.`));

if (isNaN(numero)) {
    document.write(`Porfavor ingrese un número valido.`);
} else if (numero > 0) {
    document.write(`El número ingresado es positivo.`);
} else if (numero === 0) {
    document.write(`El número es cero.`);
} else {
    document.write(`El número ingresado es negativo.`);
};