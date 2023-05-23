// Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

document.addEventListener("DOMContentLoaded", () => {
  const cronometro = document.getElementById("cronometro");
  const start = document.getElementById("start");
  const pause = document.getElementById("pause");
  const reset = document.getElementById("reset");
  let interval;
  let numero = 0;
  let convertirSegundos;

  const runTimer = () => {
    numero = numero + 1;
    convertirSegundos = new Date(numero * 1000).toISOString().slice(11, 19);
    cronometro.textContent = convertirSegundos.toString();
  };

  start.addEventListener("click", (e) => {
    e.preventDefault();
    interval = setInterval(runTimer, 1000);
  });

  pause.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(interval);
  });

  reset.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(interval);
    numero = 0;
    cronometro.textContent = "00:00:00";
  });
});
