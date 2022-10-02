console.log(`Trabajando con listas`);

const Bogota = "Bogota";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";

console.log(Bogota, Lima, Santiago, BuenosAires);

/* Listas */
// const ciudadesDisponibles = ['Bogotá', 'Lima', 'Santiago', 'Buenos Aires'];
const ciudadesDisponibles = new Array();
console.log(ciudadesDisponibles);
ciudadesDisponibles.push('Bogotá');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');
console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];
ciudadesMasVendidas.push('Sao Pablo');
ciudadesMasVendidas.push('Buenos Aires');
console.log(ciudadesMasVendidas);
// funciones disponibles
console.log(ciudadesDisponibles[2]);
console.log(ciudadesMasVendidas[0]);


// .length es para contar la cantidad de variables que tenga el arreglo

const cantidadCiduades = ciudadesDisponibles.length;

console.log(`tenemos ${cantidadCiduades} ciudades disponibles`);

// eliminar elemento de la lista
ciudadesDisponibles.splice(1,1);
console.log(ciudadesDisponibles);

// Cambio realizado para practica de git