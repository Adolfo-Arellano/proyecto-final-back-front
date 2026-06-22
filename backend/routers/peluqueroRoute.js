const express = require('express');
const router = express.Router();

// CONEXIÓN: El Router importa la función del Controller
const peluqueroController = require('../controllers/peluqueroController');

// Definimos que la ruta raíz de este archivo maneje el GET
router.get('/', peluqueroController.getAllPeluquerosController);

// PARA EL POST:
router.post('/', peluqueroController.createPeluqueroController);

module.exports = router;

