/* ○Objeto Persona
■Crear un objeto llamado persona que contenga los siguientes atributos:
●Nombre
●Edad
●DNI
●Domicilio
●Hijos (cantidad)
●Profesion
■Agregar Métodos:
●Saludar ( mensaje de presentación en navegador o consola)
●Listar (muestra la lista con los datos de la persona) */



let persona = { nombre: "Ema", edad: 24, dni: 12345678, domicilio: "Calle 500", hijos: 0, profesion: "Docente" };

function saludar(nombre, edad) {
    document.write(`Hola! me llamo ${nombre} y tengo ${edad} años. <hr>`)
};

function listar(nombre, edad, dni, domicilio, hijos, profesion) {
    document.write(`- Nombre: ${nombre}. <br> - Edad: ${edad}. <br> - DNI: ${dni}. <br> - Domicilio: ${domicilio}. <br> 
    - Cantidad de hijos: ${hijos}. <br> - Profresión: ${profesion}. <br>`);
};

saludar(persona.nombre, persona.edad);
listar(persona.nombre, persona.edad, persona.dni, persona.domicilio, persona.hijos, persona.profesion);