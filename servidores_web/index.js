// Es el archivo que tendra todo nuestro servidor
const express = require("express");
const SERVICE = require("./src/services.js");

// Desde este paso ya la app puede recibir peticiones
const app = express();
const PORT = 5000;
// Nos permite revibir datos tipo json a nuestro servidor
app.use(express.json);

//aca la peticiones que vamos a escuchar en el servidor
//Cada uno recibe (ruta , controlador de ruta)
// el controlador , es un callback q recibira un request y respodera un response
app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: SERVICE.getUsers(),
  });
});

/* app.post("/create", (req, res) => {
  // metemos el cuerpo del request con los datos que recibimos en una variable
  // Usamos dessectructuracion de objeto para sacar el body del request y le asiganamos el nombre de newUser
  let { body: newUser } = req;
  let user = SERVICE.createUser(newUser);
  // Le colocamos la respuesta que va a recibir la peticion cuando este hecha
  res.json({
    message: "Usuario fue creado Exitosamente",
    body: user,
  });
}); */

//Para recibir peticiones hay que levantar el servidor y escuchar las peticiones
//Recibe un puerto , y un callback que nos indica cuando esta escuchando
app.listen(PORT, () => {
  console.log(`Servidor Escuchando en http://localhost:${PORT}`);
});
