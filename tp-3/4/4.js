/* Escribir el código de una función a la que se pasa como parámetro un número 
entero y devuelve como resultado una cadena de texto que indica si el número es 
par o impar. Mostrar por pantalla el resultado devuelto por la función. */

let num = parseInt(prompt(`Ingrese un número.`));

const esPar = function (num) {
    if (num % 2 === 0) {
        return document.write(`El número que ingresó es par.`);
    } else {
        return document.write(`El número que ingresó es impar.`);
    }
};

esPar(num);