// Getting the user details from the local storage
const getDetails = localStorage.getItem("userDetails");
// Parse the data to object
const parseDetails = JSON.parse(getDetails);

document.addEventListener("DOMContentLoaded", function () {
  // Get the div by id that will contains all private details
  const privateDetails = document.getElementById("privateDetails");

  // Function that adds private details to the page
  const addPrivateDetails = () => {
    privateDetails.innerHTML = `
      <div>
      <h2>Welcome: ${parseDetails.firstName} ${parseDetails.lastName}</h2>
      <h4>Email: ${parseDetails.email}</h4>
      <h4>Phone number: ${parseDetails.phoneNumber}</h4>
      </div>
    `;
  };

  // Call the function to add private details
  addPrivateDetails();
});


// Get the div by id that will contains all my appointments
const myAppointmens = document.getElementById("myAppointmens");


const getAllAppointmnetsByUser = async () => {
  try {
    const user_id = parseDetails._id;
    // URL that give all therapists from database
    const getAllAppointmentOfUserUrl = `http://localhost:8080/api/getAllUserAppointmens/${user_id}`;

    // Send GET request to the backend to get all therapists
    const response = await fetch(getAllAppointmentOfUserUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response not ok
    if (!response.ok) {
      // Convert the response to object
      const errorResponse = await response.json();
      // Return the error to the user
      errorMessageElement.textContent =
        errorResponse.error || "Login failed: Unknown error";
      errorMessageElement.style.display = "block";
      return;
    }

    // If response ok convert the response to object
    const result = await response.json();
    drawTherapistsCard(result)

    // Save the all therapists to the local storage
    //   localStorage.setItem("therapists", JSON.stringify(result));
  } catch (error) {}
};

getAllAppointmnetsByUser();




// Function that create therapists card
function drawTherapistsCard(appointmentArray) {
  // Clean the all therapists div
  myAppointmens.innerHTML = "";
  console.log(appointmentArray)

  // Run on all therapists array
  appointmentArray.forEach((appointmet) => {
    const appointmetCard = document.createElement("div");
    appointmetCard.className = "therapistCard";

    appointmetCard.innerHTML = `
    <div class="therapistDetails">
      <h4>${appointmet.therapist_name}</h4>
      <h5 class="locationName">${appointmet.specialization}</h5>
      <h5 class="locationName">${appointmet.location}</h5>
    </div>
    <div class="dateAndTime">
        <h4>${appointmet.date}</h4>
        <h4>${appointmet.time}</h4>
    </div>

        <div class="cancelButton">
        <button onClick="cancelAppointment('${appointmet.appointment_id}')" class="AppointmentButton">Cancel Appointment</button>
        </div>
      `;

      myAppointmens.appendChild(appointmetCard);
  });
}


const cancelAppointment = async(appointment_id) => {
    
try {
    
    if(confirm('are you sure that you want to cancel the appointment?')){
        // URL that give all therapists from database
    const cancelApointmentUrl = `http://localhost:8080/api/deleteAppointment/${appointment_id}`;

    // Send GET request to the backend to get all therapists
    const response = await fetch(cancelApointmentUrl, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response not ok
    if (!response.ok) {
      // Convert the response to object
      const errorResponse = await response.json();
      // Return the error to the user
      errorMessageElement.textContent =
        errorResponse.error || "Login failed: Unknown error";
      errorMessageElement.style.display = "block";
      return;
    }

    // If response ok convert the response to object
    const result = await response.json();
    if(result) {
        getAllAppointmnetsByUser()
    }
    }
} catch (error) {
    console.log(error)
}
}


const goBack = () => {
    window.location.href = '../search/search.html'
}