/* Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos
operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado
a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1); */

let nota1 = parseInt(prompt(`Ingrese primer nota.`));
let nota2 = parseInt(prompt(`Ingrese segunda nota.`));
let nota3 = parseInt(prompt(`Ingrese tercer nota.`));

let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    document.write(`Porfavor, ingrese números validos.`);
} else {
    console.log(promedio)

    if (promedio >= 7) {
        document.write(`El alumno fue promocionado.`);
    } else {
        document.write(`El alumno no logró promocionar.`);
    };
};