const express = require('express');
const router = express.Router();

const peluqueroController = require('../controllers/peluqueroController');

router.get('/', peluqueroController.getAllPeluquerosController);

// PARA EL POST:
router.post('/', peluqueroController.createPeluqueroController);

module.exports = router;

