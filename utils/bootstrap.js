const { Telegraf } = require('telegraf')
const bot = new Telegraf('1875832180:AAEQ9BmFHxAwHh3flxCCKZqPeakxbylNdIc')
bot.launch()
console.log('Bot has been started')
module.exports = bot