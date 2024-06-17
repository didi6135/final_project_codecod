const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userSchema = new Schema({
    email: String,
    password: String,

    firstName: String,
    lastName: String,
    phoneNumber: String
})

module.exports = {
    userSchema
}