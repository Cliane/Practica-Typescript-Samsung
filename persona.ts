import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dniLetra: string;
  cumpleanios: string;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dniLetra: string,
    cumpleanios: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
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

  agregarDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  agregarMail(mail: Mail) {
    this.mails.push(mail);
  }

  agregarTelefono(telefono: Telefono) {
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

export { Persona };
