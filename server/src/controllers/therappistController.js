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
router.post('/getTherapistCalender', async (req, res) => {
    try {
        const therapistID = req.body
        
        res.status(200).json()
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

module.exports = router;