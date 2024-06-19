const express = require('express');
const cors = require('cors');

const mongooseConnection = require('./utils/mongoose_connection')
const loginRouter = require('./controllers/loginController');
const therapistRouter = require('./controllers/therapistController');
const calenderRouter = require('./controllers/calenderController');
const userRouter = require('./controllers/userController');
const { catchAll } = require('./middleware/catchAll');


// Initial the server
const server = express()

// Let the server handle json files
server.use(express.json())

// Let user access to the server
server.use(cors())
 
// Get all route
server.use('/api', loginRouter)
server.use('/api', therapistRouter) 
server.use('/api', calenderRouter) 
server.use('/api', userRouter) 
// server.use(catchAll)


// Active the server and see if it's run
const port = 8080;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`))  
