const mongoose = require('mongoose');
const model = require('mongoose')
// import mongoose , { model } from 'mongoose';
const { userSchema } = require('../models/user_model')

// import { restaurant_schema, store_schema } from "../4-models/review_models";



const urlConnection = "mongodb://127.0.0.1:27017/finalProject"
const mongooseConnection = () => {                         

    mongoose.connect( urlConnection, {  
        // useNewUrlParser: true, 
        // useUnifiedTopology: true, 
        w: 'majority', 
        wtimeoutMS: 10000, 
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error); 
    });
}

mongooseConnection()

const Users = mongoose.model('users', userSchema) 



module.exports = {
    Users
}