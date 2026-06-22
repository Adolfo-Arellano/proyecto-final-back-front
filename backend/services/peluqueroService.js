// CONEXIÓN: El Service importa las funciones que exportamos en el Repository
const peluqueroRepository = require('../repository/peluqueroRepository');

exports.getAllPeluquerosService = async () => {
  try {
    // Service le pide los datos al Repository
    const peluqueros = await peluqueroRepository.getAllPeluquerosRepository();
    

    return peluqueros;
  } catch (error) {
    console.log("Error en getAllPeluquerosService - " + error);
    throw Error(error);
  }
};

// para post
exports.createPeluqueroService = async (datosPeluquero) => {
  try {
    // Le pasa los datos limpios al Repository 
    return await peluqueroRepository.createNewPeluqueroRepository(datosPeluquero);
  } catch (error) {
    throw Error(error);
  }
};