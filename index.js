const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const token = '6520512357:AAHssIsUb2XOWWcXvluZRgU7zNfJetFxqu4'
const bot = new TelegramBot(token, {polling: true})
const app = express()
app.use(express.json())
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message, get ' + chatId);
});

app.post('/send', (req, res) => {
  const {id} = req.body
  bot.sendMessage(id, 'SEnd you message!~')
  return res.json({mes: 'Hi'})

})
app.listen(5005, () => console.log('started'))