/* Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde
a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12. */

let mayorDoce = 0;
for (let i = 1; i <= 3; i++) {
    let base = parseFloat(prompt('Ingrese aquí la base del triángulo'));
    let altura = parseFloat(prompt('Ingrese aquí la altura del triángulo'));
    let superficie = (base * altura) / 2;
    if (superficie > 12) {
        mayorDoce++;
    }
    document.write(`El triáunglo nº ${i} tiene una base de ${base}, una altura de ${altura} y una superficie de ${superficie}. <br>`);
}
document.write(`Hay un total de ${mayorDoce} triángulos con una superficie mayor a 12.`);