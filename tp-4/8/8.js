/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    };
    saludar() {
        document.write(`Hola! mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.<br>`);
    };
    despedirse() {
        document.write(`Un gusto haberte conocido!<br>`);
    };
};

let persona1 = new Persona("Carlos", 25, "Cheff");
let persona2 = new Persona("Martina", 37, "Doctora");

persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();