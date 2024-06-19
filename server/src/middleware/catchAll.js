const  {NextFunction, Response, Request} =  require('express')
// import { logger } from '../2 - utils/logger'



const catchAll = (err, req, res, next) => {
// log the error on the console
    console.log(err)

    // Log the error to an error log file
    // logger(err.message)

    // Send back the error to the front
    res.status(err.status || 500).send(err.message)
}

module.exports = {
    catchAll
}