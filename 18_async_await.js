// asycn Await
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

const main = async () => {
  try {
    // Se va a almacenar lo le devuelva get data
    let resultado = await getData1(false);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

main();
