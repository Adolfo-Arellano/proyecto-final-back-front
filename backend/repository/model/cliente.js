const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nombre:   { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: true },
  email:    { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', ClienteSchema);