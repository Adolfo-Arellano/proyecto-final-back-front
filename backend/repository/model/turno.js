const mongoose = require('mongoose');

const TurnoSchema = new mongoose.Schema({
  clienteNombre:   { type: String, required: true },
  clienteApellido: { type: String, required: true },
  clienteTelefono: { type: String, required: true },
  peluqueroId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Peluquero',
    required: true
  },
  servicioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true
  },
  fecha:  { type: String, required: true },
  hora:   { type: String, required: true },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmado', 'cancelado'],
    default: 'pendiente'
  }
}, { timestamps: true });

module.exports = mongoose.model('Turno', TurnoSchema);