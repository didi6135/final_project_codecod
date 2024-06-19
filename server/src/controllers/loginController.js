const exporess = require('express')
const mongoose  = require('mongoose')

const {checkIfUserExist, checkIfEmailExist, createNewUser} = require('../logic/user_logic')

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


// Controller of register
router.post('/register', async (req, res) => {

    try {
        const user = req.body
        const checkEmail = await checkIfEmailExist(user.email)
        console.log(checkEmail)
        if (checkEmail) {
            return res.status(400).json({ error: 'Email already exist please login or choose another one.' });
        }
        
        const registerNewUser = await createNewUser(user)
        console.log(registerNewUser)
        if(!registerNewUser) {
            return res.status(400).json({ error: 'Error to create new user please try again later.' });

        }

        res.status(200).json(registerNewUser);


    } catch (error) {
        res.status(500).json({ error: error });
    }
})

module.exports = router;
