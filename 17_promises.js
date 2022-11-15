// Promises
//Esta manera es una funcion que retorna una nueva promesa, al ser una funcion que retorna se le pueden pasar parametros
const getData1 = (error) => {
  // new promises recibe un callback
  // el resolve se devolvera cuando la respuesta sea exitosa
  //y el reject se devolvera cuando haya errores
  return new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          // Se le especifica lo datos que queremos retorna si cumple con la condicion
          nombre: "miguel",
          apellido: "Abache",
        });
      }, 3000);
    } else {
      //Es la respuesta negativa de la promesa
      reject("no se pudieron obntener los datos");
    }
  });
};

console.log("inicio");

// para resolver las promesa podemos usar then y cath
//ambos reciben un callback
getData1(false)
  .then((data) => {
    // .then se usa para devvolver la respuesta positiva
    console.log(data);
  })
  // En las promesas  podemos encadenarlas con otras promesas
  .catch((error) => {
    //.cath para capturar errores
    console.log(error);
  });

console.log("fin");

//Esta manera dice que la variable es igual a una promesa, de esta manera no se le puede pasar parametros a la promesa
const suma = new Promise((res, rej) => {});
