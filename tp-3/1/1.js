/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo. */

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let mes = "";

document.write(`<h1>Lista de meses:</h1><ul>`);

for (let i = 0; i <= 11; i++) {
    mes = meses.at(i);
    document.write(`<li> <p> ${mes} <p> </li>`);
};

document.write(`</ul>`);
