const Peluquero = require("./model/peluqueros");

exports.getAllPeluquerosRepository = async () => {
  try {
    // Busca todos los peluqueros en Mongo
    const peluqueros = await Peluquero.find().lean();

    console.table(peluqueros);

    return peluqueros;
  } catch (error) {
    console.log("Error en getAllPeluquerosRepository - " + error);
    throw Error("Error en getAllPeluquerosRepository - " + error);
  }
};

// para el post

exports.createNewPeluqueroRepository = async (peluquero) => {
  const { nombre, descripcion, avatar } = peluquero; // La desestructuración del profe

  try {
    console.log(
      `REPOSITORY - createNewPeluquero - peluquero: ${JSON.stringify(peluquero)}`,
    );

    const nuevoPeluquero = new Peluquero(peluquero);
    await nuevoPeluquero.save(); // Guarda en Atlas

    console.table(nuevoPeluquero);
    return nuevoPeluquero;
  } catch (error) {
    console.log("Error en createNewPeluqueroRepository - " + error);
    throw Error("Error en createNewPeluqueroRepository - " + error);
  }
};
