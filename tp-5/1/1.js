/* Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número 
aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número 
y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo 
adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. */


let numero = 0;
let respuesta = 0;

const crearNumero = function () {
    let min = Math.ceil(1);
    let max = Math.floor(11);
    numero = Math.floor(Math.random() * (max - min) + min);
};

const botonJugar = document.querySelector(".botonJugar");
const formNumero = document.querySelector(".formNumero");
const botonRespuesta = document.querySelector(".botonRespuesta");

botonJugar.addEventListener("click", e => {
    crearNumero();
    console.log(numero)
});

formNumero.addEventListener("input", e => {
    respuesta = parseInt(e.target.value)
    console.log(respuesta)
});

botonRespuesta.addEventListener("click", e => {
    if (numero === respuesta) {
        alert(`Adivinaste el número mágico!`);
    } else if (numero < respuesta && respuesta <= 10) {
        alert(`El número que ingresaste es mayor que el número mágico.`);
    } else if (numero > respuesta && respuesta >= 1) {
        alert(`El número que ingresaste es menor que el número mágico.`);
    } else {
        alert(`Porfavor, ingresa un número válido`);
    }
});