require("dotenv").config();

module.exports = {
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  brokerUrl: process.env.BROKER_URL,
  alertBackupPath: process.env.ALERT_BACKUP_PATH || "data/backup.log",
};
