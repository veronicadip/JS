/* Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la
tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36. */

let num = parseInt(prompt(`Ingrese un número del 1 al 10.`));

let i = 1;

if (isNaN(num) || num < 1 || num > 10) {
    document.write(`Porfavor, ingrese un número válido, no menor a 1 ni mayor a 10.`);
} else {
    while (i <= 12) {
        document.write(`${num} x ${i} = ${num * i} <br>`);
        i = i + 1;
    };
};
