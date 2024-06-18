const { Users } = require("../utils/mongoose_connection")




 const checkIfUserExist = async(credentials) => {

    if (!credentials || !credentials.email) {
        return { error: 'Invalid credentials' };
    }
    
    try {
        const checkUser = await Users.findOne({email: credentials.email, password: credentials.password})
        const returnDetails = {
            firstName: checkUser.firstName,
            lastName: checkUser.lastName,
            phoneNumber: checkUser.phoneNumber,
            email: checkUser.email
        }
        return returnDetails

    } catch (error) {
        return { error: 'An error occurred while checking user existence' };

    }
}

module.exports = {
    checkIfUserExist
}