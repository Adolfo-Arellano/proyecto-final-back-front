const peluqueroRepository = require('../repository/peluqueroRepository');

exports.getAllPeluquerosService = async () => {
  try {

    const peluqueros = await peluqueroRepository.getAllPeluquerosRepository();
    

    return peluqueros;
  } catch (error) {
    console.log("Error en getAllPeluquerosService - " + error);
    throw Error(error);
  }
};


exports.createPeluqueroService = async (datosPeluquero) => {
  try {
    // Le paso los datos limpios al Repository 
    return await peluqueroRepository.createNewPeluqueroRepository(datosPeluquero);
  } catch (error) {
    throw Error(error);
  }
};