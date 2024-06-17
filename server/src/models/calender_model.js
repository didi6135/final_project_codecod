const mongoose = require('mongoose')
const Schema = mongoose.Schema



const calenderSchema = new Schema({
    date: Date,
    time: String,
    therapist_name: String,
    patient_name: String,
    patient_phoneNumber: String,
    is_available: Boolean
}) 

module.exports = {
    calenderSchema
}

