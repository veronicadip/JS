/* Escribir un programa en el cual se ingresan cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto. */

let num1 = parseInt(prompt(`Ingrese el primer número.`));
let num2 = parseInt(prompt(`Ingrese el segundo número.`));
let num3 = parseInt(prompt(`Ingrese el tercer número.`));
let num4 = parseInt(prompt(`Ingrese el cuarto número.`));

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    document.write(`Porfavor, ingrese un número valido.`);
} else {
    let suma = num1 + num2;
    let producto = num3 * num4;
    document.write(`La suma de los dos primeros números ingresados tiene como resultado ${suma} <br>`);
    document.write(`El producto del tercer y cuarto número es ${producto}`);
};