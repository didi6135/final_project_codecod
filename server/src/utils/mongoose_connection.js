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


// const users = [
//     { email: 'john.doe@example.com', password: 'john.doe@example.com', firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
//     { email: 'jane.smith@example.com', password: 'password123', firstName: 'Jane', lastName: 'Smith', phoneNumber: '234-567-8901' },
//     { email: 'alice.jones@example.com', password: 'password123', firstName: 'Alice', lastName: 'Jones', phoneNumber: '345-678-9012' },
//     { email: 'bob.brown@example.com', password: 'password123', firstName: 'Bob', lastName: 'Brown', phoneNumber: '456-789-0123' },
//     { email: 'charlie.davis@example.com', password: 'password123', firstName: 'Charlie', lastName: 'Davis', phoneNumber: '567-890-1234' },
//     { email: 'diana.martin@example.com', password: 'password123', firstName: 'Diana', lastName: 'Martin', phoneNumber: '678-901-2345' },
//     { email: 'edward.wilson@example.com', password: 'password123', firstName: 'Edward', lastName: 'Wilson', phoneNumber: '789-012-3456' },
//     { email: 'fiona.moore@example.com', password: 'password123', firstName: 'Fiona', lastName: 'Moore', phoneNumber: '890-123-4567' },
//     { email: 'george.taylor@example.com', password: 'password123', firstName: 'George', lastName: 'Taylor', phoneNumber: '901-234-5678' },
//     { email: 'hannah.anderson@example.com', password: 'password123', firstName: 'Hannah', lastName: 'Anderson', phoneNumber: '012-345-6789' }
//   ];

// Users.insertMany(users) 
//   .then(() => console.log('Users created'))
//   .catch(err => console.error(err));



