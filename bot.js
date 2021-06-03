const bot = require('./utils/bootstrap')
const { greetings, greeting } = require('./utils/greeting')
const { chooseMood } = require('./utils/moods')
const { schedule, days, findDay } = require('./utils/schedule')
const { hwRating, rating, lowRating, noRating } = require('./utils/JS-courses')
const { startKb, chooseKb, chooseNewKb } = require('./utils/buttons')

bot.start(ctx => ctx.reply(
    'Приветствую',
    startKb()
))


bot.hears('Выполнение домашних заданий', ctx => ctx.reply('Выберите вариант', chooseKb()))
bot.hears('Все выполнено', ctx => ctx.reply(hwRating()))
bot.hears('Не все', ctx => ctx.reply(lowRating()))
bot.hears('Назад', ctx => ctx.reply('Ок', startKb()))

bot.hears('Выполнение теста', ctx => ctx.reply('Вы выполнили с классом?', chooseNewKb()))
bot.hears('Выполнено с классом', ctx => ctx.reply(hwRating()))
bot.hears('Выполнено без класса', ctx => ctx.reply(lowRating()))
bot.hears('Не выполнено', ctx => ctx.reply(noRating()))
bot.hears('Назад', ctx => ctx.reply('Ок', startKb()))


bot.hears(greetings, ctx => ctx.reply(greeting(ctx)))
bot.hears('Как дела?', ctx => ctx.reply(chooseMood()))
bot.hears(days, ctx => ctx.reply(findDay(ctx.message.text)))


bot.hears('Today', ctx => {
    const date = new Date()
    ctx.reply(findDay(days[date.getDay()]))
})

bot.hears('Week', ctx => ctx.reply(Object.values(schedule).join('\n\n').split(',').join('\n')))


