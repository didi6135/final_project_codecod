const mongoose = require('mongoose');
const model = require('mongoose')
// import mongoose , { model } from 'mongoose';
const { userSchema } = require('../models/user_model');
const { therapistSchema } = require('../models/therapist_model');
const { calenderSchema } = require('../models/calender_model');

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
const Therapists = mongoose.model('therapist', therapistSchema)
const Calender = mongoose.model('calender', calenderSchema)
// Users.create({
//     email: 'dydyd289@gmail.com',
//     password: '12345'
// })

// Users.create({
//     email: 'davi@gmail.com',
//     password: 'david'
// })

// Users.create({
//     email: 'yossi@gmail.com',
//     password: 'yoss12'
// })

// Users.create({
//     email: 'shmuel@gmail.com', 
//     password: 'shmuel12'
// })
// 
// const therapists = [
//     { therapist_name: 'Dr. John Smith', specialization: 'Clinical Psychology', image_url: 'Dr. John Smith.jpg' },
//     { therapist_name: 'Sarah Johnson, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'Sarah Johnson.jpg' },
//     { therapist_name: 'David Lee, LPC', specialization: 'Licensed Professional Counseling', image_url: 'David Lee.jpg' },
//     { therapist_name: 'Emily Wong, CSW', specialization: 'Clinical Social Work', image_url: 'Emily Wong.jpg' },
//     { therapist_name: 'Michael Brown, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Michael Brown.jpg' },
//     { therapist_name: 'Anna Martinez, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Anna Martinez.jpg' },
//     { therapist_name: 'Rachel Miller, LMHC', specialization: 'Trauma Therapy', image_url: 'Rachel Miller.jpg' },
//     { therapist_name: 'Daniel Kim, LCSW', specialization: 'Addiction Counseling', image_url: 'Daniel Kim.jpg' },
//     { therapist_name: 'Linda Chen, LMFT', specialization: 'Family Therapy', image_url: 'Linda Chen.jpg' },
//     { therapist_name: 'James Wilson, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'James Wilson.jpg' }
//   ];
//   // Assuming Therapist is your Mongoose model
//   therapists.forEach(therapist => {
//     Therapists.create(therapist)
//       .then(createdTherapist => console.log(`Created therapist: ${createdTherapist.therapist_name}`))
//       .catch(err => console.error(err));
//   });
 
module.exports = {
    Users,
    Therapists,
    Calender
}