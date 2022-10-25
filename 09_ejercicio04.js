/* 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés. */

let dia = "viernes";

switch (dia) {
  case "lunes":
    console.log("Monday");
    break;
  case "martes":
    console.log("tuesday");
    break;
  case "miercoles":
    console.log("wednesday");
    break;
  case "jueves":
    console.log("thurday");
    break;
  case "viernes":
    console.log("friday");
    break;
  case "sabado":
    console.log("saturday");
    break;
  case "domingo":
    console.log("sunday");
    break;

  default:
    console.log("El dia colocado no concuerda, verifique !!");
    break;
}
