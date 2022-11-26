// Es el archivo que tendra todo nuestro servidor
const express = require("express");
const SERVICE = require("./src/services");

// Desde este paso ya la app puede recibir peticiones
const app = express();
const PORT = 3000;
// Nos permite revibir datos tipo json a nuestro servidor
app.use(express.json());

//aca la peticiones que vamos a escuchar en el servidor
//Cada uno recibe (ruta , controlador de ruta)
// el controlador , es un callback q recibira un request y respodera un response
app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: SERVICE.getUsers(),
  });
});
// get recibiendo parametros
app.get("/:id", (req, res) => {
  // Estamos sacando de request del objeto params el id que le estamos pasando a la ruta
  let {
    params: { id },
  } = req;
  let user = SERVICE.getUserByID(id);
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

app.post("/", (req, res) => {
  // metemos el cuerpo del request con los datos que recibimos en una variable
  // Usamos dessectructuracion de objeto para sacar el body del request y le asiganamos el nombre de newUser
  let { body: newUser } = req;
  let user = SERVICE.createUser(newUser);
  // Le colocamos la respuesta que va a recibir la peticion cuando este hecha
  // Podemos cambiar el tipo de codigo que va a enviar el servidor como respuesta
  res.status(201).json({
    message: "Usuario fue creado Exitosamente",
    body: user,
  });
});

app.put("/:id", (req, res) => {
  //Put para modificar algun dato
});

app.delete("/:id", (req, res) => {
  //delete para eliminar un dato
  let {
    params: { id },
  } = req;
  let userDeleted = SERVICE.delete(id);
  res.json({
    message: `El Usuario a sido Eliminado`,
    body: userDeleted,
  });
});

//Para recibir peticiones hay que levantar el servidor y escuchar las peticiones
//Recibe un puerto , y un callback que nos indica cuando esta escuchando
app.listen(PORT, () => {
  console.log(`Servidor Escuchando en http://localhost:${PORT}`);
});
