
const peluqueroService = require('../services/peluqueroService');

exports.getAllPeluquerosController = async (req, res) => {
  try {
    const peluqueros = await peluqueroService.getAllPeluquerosService();
    return res.status(200).json(peluqueros);
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al obtener la lista de peluqueros', error: error.message });
  }
};

// para el POST 
exports.createPeluqueroController = async (req, res) => {
  try {
    // Los datos del peluquero nuevo vienen en el req.body
    const nuevoPeluquero = await peluqueroService.createPeluqueroService(req.body);
    
    
    return res.status(201).json({ 
      mensaje: 'Peluquero creado con éxito', 
      data: nuevoPeluquero 
    });
  } catch (error) {
    return res.status(400).json({ 
      mensaje: 'Error al crear el peluquero', 
      error: error.message 
    });
  }
};