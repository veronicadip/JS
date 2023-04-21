/* 3- Realizar un programa que lea cuatro valores numéricos e informar su suma y producto. */

let num1 = parseInt(prompt(`Introduzca el primer número`));
let num2 = parseInt(prompt(`Introduzca el segundo número`));
let num3 = parseInt(prompt(`Introduzca el tercer número`));
let num4 = parseInt(prompt(`Introduzca el cuarto número`));

console.log(isNaN(num1) && isNaN(num2) && isNaN(num3) && isNaN(num4))

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) == true) {
    document.write(`Porfavor, ingrese números validos.`)
} else {
    let suma = num1 + num2 + num3 + num4;
    let producto = num1 * num2 * num3 * num4;
    document.write(`La suma de los números ingresados da un resultado de ${suma} y su producto es ${producto}`);
}