"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dniLetra, cumpleanios, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dniLetra = dniLetra;
        this.cumpleanios = cumpleanios;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    agregarDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    agregarMail(mail) {
        this.mails.push(mail);
    }
    agregarTelefono(telefono) {
        this.telefonos.push(telefono);
    }
    obtenerDatos() {
        return {
            nombre: this.nombre,
            apellidos: this.apellidos,
            edad: this.edad,
            dniLetra: this.dniLetra,
            cumpleanios: this.cumpleanios,
            colorFavorito: this.colorFavorito,
            sexo: this.sexo,
            direcciones: this.direcciones,
            mails: this.mails,
            telefonos: this.telefonos,
            notas: this.notas,
        };
    }
}
exports.Persona = Persona;
