/* Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales),
isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad. */

let equilateros = 0;
let isosceles = 0;
let escalenos = 0;

for (let i = 1; i < 4; i++) {
    let lado1 = parseFloat(prompt(`Ingrese el valor del primer lado del triángulo nº ${i}`));
    let lado2 = parseFloat(prompt(`Ingrese el valor del segundo lado del triángulo nº ${i}`));
    let lado3 = parseFloat(prompt(`Ingrese el valor del tercer lado del triángulo nº ${i}`));

    if (lado1 === lado2 && lado2 === lado3) {
        document.write(`El triángulo nº ${i} es equilátero. <br>`);
        equilateros = equilateros + 1;
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        document.write(`El triángulo nº ${i} es escaleno. <br>`);
        escalenos = escalenos + 1;
    } else {
        document.write(`El triángulo nº ${i} es isósceles. <br>`);
        isosceles = isosceles + 1;
    };
};

document.write(`Cantidad de equilateros: ${equilateros}. <br> Cantidad de isosceles: ${isosceles}. <br> Cantidad de escalenos: ${escalenos}. <br>`);

if (equilateros < isosceles && equilateros < escalenos) {
    document.write(`El tipo de triángulo del que hay menor cantidad es el equilátero. <br>`);
} else if (isosceles < equilateros && isosceles < escalenos) {
    document.write(`El tipo de triángulo del que hay menor cantidad es el isosceles. <br>`);
} else {
    document.write(`El tipo de triángulo del que hay menor cantidad es el escaleno. <br>`);
};