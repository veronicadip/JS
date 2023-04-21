/*5- Ingresar 3 números
● indicar cual es el mayor
● indicar cual es el menor
● obtener la raíz cuadrada del segundo número */

let num1 = parseInt(prompt(`Ingrese el primer número.`));
let num2 = parseInt(prompt(`Ingrese el segundo número.`));
let num3 = parseInt(prompt(`Ingrese el tercer número.`));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.write(`Porfavor, ingrese valores correctos.`)
} else {
    document.write(`El número de mayor valor es ${Math.max(num1, num2, num3)} <br>`);
    document.write(`El número de menor valor es ${Math.min(num1, num2, num3)} <br>`);
    document.write(`La raíz cuadrada del segundo número (${num2}), es ${Math.pow(num2, 2)}`);
};