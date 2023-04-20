/* 1- La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes 
presentarse de una manera más interactiva y eficiente , por eso deciden acudir a un 
programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad
favorita y deporte favorito en una tarjeta de presentación predeterminada. */

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tenés?");
let actividad = prompt("¿Cuál es tu actividad favorita?");
let deporte = prompt("¿Cuál es tu deporte favorito?");

if (nombre && edad && actividad && deporte) {
    document.write(`Hola! mi nombre es ${nombre}, tengo ${edad} años, mi actividad favorita es ${actividad} y mi deporte favorito es ${deporte}.`)
} else {
    document.write("Porfavor, debes completar todos los campos.")
}