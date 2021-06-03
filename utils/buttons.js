const { Markup } = require('telegraf')

module.exports.startKb = () =>
    Markup.keyboard([
        ['Выполнение домашних заданий',
        'Выполнение теста']
    ]).resize()

module.exports.chooseKb = () =>
    Markup.keyboard([
        ['Все выполнено'],
        ['Не все', 'Назад']
    ]).resize()

 module.exports.chooseNewKb = () =>
    Markup.keyboard([
        ['Выполнено с классом', 'Выполнено без класса'],
        ['Не выполнено', 'Назад']
    ]).resize()