// Crear una web con un reloj que muestre la siguiente información: fecha y hora.

document.addEventListener("DOMContentLoaded", () => {
  let fecha = document.getElementById("#fecha");
  let hora = document.getElementById("#hora");
});

setInterval(() => {
  let fechaActual = new Date();
  const opcionesFecha = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const convertirFecha = new Intl.DateTimeFormat("es-ES", opcionesFecha);
  const fechaConvertida = convertirFecha.format(fechaActual);

  const opcionesHora = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const convertirHora = new Intl.DateTimeFormat("es-ES", opcionesHora);
  const horaConvertida = convertirHora.format(fechaActual);
  fecha.textContent = fechaConvertida;
  hora.textContent = horaConvertida;
}, 1000);