//   const therapists = [
//     { therapist_name: 'Dr. John Smith', specialization: 'Clinical Psychology', image_url: 'Dr. John Smith.jpg', city: 'New York' },
//     { therapist_name: 'Sarah Johnson, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'Sarah Johnson.jpg', city: 'New York' },
//     { therapist_name: 'David Lee, LPC', specialization: 'Licensed Professional Counseling', image_url: 'David Lee.jpg', city: 'Los Angeles' },
//     { therapist_name: 'Emily Wong, CSW', specialization: 'Clinical Social Work', image_url: 'Emily Wong.jpg', city: 'Los Angeles' },
//     { therapist_name: 'Michael Brown, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Michael Brown.jpg', city: 'Chicago' },
//     { therapist_name: 'Anna Martinez, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Anna Martinez.jpg', city: 'Chicago' },
//     { therapist_name: 'Rachel Miller, LMHC', specialization: 'Trauma Therapy', image_url: 'Rachel Miller.jpg', city: 'San Francisco' },
//     { therapist_name: 'Daniel Kim, LCSW', specialization: 'Addiction Counseling', image_url: 'Daniel Kim.jpg', city: 'San Francisco' },
//     { therapist_name: 'Linda Chen, LMFT', specialization: 'Family Therapy', image_url: 'Linda Chen.jpg', city: 'Boston' },
//     { therapist_name: 'James Wilson, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'James Wilson.jpg', city: 'Boston' },
//     { therapist_name: 'Patricia Green, Ph.D.', specialization: 'Clinical Psychology', image_url: 'Patricia Green.jpg', city: 'Houston' },
//     { therapist_name: 'George White, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'George White.jpg', city: 'Houston' },
//     { therapist_name: 'Susan Black, LPC', specialization: 'Licensed Professional Counseling', image_url: 'Susan Black.jpg', city: 'Miami' },
//     { therapist_name: 'Karen Brown, CSW', specialization: 'Clinical Social Work', image_url: 'Karen Brown.jpg', city: 'Miami' },
//     { therapist_name: 'Chris Johnson, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Chris Johnson.jpg', city: 'Seattle' },
//     { therapist_name: 'Nancy Martinez, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Nancy Martinez.jpg', city: 'Seattle' },
//     { therapist_name: 'Brian Clark, LMHC', specialization: 'Trauma Therapy', image_url: 'Brian Clark.jpg', city: 'Denver' },
//     { therapist_name: 'Laura Scott, LCSW', specialization: 'Addiction Counseling', image_url: 'Laura Scott.jpg', city: 'Denver' },
//     { therapist_name: 'Kevin Adams, LMFT', specialization: 'Family Therapy', image_url: 'Kevin Adams.jpg', city: 'Philadelphia' },
//     { therapist_name: 'Amanda Harris, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'Amanda Harris.jpg', city: 'Philadelphia' },
//     { therapist_name: 'Timothy Allen, Ph.D.', specialization: 'Clinical Psychology', image_url: 'Timothy Allen.jpg', city: 'San Diego' },
//     { therapist_name: 'Melissa Evans, LMFT', specialization: 'Marriage and Family Therapy', image_url: 'Melissa Evans.jpg', city: 'San Diego' },
//     { therapist_name: 'Gregory Brooks, LPC', specialization: 'Licensed Professional Counseling', image_url: 'Gregory Brooks.jpg', city: 'Dallas' },
//     { therapist_name: 'Rebecca Wright, CSW', specialization: 'Clinical Social Work', image_url: 'Rebecca Wright.jpg', city: 'Dallas' },
//     { therapist_name: 'Deborah Turner, PsyD', specialization: 'Child and Adolescent Therapy', image_url: 'Deborah Turner.jpg', city: 'Atlanta' },
//     { therapist_name: 'Edward Thomas, Ph.D.', specialization: 'Cognitive Behavioral Therapy (CBT)', image_url: 'Edward Thomas.jpg', city: 'Atlanta' },
//     { therapist_name: 'Kimberly Walker, LMHC', specialization: 'Trauma Therapy', image_url: 'Kimberly Walker.jpg', city: 'Phoenix' },
//     { therapist_name: 'Stephen Robinson, LCSW', specialization: 'Addiction Counseling', image_url: 'Stephen Robinson.jpg', city: 'Phoenix' },
//     { therapist_name: 'Jessica Martinez, LMFT', specialization: 'Family Therapy', image_url: 'Jessica Martinez.jpg', city: 'Austin' },
//     { therapist_name: 'Mark Davis, Ph.D.', specialization: 'Clinical Neuropsychology', image_url: 'Mark Davis.jpg', city: 'Austin' }
//   ];

