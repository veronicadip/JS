/* Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función 
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o 
por una mezcla de ambas. */

let texto = prompt(`Ingrese un texto`);

const testearTexto = function (texto) {
    let tieneMay = /[A-Z]/.test(texto);
    let tieneMin = /[a-z]/.test(texto);
    if (tieneMay && tieneMin) {
        document.write(`La cadena de texto contiene mayúsculas y minúsculas.`)
    } else if (tieneMay === true) {
        document.write(`La cadena de texto solo contiene mayúsculas.`)
    } else {
        document.write(`La cadena de texto solo contiene minúsculas.`)
    }
};

testearTexto(texto);

