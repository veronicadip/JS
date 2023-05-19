/* Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número 
aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número 
y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo 
adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. */

document.addEventListener("DOMContentLoaded", () => {
  let numero = undefined;

  const crearNumero = function () {
    let min = Math.ceil(1);
    let max = Math.floor(11);
    numero = Math.floor(Math.random() * (max - min) + min);
  };

  const botonJugar = document.querySelector(".botonJugar");
  const form = document.querySelector(".form");

  botonJugar.addEventListener("click", (e) => {
    crearNumero();
    console.log(numero);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let respuesta = parseInt(e.currentTarget[0].value);
    console.log(respuesta);

    if (numero === respuesta) {
      alert(`Adivinaste el número mágico!`);
    } else if (numero < respuesta && respuesta <= 10) {
      alert(`El número que ingresaste es mayor que el número mágico.`);
    } else if (numero > respuesta && respuesta >= 1) {
      alert(`El número que ingresaste es menor que el número mágico.`);
    } else if (numero === undefined) {
      alert(`Primero genere un número.`);
    } else {
      alert(`Debe ingresar un número válido.`);
    }
  });
});
