console.log('Asignacion variables');

let miNombre = "Miguel";
let miApellido = "Silva";
console.log(miNombre);
console.log(miNombre);

/*Plantillas de texto*/
const miNombreCompleto = miNombre + " " + miApellido;
console.log(miNombreCompleto);
const textoMiNombre = `Mi nombre es ${miNombre} ${miApellido}`;
console.log(textoMiNombre);
/*inmutabilidad */
let variableTexto = "Un texto";
console.log(variableTexto);

variableTexto = 10;
console.log(variableTexto);