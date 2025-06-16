// index.js

require("dotenv").config();
console.log("dotenv cargado");
console.log("TOKEN:", process.env.TELEGRAM_BOT_TOKEN);
console.log("BROKER URL:", process.env.BROKER_URL);
console.log("BACKUP PATH:", process.env.ALERT_BACKUP_PATH);

const path = require("path");
const fs = require("fs");
const TelegramBot = require("node-telegram-bot-api");

async function main() {
  try {
    // Validar token de Telegram
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
      throw new Error("Telegram Bot Token no proporcionado en .env");
    }

    // Validar BROKER URL (solo un ejemplo, ajusta según tu uso)
    const brokerUrl = process.env.BROKER_URL;
    if (!brokerUrl || !brokerUrl.startsWith("http")) {
      throw new Error("BROKER_URL inválida o no proporcionada en .env");
    }

    // Crear instancia bot Telegram
    const bot = new TelegramBot(token, { polling: true });

    // Ejemplo de escucha de mensajes
    bot.on("message", (msg) => {
      console.log(
        `Mensaje recibido de ${msg.from.username || msg.from.id}: ${msg.text}`
      );
      // Aquí podrías llamar funciones según msg.text, etc.
    });

    // Simular datos sensor (puedes poner tu lógica aquí)
    const sensorData = {
      id: "TemperatureSensor:001",
      type: "TemperatureSensor",
      temperature: { type: "Number", value: 21.47 },
      location: {
        type: "geo:json",
        value: { type: "Point", coordinates: [-3.16, 40.633] },
      },
    };
    console.log("Sensor data:", JSON.stringify(sensorData, null, 2));

    // Guardar respaldo en archivo, usando ruta absoluta
    const backupPath = path.resolve(process.env.ALERT_BACKUP_PATH);
    fs.appendFileSync(backupPath, JSON.stringify(sensorData) + "\n");
    console.log("💾 Datos respaldados en:", backupPath);

    // Tu lógica adicional aquí...
  } catch (err) {
    console.error("❌ Error en main:", err.message);
  }
}

main();
