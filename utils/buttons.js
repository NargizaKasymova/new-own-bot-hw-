const { Markup } = require('telegraf')

module.exports.startKb = () =>
    Markup.keyboard([
        ['Выполнение домашних заданий']
    ]).resize()

module.exports.chooseKb = () =>
    Markup.keyboard([
        ['Все выполнено'],
        ['Не все', 'Назад']
    ]).resize()