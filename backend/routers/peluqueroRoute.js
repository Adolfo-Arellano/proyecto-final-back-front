const express = require('express');
const router = express.Router();

const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.getAllServiciosController);

// PARA EL POST:
router.post('/', servicioController.createServicioController);

module.exports = router;