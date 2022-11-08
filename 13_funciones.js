// Funciones

//Funciones declarativa
function saludar() {
  console.log("Hola Miguel");
}

// Invocamos la funcion
saludar();

// Funcion con parametro
function saludo(nombre) {
  console.log(`Hola ${nombre}`);
}

saludo("Gabo");

//Funcion Retorna valor
function retornarNombre(nombre) {
  return `Hola ${nombre}`;
}
// Normalmente metes el valor retornado en una variable para luego manipularla
let retornoNombre = retornarNombre("Luis");

console.log(retornoNombre);

//Funciones Expresadas o Anonimas
const suma = function (a, b) {
  return a + b;
};

console.log(suma(3, 2));

//Arrow Funtion

const restar = (a, b) => {
  return a - b;
};

console.log(restar(5, 2));
