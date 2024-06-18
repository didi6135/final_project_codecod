const exporess = require('express')
const mongoose  = require('mongoose')

const {checkIfUserExist} = require('../logic/user_logic')

const router = exporess.Router()


// Controller of login
router.post('/login', async (req, res) => {
    try {
        const credentials = req.body
        if (!credentials) {
            return res.status(400).json({ error: 'Credentials are required' });
        }

        const checkCredentials = await checkIfUserExist(credentials)
        if (checkCredentials.error) {
            return res.status(400).json({ error: 'incorrect email or password' });
        }

        res.status(200).json(checkCredentials);


    } catch (error) {
        res.status(500).json({ error: 'incorrect email or password' });
    }
})


module.exports = router;
