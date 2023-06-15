import { Persona } from './persona';
import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

// Crear registros de persona
const direccion1 = new Direccion('Calle Margarita', 123, 'A', '12345', 'Leganes', 'Madrid');
const direccion2 = new Direccion('Calle Rosa', 456, 'B', '54321', 'Alcorcon', 'Madrid');
const direccion3 = new Direccion('Calle Petunia', 789, 'C', '98765', 'Mostoles', 'Madrid');

const telefono1 = new Telefono('Móvil', '123456789');
const telefono2 = new Telefono('Casa', '987654321');
const telefono3 = new Telefono('Trabajo', '456789123');

const mail1 = new Mail('Personal', 'correopersonal@example.com');
const mail2 = new Mail('Trabajo', 'correotrabajo@example.com');
const mail3 = new Mail('Otro', 'correootro@example.com');

const persona1 = new Persona(
  'Juan',
  'Pérez',
  30,
  'X',
  '01/01/1990',
  'Azul',
  'Masculino',
  [direccion1],
  [mail1],
  [telefono1],
  'Notas para Juan Pérez'
);

const persona2 = new Persona(
  'María',
  'López',
  25,
  'Y',
  '02/02/1995',
  'Rojo',
  'Femenino',
  [direccion2],
  [mail2],
  [telefono2],
  'Notas para María López'
);

const persona3 = new Persona(
  'Carlos',
  'González',
  35,
  'Z',
  '03/03/1985',
  'Verde',
  'Masculino',
  [direccion3],
  [mail3],
  [telefono3],
  'Notas para Carlos González'
);

// Mostrar los registros originales
console.log('Registros originales:');
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());

// Modificar un registro por DNI y agregar nueva dirección, mail y teléfono
const dniBusqueda = 'X';
if (persona1.dniLetra === dniBusqueda) {
  const nuevaDireccion = new Direccion('Calle Girasol', 987, 'D', '56789', 'Getafe', 'Madrid');
  const nuevoMail = new Mail('Otro', 'correonuevo@example.com');
  const nuevoTelefono = new Telefono('Móvil', '987654321');

  persona1.agregarDireccion(nuevaDireccion);
  persona1.agregarMail(nuevoMail);
  persona1.agregarTelefono(nuevoTelefono);
}

// Mostrar los registros actualizados
console.log('\nRegistros actualizados:');
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
