/* De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la
siguiente información: nombre del postulante, cantidad total de preguntas que se le
realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar
un programa que lea los datos del postulante e informe el nivel del mismo según el
porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%. */

let nombre = prompt(`Ingrese el nombre del postulante:`);
let preguntas = parseInt(prompt(`Ingrese la cantidad de preguntas que le realizaron:`));
let correctas = parseInt(prompt(`Ingrese la cantidad de respuestas correctas del postulante:`));

function porcentaje(x, y) {
    return (x / y) * 100;
};

let promedio = porcentaje(correctas, preguntas);

document.write(`Nombre del postulante: ${nombre} <br>`);

if (isNaN(preguntas) || isNaN(correctas)) {
    document.write(`Porfavor, ingrese números válidos`);
} else if (promedio >= 90) {
    document.write(`Nivel: superior.`);
} else if (promedio >= 75 && promedio < 90) {
    document.write(`Nivel: medio.`);
} else if (promedio >= 50 && promedio < 75) {
    document.write(`Nivel: regular.`);
} else if (promedio < 50 && promedio >= 0) {
    document.write(`Fuera de nivel.`);
} else {
    document.write(`Porfavor, ingrese números mayores a cero.`);
};