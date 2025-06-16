const TelegramBot = require("node-telegram-bot-api");
const { getRealWeather } = require("./weather");
const { generate } = require("../sensors/temperature");
const { telegramBotToken } = require("../config");

const bot = new TelegramBot(telegramBotToken, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase();

  if (text === "clima") {
    try {
      const temp = await getRealWeather();
      const city = "Guadalajara";
      bot.sendMessage(chatId, `🌡️ Temperatura real en ${city}: ${temp}°C.`);
    } catch (error) {
      bot.sendMessage(
        chatId,
        "❌ No pude obtener el clima real. Intenta más tarde."
      );
    }
  } else if (text === "clima simulado") {
    try {
      const simulatedData = generate();
      const temp = simulatedData.temperature.value;
      const city = "Guadalajara";
      bot.sendMessage(chatId, `🌡️ Temperatura simulada en ${city}: ${temp}°C.`);
    } catch (error) {
      bot.sendMessage(chatId, "❌ No pude obtener la temperatura simulada.");
    }
  } else {
    bot.sendMessage(
      chatId,
      "Envía 'clima' para la temperatura real o 'clima simulado' para la temperatura simulada."
    );
  }
});

module.exports = bot;
