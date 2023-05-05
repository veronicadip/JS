/* Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro {
    constructor(isbn, titulo, autor, paginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    };
    set cambiarIsbn(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    };
    set cambiarTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    };
    set cambiarAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    };
    set cambiarPaginas(nuevasPaginas) {
        this.paginas = nuevasPaginas;
    };
    get mostrarLibro() {
        document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas.<br>`);
    };
};

const mayorCantidad = function (titulo1, titulo2, num1, num2) {
    if (num1 > num2) {
        document.write(`${titulo1} tiene una mayor cantidad de páginas.<br>`);
    } else if (num1 === num2) {
        document.write(`Ambos libros tienen la misma cantidad de páginas.<br>`);
    } else {
        document.write(`${titulo2} tiene una mayor cantidad de páginas.<br>`);
    };
};

let libro1 = new Libro(9788426481023, "Poesía Completa", "Alejandra Pizarnik", 427);
let libro2 = new Libro(9789501239874, "El seminario el reverso del psicoanálisis", "Jacques Lacan", 232);

libro1.mostrarLibro;
libro1.cambiarIsbn = 1234;
libro1.cambiarPaginas = 560;
libro1.mostrarLibro;
libro2.mostrarLibro;
mayorCantidad(libro1.titulo, libro2.titulo, libro1.paginas, libro2.paginas);