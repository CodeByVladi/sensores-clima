// utils/broker.js
const fetch = require("node-fetch");
const { brokerUrl } = require("../config");

async function sendPostEntity(entity) {
  const url = `${brokerUrl}/v2/entities`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entity),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST error: ${res.status} - ${text}`);
  }

  console.log("✅ Entidad creada (POST)");
}

async function sendPatchEntity(entity) {
  const url = `${brokerUrl}/v2/entities/${encodeURIComponent(entity.id)}/attrs`;
  const attrs = { ...entity };
  delete attrs.id;
  delete attrs.type;

  const res = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(attrs),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PATCH error: ${res.status} - ${text}`);
  }

  console.log("✅ Entidad actualizada (PATCH)");
}

async function sendEntityWithFallback(entity) {
  try {
    await sendPostEntity(entity);
  } catch (err) {
    if (err.message.includes("422")) {
      console.log("⚠️ Ya existe. Actualizando con PATCH...");
      await sendPatchEntity(entity);
    } else {
      throw err;
    }
  }
}

module.exports = {
  sendEntityWithFallback,
};
