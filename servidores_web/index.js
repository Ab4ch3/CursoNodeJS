// Es el archivo que tendra todo nuestro servidor
const express = require("express");

// Desde este paso ya la app puede recibir peticiones
const app = express();
const PORT = 3000;

//aca la peticiones que vamos a escuchar en el servidor
//Cada uno recibe (ruta , controlador de ruta)
// el contraloador , es un callback q recibira un request y respodera un response
app.get("/", (req, res) => {
  res.json({
    message: "Hola mundo desde express",
  });
});

//Para recibir peticiones hay que levantar el servidor y escuchar las peticiones
//Recibe un puerto , y un callback que nos indica cuando esta escuchando
app.listen(PORT, () => {
  console.log(`Servidor Escuchando en http://localhost:${PORT}`);
});
