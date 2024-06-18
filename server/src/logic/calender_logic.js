const { Appointment, Therapists } = require("../utils/mongoose_connection")





const getAllMeetingByTherapist = async (therapist_name) => { 
    try {
        const appointments = await Appointment.find({therapist_name: therapist_name})
        return appointments
    } catch (error) {
        console.log(error)
    }
}





const checkWhichHourAvailableInThisDate = async (date, therapistName) => {
    try { 
      const getAppointments = await Appointment.find({ date: date, therapist_name: therapistName }).exec();
      const times = getAppointments.map(appointment => appointment.time);
      return times;
    } catch (error) {
      console.error("Error retrieving appointments:", error);
      throw error; 
    }
  };


module.exports = {
    getAllMeetingByTherapist,
    checkWhichHourAvailableInThisDate

}