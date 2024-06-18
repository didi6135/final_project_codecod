// Get the ID of the therapist from the Search page
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const therapistId = urlParams.get("therapistId");

  if (therapistId) {
    getTherapistDetails(therapistId);
  }
});

// Let the user choose only date that will come
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("appointment-date").setAttribute("min", today);
});

// Function that get the detail of the therapist
const getTherapistDetails = async (therapistID) => {
  try {
    const therapistDetailsUrl = `http://localhost:8080/api/getTherapistDetails/${therapistID}`;

    const response = await fetch(therapistDetailsUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      errorMessageElement.textContent =
        errorResponse.error || "Login failed: Unknown error";
      errorMessageElement.style.display = "block";
      return;
    }

    const result = await response.json();

    const therapistCard = document.getElementById("therapist");
    therapistCard.className = "therapistCard";

    therapistCard.innerHTML = `
            <img class="imageStyle" src="../assets/images/${result.image_url}"/>
            <div class="imageDiv">
            <h3 id="therapistName" class="therapistName">${result.therapist_name} </h3>
            <p  class="specialization">${result.specialization}</p>
            <div class="location">
              <h4 class="locationName">${result.city}</h4>
            </div>
            
            <dotlottie-player src="https://lottie.host/529a898b-f65d-4546-85cd-252a7d345386/5tutwN6bLv.json" 
            background="transparent" 
            speed="1" 
            style="width: 70px; height: 70px;" loop autoplay>
            </dotlottie-player><link rel="stylesheet" href="style.css" />
            
            </div>

    
                `;

  } catch (error) {
    console.log(error);
  }
};


const getHour = async () => {
  const hoursArray = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  let getDate = document.getElementById("appointment-date").value;
  let therapistName = document.getElementById("therapistName").textContent;

  try {
    const therapistDetailsUrl = `http://localhost:8080/api/createNewAppointment/${getDate}/${therapistName}`;

    const response = await fetch(therapistDetailsUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      errorMessageElement.textContent =
        errorResponse.error || "Appointment creation failed: Unknown error";
      errorMessageElement.style.display = "block";
      return;
    }

    const result = await response.json();

    const filterHour = hoursArray.filter((hour) => !result.includes(hour));

    let chooseHours = document.getElementById("chooseHours");
    chooseHours.innerHTML = "";

    filterHour.forEach((hour) => {
      const createButton = document.createElement("button");
      createButton.classList.add("hour-button");
      createButton.textContent = hour;

      createButton.addEventListener("click", () => {
        selectedHour = hour;
      });

      chooseHours.appendChild(createButton);
    });

    const buttonSubmit = document.createElement("button");
    buttonSubmit.innerHTML = "<p>Submit</p>";
    buttonSubmit.onclick = () => {
      if (selectedHour) {
        const user = localStorage.getItem('userDetails');
        const data = JSON.parse(user);
        let therapistName = document.getElementById("therapistName").textContent;

        const newAppointment = {
          date: getDate,
          is_available: false,
          time: selectedHour,
          therapist_name: therapistName.trim(),
          patient_name: data.firstName + " " + data.lastName,
          patient_phoneNumber: data.phoneNumber,
        };

         addNewAppointment(newAppointment)
          .then(async() => {
            // Optionally, update UI or fetch data again after adding appointment
            await getHour(); // Refresh hours after adding appointment
          })
          .catch(error => {
            console.error('Failed to add appointment:', error);
            // Handle error if necessary
          });
      }
    };

    chooseHours.appendChild(buttonSubmit);
  } catch (error) {
    console.error("Error:", error);
  }
};

const addNewAppointment = async(appointment) => {
  try {
    const addNewAppointmentURL = `http://localhost:8080/api/addNewAppointment`;
    const response = await fetch(addNewAppointmentURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment)
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      errorMessageElement.textContent =
        errorResponse.error || "Appointment creation failed: Unknown error";
      errorMessageElement.style.display = "block";
      throw new Error(errorResponse.error || 'Unknown error');
    }

    const result = await response.json();
    return result; 
  } catch (error) {
    console.error("Error adding appointment:", error);
    throw error; // Rethrow error for handling in caller function
  }
};
