// server.js
// Entry point del Orquestador

require("dotenv").config();

const express = require("express");
const path = require("path");
const predictRoutes = require("./routes/orquestadorRoutes");


const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

// Rutas del orquestador
app.use("/", predictRoutes);

app.listen(PORT, async () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`[ORQUESTADOR] Servicio escuchando en ${serverUrl}`);

  }
);