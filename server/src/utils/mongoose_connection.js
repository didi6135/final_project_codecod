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
//     email: 'john.doe@example.com',
//     password: 'password123',
//     firstName: 'John',
//     lastName: 'Doe',
//     phoneNumber: '123-456-7890'
// });

// Users.create({
//     email: 'jane.smith@example.com',
//     password: 'password123',
//     firstName: 'Jane',
//     lastName: 'Smith',
//     phoneNumber: '234-567-8901'
// });

// Users.create({
//     email: 'alice.jones@example.com',
//     password: 'password123',
//     firstName: 'Alice',
//     lastName: 'Jones',
//     phoneNumber: '345-678-9012'
// });

// Users.create({
//     email: 'bob.brown@example.com',
//     password: 'password123',
//     firstName: 'Bob',
//     lastName: 'Brown',
//     phoneNumber: '456-789-0123'
// });

// Users.create({
//     email: 'charlie.davis@example.com',
//     password: 'password123',
//     firstName: 'Charlie',
//     lastName: 'Davis',
//     phoneNumber: '567-890-1234'
// });

// Users.create({
//     email: 'diana.martin@example.com',
//     password: 'password123',
//     firstName: 'Diana',
//     lastName: 'Martin',
//     phoneNumber: '678-901-2345'
// });

// Users.create({
//     email: 'edward.wilson@example.com',
//     password: 'password123',
//     firstName: 'Edward',
//     lastName: 'Wilson',
//     phoneNumber: '789-012-3456'
// });

// Users.create({
//     email: 'fiona.moore@example.com',
//     password: 'password123',
//     firstName: 'Fiona',
//     lastName: 'Moore',
//     phoneNumber: '890-123-4567'
// });

// Users.create({
//     email: 'george.taylor@example.com',
//     password: 'password123',
//     firstName: 'George',
//     lastName: 'Taylor',
//     phoneNumber: '901-234-5678'
// });

// Users.create({
//     email: 'hannah.anderson@example.com',
//     password: 'password123',
//     firstName: 'Hannah',
//     lastName: 'Anderson',
//     phoneNumber: '012-345-6789'
// });


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