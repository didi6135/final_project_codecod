const exporess = require('express')
const mongoose  = require('mongoose')

const {checkIfUserExist} = require('../logic/user_logic')
const { Therapists } = require('../utils/mongoose_connection')

const router = exporess.Router()


// Controller of login
router.get('/getAllTherapist', async (req, res) => {
    try {
        const getAllTherapist = await Therapists.find()
        res.status(200).json(getAllTherapist)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

// Controller of login
router.get('/getTherapistDetails/:therapistID', async (req, res) => {
    try {
        const therapistID = req.params.therapistID
        const therapistDetails = await Therapists.findById(therapistID)
        res.status(200).json(therapistDetails)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

module.exports = router;