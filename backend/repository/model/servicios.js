const mongoose = require('mongoose');

const ServicioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: [0, 'El precio no puede ser negativo']
  },
  duracion: {
    type: Number, 
    required: true,
    min: [1, 'La duración mínima es de 1 minuto']
  }
}, {

});

module.exports = mongoose.model('Servicio', ServicioSchema);