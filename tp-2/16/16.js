/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares. */

let negativos = 0;
let positivos = 0;
let multiplos = 0;
let pares = 0;
let i = 1;

while (i <= 10) {
    i++;
    let num = parseInt(prompt(`Ingrese un número aquí.`));
    if (num > 0) {
        positivos = positivos + 1;
    } else {
        negativos = negativos + 1;
    };
    if (num % 15 === 0) {
        multiplos = multiplos + 1;
    };
    if (num % 2 === 0) {
        pares = pares + num
    };
};

document.write(`Valores negativos ingresados: ${negativos} <br> Valores positivos ingresados: ${positivos} <br> 
Valores múltiplos de 15 ingresados: ${multiplos} <br> La suma de los números pares ingresados da un total de: ${pares}<br>`);