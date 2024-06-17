const { Appointment } = require("../utils/mongoose_connection")





const getAllMeetingByTherapist = async (therapist_name) => {
    try {
        const appointments = await Appointment.find({therapist_name: therapist_name})
        return appointments
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllMeetingByTherapist
}