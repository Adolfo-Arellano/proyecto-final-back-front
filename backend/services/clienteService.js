const clienteRepository = require('../repository/clienteRepository');

const getAll  = async ()         => await clienteRepository.getAll();
const getById = async (id)       => await clienteRepository.getById(id);
const create  = async (data)     => await clienteRepository.create(data);
const update  = async (id, data) => await clienteRepository.update(id, data);
const remove  = async (id)       => await clienteRepository.remove(id);

module.exports = { getAll, getById, create, update, remove };