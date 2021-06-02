module.exports.days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

module.exports.schedule = {
    Понедельник: [
        'Понедельник',
        '08:00 - wake up', 
        '16:00 - do JS-homework'
    ], 
    Вторник:[
        'Вторник',
        '07:30 - wake up', 
        '08:45 - collect documents',
        '09:00 - leave home',
        '09:45 - to be at the fixed location',
        '18:00 - leave home and go to the JS-courses'
    ], 
    Среда: [
        'Среда',
        'today is day off'
    ], 
    Четверг: [
        'Четверг',
        '16:00 - start doing JS-homework',
        '18:00 - leave home and go to the JS_courses'
    ],
    Пятница: [
        'Пятница',
        '12:00 - 14:00 - make report to B'

    ], 
    Суббота: [
        'Суббота',
        '16:30 - start doing JS-homework',
        '18:00 - leave home and go to the JS-courses'

    ], 
    Воскресенье: [
        'Воскресенье',
        'today is day off'
    ]
}
module.exports.findDay = (day) => {
    const filtered = Object.keys(this.schedule).filter(key => this.schedule[key][0] == day)
    return filtered[0] ? this.schedule[filtered[0]].join('\n') : null
}
