const { default: mongoose } = require('mongoose')
const mngoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
})

module.exports = User