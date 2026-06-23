const Cliente = require("./model/cliente");

const getAll  = async ()         => await Cliente.find();
const getById = async (id)       => await Cliente.findById(id);
const create  = async (data)     => await new Cliente(data).save();
const update  = async (id, data) => await Cliente.findByIdAndUpdate(id, data, { new: true });
const remove  = async (id)       => await Cliente.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };