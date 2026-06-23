const Servicio = require("./model/servicios");

exports.getAllServiciosRepository = async () => {
  try {
    // Busca todos los servicios en Mongo
    const servicios = await Servicio.find().lean();

    console.table(servicios);

    return servicios;
  } catch (error) {
    console.log("Error en getAllServiciosRepository - " + error);
    throw Error("Error en getAllServiciosRepository - " + error);
  }
};

// para el post
exports.createNewServicioRepository = async (servicio) => {
  const { nombre, descripcion, precio, duracion } = servicio;

  try {
    console.log(
      `REPOSITORY - createNewServicio - servicio: ${JSON.stringify(servicio)}`,
    );

    const nuevoServicio = new Servicio(servicio);
    await nuevoServicio.save(); // Guarda

    console.table(nuevoServicio);
    return nuevoServicio;
  } catch (error) {
    console.log("Error en createNewServicioRepository - " + error);
    throw Error("Error en createNewServicioRepository - " + error);
  }
};
