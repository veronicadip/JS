/*  Realizar un programa que lea cuatro valores numéricos e informe su suma y
producto. */

let num1 = parseInt(prompt(`Ingrese el primer número.`));
let num2 = parseInt(prompt(`Ingrese el segundo número.`));
let num3 = parseInt(prompt(`Ingrese el tercer número.`));
let num4 = parseInt(prompt(`Ingrese el cuarto número.`));

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    document.write(`Porfavor, ingrese un número valido.`);
} else {
    let suma = num1 + num2 + num3 + num4;
    let producto = num1 * num2 * num3 * num4;
    document.write(`La suma de los números ingresados tiene como resultado ${suma} <br>`);
    document.write(`El producto de los números ingresado es ${producto}`);
};