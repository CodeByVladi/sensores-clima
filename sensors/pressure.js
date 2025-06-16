function getPressureData() {
  return {
    id: "PressureSensor:001",
    type: "PressureSensor",
    pressure: {
      value: Number((950 + Math.random() * 100).toFixed(2)), // 950 a 1050 hPa
      metadata: {
        observedAt: {
          value: new Date().toISOString(),
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

module.exports = { getPressureData };
