const { logToConsole, backupToFile } = require("../utils/logger");

function generateHumidityEntity() {
  const humidity = (Math.random() * 40 + 30).toFixed(2); // 30%–70%
  const now = new Date().toISOString();

  return {
    id: "HumiditySensor:001",
    type: "HumiditySensor",
    humidity: {
      value: Number(humidity),
      metadata: {
        observedAt: {
          value: now,
          type: "DateTime",
        },
      },
    },
    location: {
      type: "geo:point",
      value: "40.633,-3.16",
    },
  };
}

module.exports = {
  name: "humidity",
  generate: generateHumidityEntity,
};
