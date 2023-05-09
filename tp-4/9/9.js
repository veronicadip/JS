/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" 
para verificar que cada animal emite el sonido adecuado. */

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    };
};

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    };
    emitirSonido() {
        document.write(`barf barf<br>`);
    };
};

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    };
    emitirSonido() {
        document.write("miau<br>");
    };
};

let perro1 = new Perro("Puki", 2);
let perro2 = new Perro("Tomi", 11);
let gato1 = new Gato("Pizza", 0);
let gato2 = new Gato("Rodolfo", 9);

perro1.emitirSonido();
perro2.emitirSonido();
gato1.emitirSonido();
gato2.emitirSonido();
