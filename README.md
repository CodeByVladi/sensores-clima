# Proyecto Sensor FIWARE con Telegram y Clima Real

Este proyecto simula datos de un sensor de temperatura, los envía a un broker FIWARE Orion, y envía alertas y consultas a través de un bot de Telegram.

## Funcionalidades principales

- Simulación de datos de temperatura con ubicación geográfica.
- Envío y actualización de entidades en FIWARE Orion mediante HTTP POST y PATCH.
- Detección de alertas de temperatura alta o baja.
- Respaldo de datos y alertas en archivos locales.
- Bot Telegram que responde con temperatura real (API OpenWeatherMap) y simulada.
- Manejo de errores y reconexión.
- Configuración centralizada en archivo `config.js`.

## Cómo usar

1. Configura tus variables en `config.js`, incluyendo el token de Telegram y URL del broker FIWARE.
2. Ejecuta el proyecto con `node index.js`.
3. Interactúa con el bot de Telegram enviando mensajes "clima" o "clima simulado".
