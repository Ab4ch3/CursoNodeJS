// Importamos el paquete que Necesitamos
const axios = require("axios");
const fs = require("fs").promises; //dices al paquete que trabajara asyncrono
const path = require("path");

const main = async () => {
  // realizando un peticion get al servidor
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  // Desectrutramos response para obtener solo data, especificamente results
  let {
    data: { results },
  } = response;

  // Usamos map para que nos devuelva solo los id y los nombres
  let characters = results.map((personaje) => {
    return {
      id: personaje.id,
      name: personaje.name,
      status: personaje.status,
      species: personaje.species,
    };
  }); //vamos a volver a modifcar el arreglo para colocar la data para generar un csv y los unimeros con join
  // .map((character) => Object.values(character).join(","))
  // .join("\n");

  let header = Object.keys(characters[0]).join(",");
  let content = Object.values(characters).join(",");
  console.log(header);
  console.log(content);
  // no sirve para generar un archivo los datos en un archivo
  // await fs.writeFile(path.join(__dirname, "data.csv"), characters);

  //console.log(__dirname); // nos devovlera el path donde estamos ubicados
  // console.log(path.join(__dirname, "data.csv")); // path nos permite colocar la ruta y un archivo donde queremos guardar los datos
};

main();
