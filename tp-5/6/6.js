/* Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a 
decrementar el contador. Debe contener los botones, iniciar, pausar y reset. */

let tiempo = 0;
let convertirMinutos;
let convertirSegundos;

// convertirSegundos = new Date(numero * 1000).toISOString().slice(11, 19);

const temporizador = document.getElementById("temporizador");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reset = document.getElementById("reset");

const setearTemporizador = function (numero) {
  convertirMinutos = new Date(numero * 60000).toISOString().slice(11, 19);
  temporizador.textContent = convertirMinutos.toString();
};

const setear = document.getElementById("setear");
setear.addEventListener("click", (e) => {
  e.preventDefault();
  tiempo = e.target.form[0].value;
  setearTemporizador(tiempo);
});
