/* Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un 
botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe 
poder ser eliminado con un botón creado para ese fin. */

// AGREGAR <li>
const ulPadre = document.querySelector(".ulPadre");
const agregarLi = function (p) {
  const nuevoLi = document.createElement("li");
  const texto = document.createTextNode(p);
  const eliminar = document.createElement("a");
  eliminar.textContent = "x";
  eliminar.addEventListener("click", (e) => {
    nuevoLi.remove();
  });
  nuevoLi.appendChild(texto);
  nuevoLi.appendChild(eliminar);
  ulPadre.appendChild(nuevoLi);
};

document.addEventListener("DOMContentLoaded", () => {
  // AGREGAR TAREA A LA LISTA
  const agregarTarea = document.querySelector(".agregarTarea");
  agregarTarea.addEventListener("click", (e) => {
    e.preventDefault();
    lista.push(e.target.form[0].value);
    agregarLi(e.target.form[0].value);
  });
});
