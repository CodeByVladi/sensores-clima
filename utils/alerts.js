const fs = require("fs");
const path = require("path");
const { alertBackupPath } = require("../config");

function logToConsole(entity) {
  console.log("Sensor data:", JSON.stringify(entity, null, 2));
}

async function backupToFile(entity) {
  const line = JSON.stringify(entity) + "\n";
  const backupFile = path.resolve(__dirname, "..", alertBackupPath);
  await fs.promises.mkdir(path.dirname(backupFile), { recursive: true });
  await fs.promises.appendFile(backupFile, line);
  console.log("💾 Datos respaldados");
}

async function backupAlert(alertMsg) {
  const alertLine = `${new Date().toISOString()} - ${alertMsg}\n`;
  const backupFile = path.resolve(__dirname, "..", alertBackupPath);
  await fs.promises.mkdir(path.dirname(backupFile), { recursive: true });
  await fs.promises.appendFile(backupFile, alertLine);
  console.log("⚠️ Alerta respaldada");
}

module.exports = {
  logToConsole,
  backupToFile,
  backupAlert,
};
