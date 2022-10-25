/* 
1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
*/

let tablas = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let multiplos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let tabla of tablas) {
  for (const multiplo of multiplos) {
    console.log(`${tabla} * ${multiplo} es igual ${tabla * multiplo} `);
  }
}
