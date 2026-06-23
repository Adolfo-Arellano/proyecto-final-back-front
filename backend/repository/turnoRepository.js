const Turno = require("./model/turno");

const getAll = async () =>
  await Turno.find()
    .populate('peluqueroId', 'nombre apellido')
    .populate('servicioId',  'nombre precio');

const getById = async (id) =>
  await Turno.findById(id)
    .populate('peluqueroId', 'nombre apellido')
    .populate('servicioId',  'nombre precio');

const existeSuperposicion = async (peluqueroId, fecha, hora) =>
  await Turno.findOne({ peluqueroId, fecha, hora });

const create = async (data)     => await new Turno(data).save();
const update = async (id, data) => await Turno.findByIdAndUpdate(id, data, { new: true });
const remove = async (id)       => await Turno.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove, existeSuperposicion };