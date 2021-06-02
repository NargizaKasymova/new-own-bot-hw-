module.exports.rating = ['85-100 баллов', 'ниже 85 баллов' ]
module.exports.hwRating = () => {
    return true ? this.rating[0] : null
}
module.exports.lowRating = () => {
    return true ? this.rating[1] : null
}