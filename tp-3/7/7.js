/* Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar 
solo los resultados del 1 al 10 del número elegido por el usuario. */

let num = parseInt(prompt(`Ingrese un número del 1 al 10.`));

let i = 1;

if (isNaN(num) || num < 1 || num > 10) {
    document.write(`Porfavor, ingrese un número válido, no menor a 1 ni mayor a 10.`);
} else {
    while (i <= 10) {
        document.write(`${num} x ${i} = ${num * i} <br>`);
        i = i + 1;
    };
};