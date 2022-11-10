// callbacks
// Funcio recibe 2 parametro y una funcion callback
const suma = (a, b, cb) => {
  // Quiere decir que el callback es la que nos retornara la suma de a + b
  cb(a + b);
};
// Declaramos una funcion que imprimira la data
const imprimir = (data) => console.log(data);

// al ejecutar la funcion le pasamos 2 parametrso que seran la suma , y le pasamos la funcion que ejecutara cuando esto este listo
suma(1, 2, imprimir);

const getdata = (cb) => {
  setTimeout(() => {
    cb({
      nombre: "miguel",
      apellido: "abache",
    });
  }, 3000);
};

const imprimirData = (data) => {
  console.log(data);
};
//ejecutamos la funcion y cuandoe esta termine ejecutara el imprimir data
getdata(imprimirData);
