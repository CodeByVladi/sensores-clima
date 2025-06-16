const { tempMinThreshold, tempMaxThreshold } = require("../config");
const { logToConsole, backupToFile } = require("../utils/alerts");

function generateTemperatureEntity() {
  const temperature = (Math.random() * 10 + 20).toFixed(2);

  return {
    id: "TemperatureSensor:001",
    type: "TemperatureSensor",
    temperature: {
      type: "Number",
      value: Number(temperature),
    },
    location: {
      type: "geo:json",
      value: {
        type: "Point",
        coordinates: [-3.16, 40.633],
      },
    },
  };
}

function checkTemperatureAlert(entity) {
  const temp = entity.temperature.value;
  if (temp < tempMinThreshold) {
    return `⚠️ Alerta: temperatura baja (${temp}°C)`;
  } else if (temp > tempMaxThreshold) {
    return `⚠️ Alerta: temperatura alta (${temp}°C)`;
  }
  return null;
}

module.exports = {
  generate: generateTemperatureEntity,
  checkTemperatureAlert,
  logToConsole,
  backupToFile,
};
