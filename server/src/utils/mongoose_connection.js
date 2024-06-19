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
const Appointment = mongoose.model('calender', calenderSchema)


const users = [
    { email: 'john.doe@example.com', password: 'john.doe@example.com', firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
    { email: 'jane.smith@example.com', password: 'password123', firstName: 'Jane', lastName: 'Smith', phoneNumber: '234-567-8901' },
    { email: 'alice.jones@example.com', password: 'password123', firstName: 'Alice', lastName: 'Jones', phoneNumber: '345-678-9012' },
    { email: 'bob.brown@example.com', password: 'password123', firstName: 'Bob', lastName: 'Brown', phoneNumber: '456-789-0123' },
    { email: 'charlie.davis@example.com', password: 'password123', firstName: 'Charlie', lastName: 'Davis', phoneNumber: '567-890-1234' },
    { email: 'diana.martin@example.com', password: 'password123', firstName: 'Diana', lastName: 'Martin', phoneNumber: '678-901-2345' },
    { email: 'edward.wilson@example.com', password: 'password123', firstName: 'Edward', lastName: 'Wilson', phoneNumber: '789-012-3456' },
    { email: 'fiona.moore@example.com', password: 'password123', firstName: 'Fiona', lastName: 'Moore', phoneNumber: '890-123-4567' },
    { email: 'george.taylor@example.com', password: 'password123', firstName: 'George', lastName: 'Taylor', phoneNumber: '901-234-5678' },
    { email: 'hannah.anderson@example.com', password: 'password123', firstName: 'Hannah', lastName: 'Anderson', phoneNumber: '012-345-6789' }
  ];

// Users.insertMany(users) 
//   .then(() => console.log('Users created'))
//   .catch(err => console.error(err));



  const therapists = [
    { therapist_name: 'Dr. John Smith', specialization: 'Clinical Psychology', image_url: 'Dr. John Smith.jpg', city: 'New York' },
    { therapist_name: 'Sarah Johnson, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'Sarah Johnson.jpg', city: 'New York' },
    { therapist_name: 'David Lee, LPC', specialization: 'Licensed Professional Counseling', image_url: 'David Lee.jpg', city: 'Los Angeles' },
    { therapist_name: 'Emily Wong, CSW', specialization: 'Clinical Social Work', image_url: 'Emily Wong.jpg', city: 'Los Angeles' },
    { therapist_name: 'Michael Brown, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Michael Brown.jpg', city: 'Chicago' },
    { therapist_name: 'Anna Martinez, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Anna Martinez.jpg', city: 'Chicago' },
    { therapist_name: 'Rachel Miller, LMHC', specialization: 'Trauma Therapy', image_url: 'Rachel Miller.jpg', city: 'San Francisco' },
    { therapist_name: 'Daniel Kim, LCSW', specialization: 'Addiction Counseling', image_url: 'Daniel Kim.jpg', city: 'San Francisco' },
    { therapist_name: 'Linda Chen, LMFT', specialization: 'Family Therapy', image_url: 'Linda Chen.jpg', city: 'Boston' },
    { therapist_name: 'James Wilson, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'James Wilson.jpg', city: 'Boston' },
    { therapist_name: 'Patricia Green, Ph.D.', specialization: 'Clinical Psychology', image_url: 'Patricia Green.jpg', city: 'Houston' },
    { therapist_name: 'George White, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'George White.jpg', city: 'Houston' },
    { therapist_name: 'Susan Black, LPC', specialization: 'Licensed Professional Counseling', image_url: 'Susan Black.jpg', city: 'Miami' },
    { therapist_name: 'Karen Brown, CSW', specialization: 'Clinical Social Work', image_url: 'Karen Brown.jpg', city: 'Miami' },
    { therapist_name: 'Chris Johnson, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Chris Johnson.jpg', city: 'Seattle' },
    { therapist_name: 'Nancy Martinez, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Nancy Martinez.jpg', city: 'Seattle' },
    { therapist_name: 'Brian Clark, LMHC', specialization: 'Trauma Therapy', image_url: 'Brian Clark.jpg', city: 'Denver' },
    { therapist_name: 'Laura Scott, LCSW', specialization: 'Addiction Counseling', image_url: 'Laura Scott.jpg', city: 'Denver' },
    { therapist_name: 'Kevin Adams, LMFT', specialization: 'Family Therapy', image_url: 'Kevin Adams.jpg', city: 'Philadelphia' },
    { therapist_name: 'Amanda Harris, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'Amanda Harris.jpg', city: 'Philadelphia' },
    { therapist_name: 'Timothy Allen, Ph.D.', specialization: 'Clinical Psychology', image_url: 'Timothy Allen.jpg', city: 'San Diego' },
    { therapist_name: 'Melissa Evans, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'Melissa Evans.jpg', city: 'San Diego' },
    { therapist_name: 'Gregory Brooks, LPC', specialization: 'Licensed Professional Counseling', image_url: 'Gregory Brooks.jpg', city: 'Dallas' },
    { therapist_name: 'Rebecca Wright, CSW', specialization: 'Clinical Social Work', image_url: 'Rebecca Wright.jpg', city: 'Dallas' },
    { therapist_name: 'Deborah Turner, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Deborah Turner.jpg', city: 'Atlanta' },
    { therapist_name: 'Edward Thomas, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Edward Thomas.jpg', city: 'Atlanta' },
    { therapist_name: 'Kimberly Walker, LMHC', specialization: 'Trauma Therapy', image_url: 'Kimberly Walker.jpg', city: 'Phoenix' },
    { therapist_name: 'Stephen Robinson, LCSW', specialization: 'Addiction Counseling', image_url: 'Stephen Robinson.jpg', city: 'Phoenix' },
    { therapist_name: 'Jessica Martinez, LMFT', specialization: 'Family Therapy', image_url: 'Jessica Martinez.jpg', city: 'Austin' },
    { therapist_name: 'Mark Davis, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'Mark Davis.jpg', city: 'Austin' }
  ];

// Therapists.insertMany(therapists)
//   .then(() => console.log('Therapists created'))
//   .catch(err => console.error(err));


const hoursArray = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];
async function randomDate() {
    const start = new Date('2024-07-01')
    const end = new Date('2024-08-01')

    const getAllTherapists = await Therapists.find()
    const getAllUsers = await Users.find()

    for(let i = 0; i < 500; i++) {
        const date = new Date(+start + Math.random() * (end - start));
        const hour = hoursArray[Math.floor(Math.random() * hoursArray.length)];
        const randomTherapist = getAllTherapists[Math.floor(Math.random() * therapists.length)]
        const randomUser = getAllUsers[Math.floor(Math.random() * users.length)]

        const newAppointment = {
            date: date.toISOString().split('T')[0],
            is_available: false,
            time: hour,
            therapist_name: randomTherapist._id,
            patient_name: randomUser._id,
            patient_phoneNumber: randomUser.phoneNumber
        }
        Appointment.create(newAppointment)
    }

  }

  
  // console.log(randomDate())



module.exports = {
    Users,
    Therapists,
    Appointment
}