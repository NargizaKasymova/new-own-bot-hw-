const moods = ['Хорошо', 'Нормально', 'Отлично']
module.exports.chooseMood = () => {
    return moods[Math.floor(Math.random()*moods.length)]
}

