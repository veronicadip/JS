/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando 
el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

let ciudades = [];
let ciudad = "";
let parar = false

while (parar == false) {
    ciudad = prompt(`Ingrese la ciudad que desee agregar a la lista.`);
    if (ciudad !== null) {
        ciudades.push(ciudad);
    } else {
        parar = true;
    }
};

document.write(`<h1>Ciudades guardadas en el array:</h1><ul>`);
for (let i = 0; i <= ciudades.length - 1; i++) {
    ciudad = ciudades.at(i);
    document.write(`<li><p>${ciudad}</p></li>`);
};

document.write(`</ul><br><p>La longitud del array "ciudades" es de ${ciudades.length} elementos.</p>`);

if (ciudades.length >= 3) {
    document.write(`<ul> <li><p>Elemento nº 1:  ${ciudades.at(0)}</p></li><li><p>Elemento nº 3:  ${ciudades.at(2)}</p></li><li><p>Último elemento:  ${ciudades.at(-1)}</p></li></ul>`);
} else {
    document.write(`<ul> <li><p>Elemento nº 1:  ${ciudades.at(0)}</p></li><li><p>Elemento nº 3:  No existe un tercer elemento.</p></li><li><p>Último elemento:  ${ciudades.at(-1)}</p></li></ul>`)
};

ciudades.push(`París`);

document.write(`<p>Al ser modificado el array, el elemento en la última posición es  ${ciudades.at(-1)}.</p><br>`);
document.write(`<p>El elemento nº 2 es: ${ciudades.at(1)}</p>`);

ciudades.splice(1, 0, `Barcelona`);

document.write(`<p>Al ser modificado el array, la segunda ciudad ahora es ${ciudades.at(1)}.</p>`);