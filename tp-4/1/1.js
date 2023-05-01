/* Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para 
permitir encender y apagar el auto. */

let encendido = true;

const encenderApagar = function (encendido) {
    return encendido ? encendido === false : encendido === true;
};

let auto = { color: "rojo", marca: "BMW", modelo: "X6", encenderApagar, encendido };

console.log(auto.encendido)
