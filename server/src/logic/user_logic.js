const { Users } = require("../utils/mongoose_connection")




 const checkIfUserExist = async(credentials) => {

    if (!credentials || !credentials.email) {
        return { error: 'Invalid credentials' };
    }
    
    try {
        const checkUser = await Users.findOne({email: credentials.email, password: credentials.password})
        return checkUser

    } catch (error) {
        return { error: 'An error occurred while checking user existence' };

    }
}

module.exports = {
    checkIfUserExist
}