const express = require("express");
const router = express.Router();
const servicioController = require("../controllers/serviciosController");

console.log("Controlador de servicios cargado correctamente:", Object.keys(servicioController));

router.get("/", servicioController.getAllServiciosController);
router.post("/", servicioController.createServicioController);

module.exports = router;
