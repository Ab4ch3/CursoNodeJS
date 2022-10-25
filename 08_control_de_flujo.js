/* control de flujo */

// Estructura if

let llueve = true;
// Como es verdadero entrara en el bloque de codigo
if (llueve) {
  console.log("Necesito sombrilla");
}

let administrador = "administrador2";
// Si administrador es exactamente igual en valor y tipo entrar en el bloque
if (administrador === "administrador") {
  console.log("Eres un Administrador");
} else {
  //Sera el bloque que ejecutara en caso de que sea falso
  console.log("No eres un Administrador");
}

/*  switch-case */

let producto = "avena2";
switch (producto) {
  case "harina":
    console.log("El producto es Harina cuenta 10$");
    break;
  case "avena":
    console.log("El producto es avena cuesta 1.4$");
    break;

  default:
    console.log("No existe Producto");
    break;
}
