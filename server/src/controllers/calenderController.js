const express = require('express')
const mongoose  = require('mongoose')
const { getAllMeetingByTherapist, checkWhichHourAvailableInThisDate } = require('../logic/calender_logic')
const { Appointment } = require('../utils/mongoose_connection')



const router = express.Router()


// Controller of login
router.get('/getCalenderOfTherapist/:therapist_name', async (req, res) => {
    try {
       const therapistName = req.params.therapist_name
       const getAllAppointments = await getAllMeetingByTherapist(therapistName)
    //    console.log(getAllAppointments)
        res.status(200).json(getAllAppointments)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

// Controller to create appointment
router.get('/createNewAppointment/:date/:therapist_name', async (req, res) => {
    try {
       const dateToCheck = req.params.date
       const therapistName = req.params.therapist_name
       const getHours = await checkWhichHourAvailableInThisDate(dateToCheck, therapistName)
        res.status(200).json(getHours)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

// Controller to create appointment
router.post('/addNewAppointment', async (req, res) => {
    try {
       const newAppointment = req.body
        const addNew = await Appointment.create(newAppointment)
        console.log(addNew)
        res.status(200).json(addNew)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

module.exports = router;
 