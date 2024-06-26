const mongoose = require('mongoose')
const Schema = mongoose.Schema



const therapistSchema = new Schema({
    therapist_name: String,
    image_url: String,
    specialization: String,
    city: String,
    is_available: Boolean
})

module.exports = {
    therapistSchema
}

