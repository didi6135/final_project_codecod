const express = require('express');
const cors = require('cors');

const mongooseConnection = require('./utils/mongoose_connection')
const userRoute = require('./controllers/loginController');
const therapistRouter = require('./controllers/therappistController');
const { catchAll } = require('./middleware/catchAll');


// Initial the server
const server = express()

// Let the server handle json files
server.use(express.json())

// Let user access to the server
server.use(cors())
 
// Get all route
server.use('/api', userRoute)
server.use('/api', therapistRouter)
// server.use(catchAll)


// Active the server and see if it's run
const port = 8080;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`))  
