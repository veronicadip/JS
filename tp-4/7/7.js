/* Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola. */

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    };
};

let agenda = [];

const aniadirContacto = function (nombre, telefono) {
    if (agenda.length <= 9) {
        let nuevoContacto = new Contacto(nombre, telefono);
        agenda.push(nuevoContacto);
    } else {
        document.write(`Agenda llena (límite de 10 contactos alcanzado).<br>`)
    };
};

const existeContacto = function (nombre) {
    if (agenda.map(obj => obj.nombre).includes(nombre)) {
        document.write(`El contacto ${nombre} ya existe.<br>`);
    } else {
        document.write(`El contacto ${nombre} no existe.<br>`);
    };
};

const listarContactos = function () {
    document.write(`Agenda de contactos:<br><ol>`);
    for (let i = 0; i <= agenda.length - 1; i++) {
        document.write(`<li>${agenda.at(i).nombre}: ${agenda.at(i).telefono}</li>`);
    };
    document.write(`</ol><br>`);
};

const buscarContacto = function (nombre) {
    let estaElContacto = false;
    for (let i = 0; i <= agenda.length - 1; i++) {
        if (agenda.at(i).nombre === nombre) {
            document.write(`${nombre}: ${agenda.at(i).telefono}<br>`);
            estaElContacto = true;
        };
    };
    if (estaElContacto === false) {
        document.write(`El contacto ${nombre} no existe.<br>`)
    };
};

const eliminarContacto = function (nombre) {
    let seBorro = false;
    for (let i = 0; i <= agenda.length - 1; i++) {
        if (agenda.at(i).nombre === nombre) {
            agenda.splice(i, 1);
            seBorro = true;
        };
    };
    seBorro === true ? document.write(`Se borró el contacto ${nombre}.<br>`) : document.write(`El contacto ${nombre} no existe.<br>`);
};

const agendaLlena = function () {
    agenda.length >= 10 ? document.write(`La agenda está llena.<br>`) : document.write(`La agenda no alcanzó su límite.<br>`);
};

const huecosLibres = function () {
    agenda.length <= 9 ? document.write(`La agenda tiene ${10 - agenda.length} espacios libres.<br>`) : document.write(`La agenda no tiene más espacios disponibles.<br>`)
};

let accion = prompt(`Menú de acciones. Apretar cancelar para leer instrucciones de uso.`).toLowerCase();

while (accion !== null) {
    if (accion === "añadir") {
        let nombre = prompt(`Ingrese el nombre del nuevo contacto.`);
        let telefono = prompt(`Ingrese su número telefónico.`);
        aniadirContacto(nombre, telefono);
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else if (accion === "existe") {
        let nombre = prompt(`Ingrese el nombre que desea buscar.`);
        existeContacto(nombre);
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else if (accion === "listar") {
        listarContactos();
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else if (accion === "buscar") {
        let nombre = prompt(`Ingrese el nombre del contacto que desea buscar.`);
        buscarContacto(nombre);
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else if (accion === "eliminar") {
        let nombre = prompt(`Ingresá el nombre del contacto que deseas eliminar.`);
        eliminarContacto(nombre);
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else if (accion === "llena") {
        agendaLlena();
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else if (accion === "libre") {
        huecosLibres();
        accion = prompt(`Si desea ejecutar otra acción, escribala. Sino apriete cancelar.`).toLowerCase();
    } else {
        accion = prompt(`Comando incorrecto. Si desea dejar de ejecutar acciones, apriete cancelar.`).toLowerCase();
    }
}