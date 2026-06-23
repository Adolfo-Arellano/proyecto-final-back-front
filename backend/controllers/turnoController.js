const turnoService = require('../services/turnoService');

const getAll = async (req, res) => {
  try {
    const turnos = await turnoService.getAll();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const turno = await turnoService.getById(req.params.id);
    if (!turno) return res.status(404).json({ mensaje: 'Turno no encontrado' });
    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOcupados = async (req, res) => {
  try {
    const { peluqueroId, fecha } = req.query;
    const turnos = await turnoService.getAll();
    const horas = turnos
      .filter(t => String(t.peluqueroId._id) === peluqueroId && t.fecha === fecha)
      .map(t => t.hora);
    res.json(horas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const turno = await turnoService.create(req.body);
    res.status(201).json(turno);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const turno = await turnoService.update(req.params.id, req.body);
    if (!turno) return res.status(404).json({ mensaje: 'Turno no encontrado' });
    res.json(turno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const turno = await turnoService.remove(req.params.id);
    if (!turno) return res.status(404).json({ mensaje: 'Turno no encontrado' });
    res.json({ mensaje: 'Turno eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getOcupados, getById, create, update, remove };