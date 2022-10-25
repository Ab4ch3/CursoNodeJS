/*  2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch*/

let total = 24;

if (total <= 10) {
  total += 3;
  console.log(`El total de la compra ${total}`);
} else if (total <= 20 && total > 10) {
  total += 5;
  console.log(`El total de la compra ${total}`);
} else if (total <= 50 && total > 20) {
  total += 7;
  console.log(`El total de la compra ${total}`);
} else if (total > 50) {
  console.log(`El total de la compra ${total} y se realizara el envio gratis`);
}
