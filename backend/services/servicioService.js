const servicioRepository = require('../repository/serviciosRepository');

exports.getAllServiciosService = async () => {
  try {
    const servicios = await servicioRepository.getAllServiciosRepository();
    return servicios;
  } catch (error) {
    console.log("Error en getAllServiciosService - " + error);
    throw Error(error);
  }
};

exports.createServicioService = async (datosServicio) => {
  try {
    // pasa datos limpios al Repository
    return await servicioRepository.createNewServicioRepository(datosServicio);
  } catch (error) {
    throw Error(error);
  }
};