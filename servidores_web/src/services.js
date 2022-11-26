// Este archivo se va a encargar controlar todo lo relacionado con el CRUD

const data = require("./MOCK_DATA.json");

// Desarrollo de modulos
// Le estamos diciendo al archivo service que va a exportar funciones que seran usadas en otros archivos
module.exports = {
  getUsers: () => data,
  getUserByID: (id) => {
    // recordar que siempre que recibimos parametros recibimos strings , en caso tal debemos hacer la conversion
    let idPerson = Number(id);
    let user = data.find((person) => person.id === idPerson);
    return user;
  },
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    // va a meter la data que esta llegando dentro del arreglo
    data.push(newUser);
    // Va a retornar el ultimo usuario creado
    return newUser;
  },
  delete: (id) => {
    let idPerson = Number(id);
    let findIndex = data.findIndex((person) => person.id === idPerson);
    let result = data.splice(findIndex, 1);
    return result;
  },
};
