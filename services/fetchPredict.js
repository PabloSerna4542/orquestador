// services/fetchPredict.js

const direccion= process.env.PREDICT_DIR;

async function fetchPredict(features_data, Id) {
  const headers = { "Content-Type": "application/json" };
  const body = {

    features: features_data,
    meta: {
      featureCount: features_data.length,
      dataId: Id,
      source: "orchestrator"
    }


  };

  const response = await fetch(direccion, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`ERROR EN FETCH PREDICT:${response.status}`);
  }

  const json = await response.json();

  return json;
}

module.exports = {
  fetchPredict
};