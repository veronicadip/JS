/* Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del
mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por
cuatro) */

let lado = parseInt(prompt(`Ingrese el tamaño de un lado del cuadrado.`));

if (isNaN(lado)) {
    document.write(`Porfavor, ingrese un número valido.`);
} else {
    total = lado * 4;
    document.write(`El perímetro del cuadrado es ${total}`);
};