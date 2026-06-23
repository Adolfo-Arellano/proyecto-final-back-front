const servicioService = require('../services/servicioService');

exports.getAllServiciosController = async (req, res) => {
  try {
    const servicios = await servicioService.getAllServiciosService();
    return res.status(200).json(servicios);
  } catch (error) {
    return res.status(500).json({ 
      mensaje: 'Error al obtener la lista de servicios', 
      error: error.message 
    });
  }
};

// para el POST
exports.createServicioController = async (req, res) => {
  try {
    // Los datos del servicio vienen en el req.body
    const nuevoServicio = await servicioService.createServicioService(req.body);

    // Respondemos con un 201 (Creado con éxito)
    return res.status(201).json({
      mensaje: 'Servicio creado con éxito',
      data: nuevoServicio
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error al crear el servicio',
      error: error.message
    });
  }
};