/* 2- Ingresar dos números
- Si el primero es mayor que el segundo mostrar en consola la suma de ambos
- Si el primero es menor que el segundo mostrar en consola la resta del segundo
menos el primero.
- Si son iguales mostrar en consola la multiplicación de ambos. (ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3) */

let num1 = parseInt(prompt("Ingresar un número"));
let num2 = parseInt(prompt("Ingresar segundo número"));

if (num1 > num2) {
    resultado = num1 + num2;
    document.write(`${num1} es mayor que ${num2}, la suma de estos números es igual a ${resultado}`);
} else if (num1 < num2) {
    resultado = num2 - num1;
    document.write(`${num1} es menor que ${num2}, la resta de ${num2} - ${num1} es igual a ${resultado}`);
} else if (num1 === num2) {
    resultado = num1 * num2;
    document.write(`Los dos números ingresados son iguales, el resultado de la multiplicación ${num1} x ${num2} es igual a ${resultado}`);
} else if (isNaN(num1) || isNaN(num2)) {
    document.write(`Porfavor ingrese números validos`)
}