/* Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y
precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    };

    imprime() {
        document.write(`Información del producto: <br> <ul><li>Código: ${this.codigo}</li><li>Nombre: ${this.nombre}</li><li>Precio: $${this.precio}</li></ul>`);
    };
};

let producto1 = new Producto(34556, "Cereales", 700);
let producto2 = new Producto(12855, "Shampoo", 1050);
let producto3 = new Producto(91238, "Arroz", 300);

let productos = [producto1, producto2, producto3];

productos.map(producto => producto.imprime());

