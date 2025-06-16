const fs = require("fs");
const path = require("path");
const { backupPath } = require("../config");

function logToConsole(entity) {
  console.log("Sensor data:", JSON.stringify(entity, null, 2));
}

async function backupToFile(entity) {
  const backupLine = JSON.stringify(entity) + "\n";
  const backupFile = path.resolve(__dirname, "..", backupPath);
  await fs.promises.mkdir(path.dirname(backupFile), { recursive: true });
  await fs.promises.appendFile(backupFile, backupLine);
  console.log("💾 Datos respaldados");
}

module.exports = {
  logToConsole,
  backupToFile,
};
