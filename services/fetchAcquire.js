// services/fetchAcquire.js

const direccion= process.env.ACQUIRE_DIR;

async function fetchAcquire() {
  const headers = { "Content-Type": "application/json" };
  

  const response = await fetch(direccion, {
    method: "POST",
    headers,
  });

  if (!response.ok) {
    throw new Error(`ERROR EN FETCH ACQUIRE:${response.status}`);
  }

  const json = await response.json();

  return json;
}

module.exports = {
  fetchAcquire
};