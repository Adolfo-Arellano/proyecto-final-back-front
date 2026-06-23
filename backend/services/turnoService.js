const turnoRepository = require('../repository/turnoRepository');

const getAll  = async ()         => await turnoRepository.getAll();
const getById = async (id)       => await turnoRepository.getById(id);
const update  = async (id, data) => await turnoRepository.update(id, data);
const remove  = async (id)       => await turnoRepository.remove(id);

const create = async (data) => {
  const existe = await turnoRepository.existeSuperposicion(
    data.peluqueroId,
    data.fecha,
    data.hora
  );
  if (existe) {
    throw new Error('El peluquero ya tiene un turno en ese horario');
  }
  return await turnoRepository.create(data);
};

module.exports = { getAll, getById, create, update, remove };