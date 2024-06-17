const express = require('express')
const mongoose  = require('mongoose')
const { getAllMeetingByTherapist } = require('../logic/calender_logic')



const router = express.Router()


// Controller of login
router.get('/getCalenderOfTherapist/:therapist_name', async (req, res) => {
    try {
       const therapistName = req.params.therapist_name
       const getAllAppointments = await getAllMeetingByTherapist(therapistName)
       console.log(getAllAppointments)
        res.status(200).json(getAllAppointments)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

module.exports = router;
 