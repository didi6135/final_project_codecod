const exporess = require('express')
const mongoose  = require('mongoose')
const { Appointment } = require('../utils/mongoose_connection')
const { handleAllAppointments } = require('../logic/user_logic')


const router = exporess.Router()


// Controller of login
router.get('/getAllUserAppointmens/:user_id', async (req, res) => {
    try {

        const user_id = req.params.user_id
        const allAppointmnets = await handleAllAppointments(user_id)
        res.status(200).json(allAppointmnets)
    } catch (error) {
        res.status(500).json({ error: 'We have some error, please tyy again later' });

    }
})

module.exports = router;
