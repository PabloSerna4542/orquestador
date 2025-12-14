// controllers/acquireController.js
const { fetchAcquire } = require("../services/fetchAcquire");
const { fetchPredict } = require("../services/fetchPredict");

function health(req, res) {
  res.json({
    status: "ok",
    service: "acquire"
  });
}

async function doRun(req, res) {
  const start = Date.now();
  try {
    const acquireResult = await fetchAcquire();
    const { Id: acquireDataId, data: features } = acquireResult;

    const predictResult = await fetchPredict(features, acquireDataId);
    const { predictionId, prediction: predictionFinal } = predictResult;

    const latencyMs = Date.now() - start;

    const timestamp = new Date().toISOString();

    res.status(200).json({
      timestamp,
      latencyMs,
      acquireId: acquireDataId,
      predictId: predictionId,
      prediction: predictionFinal
    });

  } catch (err) {
    console.error("Error en /data:", err);
    res.status(500).json({ error: "Internal error" });
  }
}

module.exports = {
  health,
  doRun
};