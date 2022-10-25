/* Ciclos */

//Ciclo While

let contador = 0;
while (contador <= 10) {
  console.log("Hola Mundo");
  contador += 1;
}

// Do-while
let contar = 1;
do {
  console.log("Ejecutando");
  contar++;
} while (contar <= 10);

// For

for (let i = 0; i <= 5; i++) {
  console.log("Hola mundo" + i);
}

//  for in

const datos = {
  nombre: "miguel",
  apellido: "abache",
  edad: 30,
};
for (let clave in datos) {
  console.log(clave, datos[clave]);
}

//For of
let arreglo = [1, 2, 3, 4, 5];
let palabra = "Hola";

for (let valor of palabra) {
  console.log(valor);
}
// No se usa para objetos. los objetos no son iterables
