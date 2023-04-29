/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la 
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno 
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y 
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

const tirarDados = function () {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
};

let dado1 = 0;
let dado2 = 0;
let suma = 0;
let sumas = [];

for (let i = 1; i <= 50; i++) {
    dado1 = tirarDados();
    dado2 = tirarDados();
    suma = dado1 + dado2;
    sumas.push(suma);
};

document.write(`<table><thead><tr><th>Suma</th><th>Apariciones</th></tr></thead>`);
for (let i = 2; i <= 12; i++) {
    document.write(`<tr><td>${i}</td><td>${sumas.filter(num => num === i).length}</td></tr>`);
};

document.write(`</table>`);