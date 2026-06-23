require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conectarDB = require("./database/db");
const peluqueroRoutes = require("./routers/peluqueroRoute");
const serviciosRouter = require("./routers/serviciosRoute");
const clienteRouter = require("./routers/clienteRoute");
const turnoRouter = require("./routers/turnoRoute");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/peluqueros", peluqueroRoutes);
app.use("/api/servicios", serviciosRouter);
app.use("/api/clientes", clienteRouter);
app.use("/api/turnos", turnoRouter);

conectarDB();

app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor de BarberApp funcionando" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
