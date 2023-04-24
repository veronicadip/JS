/* Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado
debemos utilizar el operador ==) */

let clave1 = prompt(`Ingrese su contraseña:`);
let clave2 = prompt(`Verificar contraseña:`);

if (clave1 === clave2) {
    document.write(`Las contraseñas coinciden.`)
} else {
    document.write(`Las contraseñas no coinciden. Vuelva a intentarlo.`)
};