/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b) */

let largo = parseFloat(prompt(`Ingrese el largo del rectángulo.`));
let ancho = parseFloat(prompt(`Ingrese el ancho del rectángulo.`));

const calcularPerimetro = function (largo, ancho) {
    let perimetro = 2 * (largo + ancho);
    return document.write(`El perímetro del rectángulo ingresado es de ${perimetro}`);
};

calcularPerimetro(largo, ancho);

