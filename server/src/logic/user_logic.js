const { Users, Appointment, Therapists } = require("../utils/mongoose_connection")




 const checkIfUserExist = async(credentials) => {

    if (!credentials || !credentials.email) {
        return { error: 'Invalid credentials' };
    }
    
    try {
        const checkUser = await Users.findOne({email: credentials.email, password: credentials.password})
        const returnDetails = {
            _id: checkUser._id,
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


const handleAllAppointments = async (user_id) => {
    try {
        // Fetch all appointments for the given user
        const getAllAppointments = await Appointment.find({ patient_name: user_id });

        // Create an array to hold the modified appointment objects
        const appointmentsWithTherapists = [];

        // Iterate over each appointment
        for (const appointment of getAllAppointments) {
            // Fetch the therapist details using the therapist ID
            const therapist = await Therapists.findById(appointment.therapist_name);

            // Create a new object with appointment details and therapist name
            const appointmentWithTherapist = {
                appointment_id: appointment._id,
                date: appointment.date,
                time: appointment.time,
                therapist_name: therapist.therapist_name,
                specialization: therapist.specialization,
                location: therapist.city,

            };

            // Add the new object to the array
            appointmentsWithTherapists.push(appointmentWithTherapist);
        }

        // Return the array of modified appointments
        return appointmentsWithTherapists;

    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
};


// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

const checkIfEmailExist = async(email) => {
    try {
        const checkEmail = await Users.findOne({email: email})
        return checkEmail
    } catch (error) {
        console.error('Error check email:', error);
        throw error;
    }
}


const createNewUser = async(user) => {
    try {
        console.log(user)
        const newUser = await Users.create(user)
        return newUser
    } catch (error) {
        console.error('Error Register:', error);
        throw error;
    }
}

module.exports = {
    checkIfUserExist,
    handleAllAppointments,
    checkIfEmailExist,
    createNewUser
}