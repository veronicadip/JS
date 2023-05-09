/* crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, 
el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información 
en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el 
cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que 
el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones 
al aeropuerto, buscar un avión y usar el método abordar. */

const abordar = function (capacidad, pasajeros, nuevoPasajero) {
    if (pasajeros.length < capacidad) {
        pasajeros.push(nuevoPasajero);
        document.write(`El pasajero ${nuevoPasajero} abordó con éxito.<br>`)
    } else {
        document.write(`La capacidad del avión está al máximo.<br>`);
    };
};

class Aeropuerto {
    constructor(nombre, listaAviones) {
        this.nombre = nombre;
        this.listaAviones = listaAviones;
    };
    agregarAvion(avion) {
        this.listaAviones.push(avion);
        document.write(`El avión ${avion.nombre} se agregó con éxito.<br>`);
    };
    buscarAvion(nombreAvion) {
        let seEncontro = false;
        for (let i = 0; i <= this.listaAviones.length - 1; i++) {
            if (this.listaAviones.at(i).nombre === nombreAvion) {
                let esteAvion = this.listaAviones.at(i);
                document.write(`Se encontró el avión ${nombreAvion}. Registra los siguientes datos:<br><ul><li>Capacidad: ${esteAvion.capacidad}</li>
                <li>Destino: ${esteAvion.destino}</li></ul>`);
                seEncontro = true;
            };
        };
        if (seEncontro === false) {
            document.write(`No se encontró un avión con el nombre ${nombreAvion} en la base de datos.<br>`);
        };
    };
};


let aeropuerto1 = new Aeropuerto("Aeropuerto Internacional", []);

aeropuerto1.agregarAvion({ nombre: "Boeing 747", capacidad: 300, destino: "Dubai", pasajeros: ["John Doe", "Jane Doe", "Fulanito"], abordar });
aeropuerto1.agregarAvion({ nombre: "Boeing 777", capacidad: 300, destino: "Nueva York", pasajeros: ["John Doe", "Jane Doe", "Fulanito"], abordar });
aeropuerto1.agregarAvion({ nombre: "Airbus A380", capacidad: 300, destino: "California", pasajeros: ["John Doe", "Jane Doe", "Fulanito"], abordar });
aeropuerto1.buscarAvion("Boeing 777");
aeropuerto1.listaAviones.at(1).abordar(aeropuerto1.listaAviones.at(1).capacidad, aeropuerto1.listaAviones.at(1).pasajeros, "Veronica Dip");