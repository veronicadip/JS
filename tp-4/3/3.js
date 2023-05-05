/* Escribe una clase que permita crear distintos objetos “rectángulos”, con las 
propiedades de alto y ancho, mas los métodos necesarios para modificar y 
mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    };
    calcPerimetro() {
        return 2 * (this.alto + this.ancho);
    };
    calcArea() {
        return this.alto * this.ancho;
    };
    mostrarProp() {
        return (document.write(`Las propiedades del rectángulo son las siguientes: <br> <ul><li>Alto: ${this.alto}</li><li>Ancho: ${this.ancho}</li>
        <li>Perímetro: ${this.calcPerimetro()}</li><li>Área: ${this.calcArea()}</li></ul><br>`));
    };
}

let rectangulo1 = new Rectangulo(14, 35);

rectangulo1.mostrarProp();