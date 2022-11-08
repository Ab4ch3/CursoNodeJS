/* Manipulacion de Arreglos */

// ForEach
let letras = ["a", "b", "c", "d", "e"];
console.log(letras.length);

// Permite recorrer el arreglo
for (let i = 0; i < letras.length; i++) {
  const element = letras[i];
  console.log(element);
}

// Funciones Arrays
// Va a recorrer todo el arreglo pasando cada unos de los elementos del array
letras.forEach((elementos) => {
  console.log(elementos);
});

// Otra manera
letras.forEach((elementos) => console.log(elementos));

// push - shift - pop
let letras2 = ["a", "b", "c", "d", "e"];
// agregar un elemento al array
letras2.push("f");
console.log(letras2);
//Nos permite obtener el primer valor de un arreglo y va a sacar el elemento del array
let primerElemento = letras2.shift();
console.log(primerElemento);
console.log(letras2);
//nos permite obtener el ultima valor del arreglo y va a sacar el elemento del arreglo
let ultimoElemento = letras2.pop();
console.log(letras2);
console.log(ultimoElemento);

// Map
let estudiantes = ["miguel", "gabriel", "carlos", "perrito"];
// va a recorrer el array estudiante y los va a tranformar a nuestra conveniencia ,en este caso esta pasandole cada elemento del array estudiantes y va a retornar un objeto
let asistencia = estudiantes.map((estudiante) => {
  return {
    nombre: estudiante,
    asistencia: false,
  };
});
console.log(estudiantes);
console.log(asistencia);

// Tambien se puede hacer tipo arrow funtion
let asistencia2 = estudiantes.map((estudiante) => `${estudiante}`);
console.log(asistencia2);

let productos = [
  { nombre: "camiseta", precio: 15 },
  { nombre: "camiseta", precio: 15 },
  { nombre: "pantalon", precio: 25 },
];

let productosImpuestos = productos.map((producto) => {
  return {
    // el spread operartor lo que esta tomando son todas las propiedades de producto para genere un nuevo objeto colocando las propiedades adicionales
    ...producto,
    impueto: 0.12,
  };
});
console.log(productos);
console.log(productosImpuestos);

let precios = productos.map((producto) => {
  return producto.precio;
});

console.log(precios);

// Filter
let estudiantes2 = [
  { nombre: "ada", edad: 15, matriculado: true },
  { nombre: "jorge", edad: 29, matriculado: false },
  { nombre: "miguel", edad: 25, matriculado: true },
];

let filtrar = estudiantes2.filter((estudiante) => {
  return estudiante.edad >= 21 && estudiante.matriculado;
});

console.log(estudiantes2);
console.log(filtrar);

// Reduce
let calificaciones = [3, 5, 9, 10, 10];
//El reduce recibe dos parametros , una funcion y una valor inical del acumulador
//recibe un acumulador que sumara las notas y el elemento que recorrera en este caso "calificacion" ,
//se le especifica que vaya reduciendo todo el arreglo en acumulador, y se le asigna estado inical al acumulador
let sumaCalf = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
// Sacando promedio de la nota
console.log(sumaCalf / calificaciones.length);

let edades = [21, 21, 23, 43, 21, 41, 18, 18, 23, 23];

let result = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});

console.log(result);

let ventas = [
  { nombre: "camiseta", precio: 15, totalVendidas: 10 },
  { nombre: "zapatillas", precio: 150, totalVendidas: 8 },
  { nombre: "pantalon", precio: 20, totalVendidas: 30 },
];

//Obtener el total de productos vendidos
let resultadp = ventas.reduce((acumulador, productoVendido) => {
  let totalVentas = productoVendido.precio * productoVendido.totalVendidas;
  //la clave que se esta creando
  acumulador[productoVendido.nombre] = totalVentas;
  return acumulador;
}, {});

console.log(resultadp);

let estudiantes3 = [
  { nombre: "ada", edad: 15, matriculado: true },
  { nombre: "jorge", edad: 29, matriculado: false },
  { nombre: "miguel", edad: 25, matriculado: true },
];
//Con map obtenemos un array con los valores de matriculados
let resultadoMatriculado = estudiantes3
  .map((estudiante) => estudiante.matriculado)
  // Reduce se puede anidar si el objeto que devuelve map es un interable
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );
console.log(resultadoMatriculado);

//Array some , every
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// va a buscar dentro del array de numero , su hay almenos alguno que sea par
let numerosPar = numero.some((numero) => numero % 2 == 0);

console.log(numerosPar); //devolvera true

//every
let numero2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let validacion = numero2.every((numero) => numero % 2 == 0);
console.log(validacion);