// Therapists.insertMany(therapists)
//   .then(() => console.log('Therapists created'))
//   .catch(err => console.error(err));

  

  
// const calendarEvents = [
//     { date: new Date('2024-06-18'), is_available: false,  time: '10:00 AM', therapist_name: 'Dr. John Smith', patient_name: 'John Doe', patient_phoneNumber: '123-456-7890' },
//     { date: new Date('2024-06-19'), is_available: false, time: '11:00 AM', therapist_name: 'Dr. John Smith', patient_name: 'Jane Smith', patient_phoneNumber: '234-567-8901' },
//     { date: new Date('2024-06-20'), is_available: false, time: '2:00 PM', therapist_name: 'Sarah Johnson, LMFT', patient_name: 'Alice Jones', patient_phoneNumber: '345-678-9012' },
//     { date: new Date('2024-06-21'), is_available: false, time: '9:30 AM', therapist_name: 'Sarah Johnson, LMFT', patient_name: 'Bob Brown', patient_phoneNumber: '456-789-0123' },
//     { date: new Date('2024-06-22'), is_available: false, time: '3:30 PM', therapist_name: 'David Lee, LPC', patient_name: 'Charlie Davis', patient_phoneNumber: '567-890-1234' },
//     { date: new Date('2024-06-23'), is_available: false, time: '1:00 PM', therapist_name: 'David Lee, LPC', patient_name: 'Diana Martin', patient_phoneNumber: '678-901-2345' },
//     { date: new Date('2024-06-24'), is_available: false, time: '4:30 PM', therapist_name: 'Emily Wong, CSW', patient_name: 'Edward Wilson', patient_phoneNumber: '789-012-3456' },
//     { date: new Date('2024-06-25'), is_available: false, time: '10:45 AM', therapist_name: 'Emily Wong, CSW', patient_name: 'Fiona Moore', patient_phoneNumber: '890-123-4567' },
//     { date: new Date('2024-06-26'), is_available: false, time: '12:15 PM', therapist_name: 'Michael Brown, PsyD', patient_name: 'George Taylor', patient_phoneNumber: '901-234-5678' },
//     { date: new Date('2024-06-27'), is_available: false, time: '3:45 PM', therapist_name: 'Michael Brown, PsyD', patient_name: 'Hannah Anderson', patient_phoneNumber: '012-345-6789' },
//     { date: new Date('2024-06-28'), is_available: false, time: '11:30 AM', therapist_name: 'Anna Martinez, Ph.D.', patient_name: 'John Doe', patient_phoneNumber: '123-456-7890' },
//     { date: new Date('2024-06-29'), is_available: false, time: '9:00 AM', therapist_name: 'Anna Martinez, Ph.D.', patient_name: 'Jane Smith', patient_phoneNumber: '234-567-8901' },
//     { date: new Date('2024-06-30'), is_available: false, time: '2:30 PM', therapist_name: 'Rachel Miller, LMHC', patient_name: 'Alice Jones', patient_phoneNumber: '345-678-9012' },
//     { date: new Date('2024-07-01'), is_available: false, time: '5:00 PM', therapist_name: 'Rachel Miller, LMHC', patient_name: 'Bob Brown', patient_phoneNumber: '456-789-0123' },
//     { date: new Date('2024-07-02'), is_available: false, time: '1:45 PM', therapist_name: 'Daniel Kim, LCSW', patient_name: 'Charlie Davis', patient_phoneNumber: '567-890-1234' },
//     { date: new Date('2024-11-01'), is_available: false, time: '2:45 PM', therapist_name: 'Daniel Kim, LCSW', patient_name: 'Fiona Moore', patient_phoneNumber: '890-123-4567' },
//     { date: new Date('2024-07-03'), is_available: false, time: '10:15 AM', therapist_name: 'Daniel Kim, LCSW', patient_name: 'Diana Martin', patient_phoneNumber: '678-901-2345' },
//     { date: new Date('2024-07-04'), is_available: false, time: '3:15 PM', therapist_name: 'Linda Chen, LMFT', patient_name: 'Edward Wilson', patient_phoneNumber: '789-012-3456' },
//     { date: new Date('2024-07-05'), is_available: false, time: '12:30 PM', therapist_name: 'Linda Chen, LMFT', patient_name: 'Fiona Moore', patient_phoneNumber: '890-123-4567' },
//     { date: new Date('2024-07-06'), is_available: false, time: '9:45 AM', therapist_name: 'James Wilson, Ph.D.', patient_name: 'George Taylor', patient_phoneNumber: '901-234-5678' },
//     { date: new Date('2024-07-07'), is_available: false, time: '4:00 PM', therapist_name: 'James Wilson, Ph.D.', patient_name: 'Hannah Anderson', patient_phoneNumber: '012-345-6789' },
//     { date: new Date('2024-07-08'), is_available: false, time: '11:00 AM', therapist_name: 'Patricia Green, Ph.D.', patient_name: 'John Doe', patient_phoneNumber: '123-456-7890' },
//     { date: new Date('2024-07-09'), is_available: false, time: '2:00 PM', therapist_name: 'Patricia Green, Ph.D.', patient_name: 'Jane Smith', patient_phoneNumber: '234-567-8901' },
//     { date: new Date('2024-07-10'), is_available: false, time: '3:30 PM', therapist_name: 'George White, LMFT', patient_name: 'Alice Jones', patient_phoneNumber: '345-678-9012' },
//     { date: new Date('2024-07-11'), is_available: false, time: '9:30 AM', therapist_name: 'George White, LMFT', patient_name: 'Bob Brown', patient_phoneNumber: '456-789-0123' },
//     { date: new Date('2024-07-12'), is_available: false, time: '1:00 PM', therapist_name: 'Susan Black, LPC', patient_name: 'Charlie Davis', patient_phoneNumber: '567-890-1234' },
//     { date: new Date('2024-07-13'), is_available: false, time: '4:30 PM', therapist_name: 'Susan Black, LPC', patient_name: 'Diana Martin', patient_phoneNumber: '678-901-2345' },
//     { date: new Date('2024-07-14'), is_available: false, time: '10:45 AM', therapist_name: 'Karen Brown, CSW', patient_name: 'Edward Wilson', patient_phoneNumber: '789-012-3456' },
//     { date: new Date('2024-07-15'), is_available: false, time: '12:15 PM', therapist_name: 'Karen Brown, CSW', patient_name: 'Fiona Moore', patient_phoneNumber: '890-123-4567' },
//     { date: new Date('2024-07-16'), is_available: false, time: '3:45 PM', therapist_name: 'Chris Johnson, PsyD', patient_name: 'George Taylor', patient_phoneNumber: '901-234-5678' },
//     { date: new Date('2024-07-17'), is_available: false, time: '11:30 AM', therapist_name: 'Chris Johnson, PsyD', patient_name: 'Hannah Anderson', patient_phoneNumber: '012-345-6789' },
//     { date: new Date('2024-07-18'), is_available: false, time: '9:00 AM', therapist_name: 'Nancy Martinez, Ph.D.', patient_name: 'John Doe', patient_phoneNumber: '123-456-7890' },
//     { date: new Date('2024-07-19'), is_available: false, time: '2:30 PM', therapist_name: 'Nancy Martinez, Ph.D.', patient_name: 'Jane Smith', patient_phoneNumber: '234-567-8901' },
//     { date: new Date('2024-07-20'), is_available: false, time: '5:00 PM', therapist_name: 'Brian Clark, LMHC', patient_name: 'Alice Jones', patient_phoneNumber: '345-678-9012' },
//     { date: new Date('2024-07-21'), is_available: false, time: '1:45 PM', therapist_name: 'Brian Clark, LMHC', patient_name: 'Bob Brown', patient_phoneNumber: '456-789-0123' },
//     { date: new Date('2024-07-22'), is_available: false, time: '10:15 AM', therapist_name: 'Laura Scott, LCSW', patient_name: 'Charlie Davis', patient_phoneNumber: '567-890-1234' },
//     { date: new Date('2024-07-23'), is_available: false, time: '3:15 PM', therapist_name: 'Laura Scott, LCSW', patient_name: 'Diana Martin', patient_phoneNumber: '678-901-2345' },
//     { date: new Date('2024-07-24'), is_available: false, time: '12:30 PM', therapist_name: 'Kevin Adams, LMFT', patient_name: 'Edward Wilson', patient_phoneNumber: '789-012-3456' },
//     { date: new Date('2024-07-25'), is_available: false, time: '9:45 AM', therapist_name: 'Kevin Adams, LMFT', patient_name: 'Fiona Moore', patient_phoneNumber: '890-123-4567' },
//     { date: new Date('2024-07-26'), is_available: false, time: '4:00 PM', therapist_name: 'Amanda Harris, Ph.D.', patient_name: 'George Taylor', patient_phoneNumber: '901-234-5678' },
//     { date: new Date('2024-07-27'), is_available: false, time: '11:00 AM', therapist_name: 'Amanda Harris, Ph.D.', patient_name: 'Hannah Anderson', patient_phoneNumber: '012-345-6789' }
// ];

// Appointment.insertMany(calendarEvents)
//   .then(() => console.log('Appointments created'))
//   .catch(err => console.error(err));


// calendarEvents.forEach(therapist => {
//     Calender.create(therapist)
//       .then(createdTherapist => console.log(`Created therapist: ${createdTherapist.therapist_name}`))
//       .catch(err => console.error(err));
//   });
 
module.exports = {
    Users,
    Therapists,
    Appointment
}