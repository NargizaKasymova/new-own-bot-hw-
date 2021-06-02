const bot = require('./bootstrap')
module.exports.greetings = ['привет', 'Привет', 'Здравствуйте', 'здравствуйте']
module.exports.greeting = (ctx) =>
    `${ctx.message.text}, ${ctx.message.from.first_name}`
