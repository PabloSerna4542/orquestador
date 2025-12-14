// routes/orquestadorRoutes.js
const express = require("express");
const router = express.Router();

const orquestadorController = require("../controllers/orquestadorController");

// Contrato del servicio ACQUIRE
router.get("/health", orquestadorController.health);
router.post("/run", orquestadorController.doRun);

module.exports = router;
