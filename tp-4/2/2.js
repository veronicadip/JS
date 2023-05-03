/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
mostrar la descripción del estado de la cuenta. */

let cantidadTotal = 0;

const ingresar = function (dinero) {
    cantidadTotal = cantidadTotal + dinero;
};

const extraer = function (dinero) {
    cantidadTotal = cantidadTotal - dinero;
};

const informar = function () {
    document.write(`La cantidad de dinero actual es $${cantidadTotal} <br>`);
};

let cuenta = { titular: "Alex", saldo: 0, ingresar, extraer, informar };

informar();
ingresar(6000);
extraer(1500);
informar();