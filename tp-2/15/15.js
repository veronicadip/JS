/* Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en
el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y
cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de
puntos a procesar. */

let cuadrante1 = 0;
let cuadrante2 = 0;
let cuadrante3 = 0;
let cuadrante4 = 0;
let cantidad = parseInt(prompt(`Ingrese la cantidad de puntos que desea procesar.`));

for (let i = 0; i < cantidad; i++) {
    let x = parseInt(prompt(`Ingrese el valor x.`));
    let y = parseInt(prompt(`Ingrese el valor y.`));

    if (x > 0 && y > 0) {
        cuadrante1 = cuadrante1 + 1;
    } else if (x <= 0 && y > 0) {
        cuadrante2 = cuadrante2 + 1;
    } else if (x <= 0 && y <= 0) {
        cuadrante3 = cuadrante3 + 1;
    } else {
        cuadrante4 = cuadrante4 + 1;
    };
}

document.write(`Se ingresaron la siguiente cantidad de puntos en los cuadrantes: <br> 
Cuadrante 1 = ${cuadrante1} <br> Cuadrante 2 = ${cuadrante2} <br> Cuadrante 3 = ${cuadrante3} <br> Cuadrante 4 = ${cuadrante4} <br> `);