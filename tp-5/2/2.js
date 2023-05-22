/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo 
ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, 
es “mayor de edad” e indicar en un alert el resultado de la función correspondiente. */

document.addEventListener("DOMContentLoaded", () => {
  // CLASE PERSONA
  class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.nacimiento = nacimiento;
    }
    // METODOS
    mostrarGeneracion() {
      if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
        alert(
          `${this.nombre} pertenece a la generación "Silent Generation" de la cual su razgo característico es la austeridad.`
        );
      } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
        alert(
          `${this.nombre} pertenece a la generación "Baby Boom" de la cual su razgo característico es la ambición.`
        );
      } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
        alert(
          `${this.nombre} pertenece a la generación "X" de la cual su razgo característico es la obsesión por el éxito.`
        );
      } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
        alert(
          `${this.nombre} pertenece a la generación "Y" (Millennial) de la cual su razgo característico es la frustración.`
        );
      } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
        alert(
          `${this.nombre} pertenece a la generación "Z" de la cual su razgo característico es la irreverencia.`
        );
      } else {
        alert(
          `No tenemos información actualmente sobre la generación de ${this.nombre}`
        );
      }
    }
    esMayorDeEdad() {
      if (this.edad >= 18) {
        alert(`${this.nombre} es mayor de edad.`);
      } else {
        alert(`${this.nombre} es menor de edad.`);
      }
    }
    mostrarDatos() {
      document.write(`Información de la persona: <br><ul><li>Nombre: ${this.nombre}</li><li>Edad: ${this.edad}</li><li>DNI: ${this.dni}</li><li>Sexo: ${this.sexo}</li>
          <li>Peso: ${this.peso} kg</li><li>Altura: ${this.altura} cm</li><li>Año de nacimiento: ${this.nacimiento}</li></ul>`);
    }
    generarDNI() {
      let min = Math.ceil(1);
      let max = Math.floor(100000000);
      return Math.floor(Math.random() * (max - min) + min);
    }
  }

  // LISTA DE USUARIOS Y FUNCION PARA GENERAR UNO NUEVO
  let listaDeUsuarios = [];

  const generarUsuario = function (
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    nacimiento
  ) {
    let nuevoUsuario = new Persona(
      nombre,
      edad,
      dni,
      sexo,
      peso,
      altura,
      nacimiento
    );
    listaDeUsuarios.push(nuevoUsuario);
  };

  // FUNCIONALIDAD DEL FORM
  const enviar = document.querySelector(".enviar");
  enviar.addEventListener("click", (e) => {
    e.preventDefault();
    let nombreUsuario = e.target.form[0].value;
    let edadUsuario = e.target.form[1].value;
    let dniUsuario = e.target.form[2].value;
    let sexoUsuario = "F";
    if (e.target.form[3].checked) {
      let sexoUsuario = "F";
    } else {
      let sexoUsuario = "H";
    }
    let pesoUsuario = e.target.form[5].value;
    let alturaUsuario = e.target.form[6].value;
    let nacimientoUsuario = e.target.form[7].value.slice(0, 4);

    generarUsuario(
      nombreUsuario,
      edadUsuario,
      dniUsuario,
      sexoUsuario,
      pesoUsuario,
      alturaUsuario,
      nacimientoUsuario
    );
  });

  // FUNCIONALIDAD BOTONES
  const botonGeneracion = document.querySelector(".botonGeneracion");
  botonGeneracion.addEventListener("click", (e) => {
    if (listaDeUsuarios[0] === undefined) {
      alert(`Usted todavía no registró ningún usuario.`);
    } else {
      listaDeUsuarios[0].mostrarGeneracion();
    }
  });

  const botonEdad = document.querySelector(".botonEdad");
  botonEdad.addEventListener("click", (e) => {
    if (listaDeUsuarios[0] === undefined) {
      alert(`Usted todavía no registró ningún usuario.`);
    } else {
      listaDeUsuarios[0].esMayorDeEdad();
    }
  });
});
