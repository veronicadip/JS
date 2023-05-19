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

  mostrarGeneracion() {
    if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      document.write(
        `${this.nombre} pertenece a la generación "Silent Generation" de la cual su razgo característico es la austeridad.<br>`
      );
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      document.write(
        `${this.nombre} pertenece a la generación "Baby Boom" de la cual su razgo característico es la ambición.<br>`
      );
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      document.write(
        `${this.nombre} pertenece a la generación "X" de la cual su razgo característico es la obsesión por el éxito.<br>`
      );
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      document.write(
        `${this.nombre} pertenece a la generación "Y" (Millennial) de la cual su razgo característico es la frustración.<br>`
      );
    } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      document.write(
        `${this.nombre} pertenece a la generación "Z" de la cual su razgo característico es la irreverencia.<br>`
      );
    } else {
      document.write(
        `No tenemos información actualmente sobre la generación de ${this.nombre}<br>`
      );
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`${this.nombre} es mayor de edad.<br>`);
    } else {
      document.write(`${this.nombre} es menor de edad.<br>`);
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

let persona1 = new Persona("Pedro", 31, 87654321, "H", 82, 178, 1992);
