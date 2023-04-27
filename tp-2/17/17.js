/* Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un
promedio de edades mayor. */

let mañana = 0;
let tarde = 0;
let noche = 0;

for (let i = 1; i <= 5; i++) {
    mañana = mañana + parseInt(prompt(`Porfavor, ingrese la edad del alumno nº ${i} del turno mañana.`));
};

for (let i = 1; i <= 6; i++) {
    tarde = tarde + parseInt(prompt(`Porfavor, ingrese la edad del alumno nº ${i} del turno tarde.`));
};

for (let i = 1; i <= 11; i++) {
    noche = noche + + parseInt(prompt(`Porfavor, ingrese la edad del alumno nº ${i} del turno noche.`));
}

let promedioMañana = mañana / 5;
let promedioTarde = tarde / 6;
let promedioNoche = noche / 11;

document.write(`- Promedio de las edades de los alumnos por cada turno: <br> - Mañana: ${promedioMañana} <br> - Tarde: ${promedioTarde} <br> - Noche: ${promedioNoche} <br>`);

if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
    document.write(`Los alumnos con un promedio de edad mayor, son los del turno mañana. <br>`);
} else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche) {
    document.write(`Los alumnos con un promedio de edad mayor, son los del turno tarde. <br>`);
} else {
    document.write(`Los alumnos con un promedio de edad mayor, son los del turno noche. <br>`);
};
