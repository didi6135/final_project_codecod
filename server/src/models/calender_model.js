const mongoose = require('mongoose')
const Schema = mongoose.Schema



const calenderSchema = new Schema({
    date: Date,
    time: String,
    specialization: String,
    therapist_name: String,
})

module.exports = {
    calenderSchema
}

