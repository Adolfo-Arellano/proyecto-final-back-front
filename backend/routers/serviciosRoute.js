const express = require("express");
const router = express.Router();

const servicioController = require("../controllers/serviciosController");
// verifica controlador
console.log("Controlador de servicios cargado correctamente:", Object.keys(servicioController));

router.get("/", servicioController.getAllServiciosController);





// PARA EL POST:
router.post("/", servicioController.createServicioController);

module.exports = router;
