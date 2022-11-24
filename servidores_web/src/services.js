// Este archivo se va a encargar controlar todo lo relacionado con el CRUD

const data = require("./MOCK_DATA.json");

// Desarrollo de modulos
// Le estamos diciendo al archivo service que va a exportar funciones que seran usadas en otros archivos
module.exports = {
  getUsers: () => data,
  /*  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    // va a meter la data que esta llegando dentro del arreglo
    data.push(newUser);
    // Va a retornar el ultimo usuario creado
    return newUser;
  }, */
};
