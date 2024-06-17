document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const therapistId = urlParams.get("therapistId");

  if (therapistId) {
    getTherapistDetails(therapistId);
  }
});

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
            <h3>${result.therapist_name} </h3>
            
            <dotlottie-player src="https://lottie.host/529a898b-f65d-4546-85cd-252a7d345386/5tutwN6bLv.json" 
            background="transparent" 
            speed="1" 
            style="width: 100px; height: 100px;" loop autoplay>
            </dotlottie-player><link rel="stylesheet" href="style.css" />
            
            </div>

                <h4>${result.specialization}</h4>
                  <div class="location">
                  <img class="locationSvg" src="../assets/images/location.svg"/>
                    <h4 class="locationName">${result.city}</h4>
                  </div>
                `;

    getAllAppointments(result.therapist_name);
  } catch (error) {
    console.log(error);
  }
};

const appointmentsTable = document.getElementById("appointments");

const getAllAppointments = async (therapist_name) => {
  try {
    const therapistDetailsUrl = `http://localhost:8080/api/getCalenderOfTherapist/${therapist_name}`;

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

    result.forEach((appointment) => {
      const createAppointment = document.createElement("tr");

      createAppointment.innerHTML = `
        <td>${appointment.date.slice(0, 10)}</td>
        <td>${appointment.time}</td>
        <td>${appointment.is_available}</td>
                `;

      appointmentsTable.appendChild(createAppointment);
    });
  } catch (error) {
    console.log(error);
  }
};

var animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg", // You can choose 'canvas' or 'svg'
  loop: true,
  autoplay: true,
  path: "your-animation.json", // Path to your animation JSON file
});
