// const addLogout = () => {
//   document.getElementById("logoutDiv").style.display = "block"
//   // logout.style.display = 'block'

//   // privateDetails.appendChild(logout);

// };




// Add private detail to the page
const privateDetails = document.getElementById("privateDetails");
const addPrivateDetails = () => {
  const firstNameAndLastName = document.createElement("button");
  firstNameAndLastName.classList.add("firstNameAndLastName");

  firstNameAndLastName.onclick = () => {
    const logout = document.createElement("button");
    logout.innerHTML = `
    <button>
    <img src="../assets/images/logout_157938.svg" class="svgStyle">
    </button>
    `;
    privateDetails.innerHTML += logout.innerHTML;
  };

  const getDetails = localStorage.getItem("userDetails");
  const parseDetails = JSON.parse(getDetails);

  firstNameAndLastName.innerHTML = `
  <img class="svgStyle" src="../assets/images/oxfam_176708.svg"/>
  <h3>${parseDetails.firstName}</h3>
  <h3>${parseDetails.lastName}</h3>
  `;

  privateDetails.appendChild(firstNameAndLastName);
};

addPrivateDetails();



const allTherapist = document.getElementById("all-therapists");

// Get all therapist from the database
const getAllTherapist = async () => {
  const checkLocalStorage = localStorage.getItem("therapists");

  if (checkLocalStorage) {
    const therapists = JSON.parse(checkLocalStorage);

    therapists.forEach((therapist) => {
      const therapistCard = document.createElement("div");
      therapistCard.className = "therapistCard";

      therapistCard.innerHTML = `
      <img class="imageStyle" src="../assets/images/${therapist.image_url}"/>
      <h3>${therapist.therapist_name}</h3>
      <h4>${therapist.specialization}</h4>
        <div class="location">
          <img class="locationSvg" src="../assets/images/location.svg"/>
          <h4 class="locationName">${therapist.city}</h4>
        </div>
      <button onClick="createAppointment('${therapist._id}')" class="AppointmentButton">Create Appointment</button>
    `;

      allTherapist.appendChild(therapistCard);
    });
  }
  try {
    const therapistUrl = "http://localhost:8080/api/getAllTherapist";

    const response = await fetch(therapistUrl, {
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

    localStorage.setItem("therapists", JSON.stringify(result));

    result.forEach((therapist) => {
      const therapistCard = document.createElement("div");
      therapistCard.className = "therapistCard";

      therapistCard.innerHTML = `
                <img class="imageStyle" src="../assets/images/${therapist.image_url}"/>
                <h3>${therapist.therapist_name}</h3>
                <h4>${therapist.specialization}</h4>
                  <div class="location">
                    <h4 class="locationName">${therapist.city}</h4>
                    <img class="locationSvg" src="../assets/images/location.svg"/>
                  </div>
                <button onClick="createAppointment('${therapist._id}')" class="AppointmentButton">Create Appointment</button>
                `;

      allTherapist.appendChild(therapistCard);
    });
  } catch (error) {
    console.error("An error occurred during Therapists:", error);
    errorMessageElement.textContent =
      "An unexpected error occurred. Please try again later.";
    errorMessageElement.style.display = "block";
  }
};

getAllTherapist();



const checkLocalStorage = localStorage.getItem("therapists");
const therapists = JSON.parse(checkLocalStorage);


// Search therapist by name
const searchByName = () => {
  let searchInputByName = document.getElementById("searchInputByName").value;

  const filteredTherapists = therapists.filter((therapist) => {
    return therapist.therapist_name.toLowerCase().includes(searchInputByName);
  });

  allTherapist.innerHTML = "";

  filteredTherapists.forEach((therapist) => {
    const therapistCard = document.createElement("div");
    therapistCard.className = "therapistCard";

    therapistCard.innerHTML = `
          <img class="imageStyle" src="../assets/images/${therapist.image_url}"/>
          <h3>${therapist.therapist_name}</h3>
          <h4>${therapist.specialization}</h4>
            <div class="location">
              <h4 class="locationName">${therapist.city}</h4>
              <img class="locationSvg" src="../assets/images/location.svg"/>
            </div>
          <button onClick="createAppointment('${therapist._id}')" class="AppointmentButton">Create Appointment</button>
          `;

    allTherapist.appendChild(therapistCard);
  });
};

// Search therapist by specialization
const searchSpecialization = () => {
  let searchInputBySpecialization = document.getElementById(
    "searchInputBySpecialization"
  ).value;

  const filteredTherapists = therapists.filter((therapist) => {
    return therapist.specialization
      .toLowerCase()
      .includes(searchInputBySpecialization);
  });

  allTherapist.innerHTML = "";
  filteredTherapists.forEach((therapist) => {
    const therapistCard = document.createElement("div");
    therapistCard.className = "therapistCard";

    therapistCard.innerHTML = `
          <img class="imageStyle" src="../assets/images/${therapist.image_url}"/>
          <h3>${therapist.therapist_name}</h3>
          <h4>${therapist.specialization}</h4>
            <div class="location">
              <h4 class="locationName">${therapist.city}</h4>
              <img class="locationSvg" src="../assets/images/location.svg"/>
            </div>
          <button onClick="createAppointment('${therapist._id}')" class="AppointmentButton">Create Appointment</button>
          `;

    allTherapist.appendChild(therapistCard);
  });
};

// Search therapist by city
const searchCity = () => {
  let searchInputBySpecialization =
    document.getElementById("searchInputByCity").value;

  const filteredTherapists = therapists.filter((therapist) => {
    return therapist.city.toLowerCase().includes(searchInputBySpecialization);
  });

  allTherapist.innerHTML = "";
  filteredTherapists.forEach((therapist) => {
    const therapistCard = document.createElement("div");
    therapistCard.className = "therapistCard";

    therapistCard.innerHTML = `
          <img class="imageStyle" src="../assets/images/${therapist.image_url}"/>
          <h3>${therapist.therapist_name}</h3>
          <h4>${therapist.specialization}</h4>
            <div class="location">
              <h4 class="locationName">${therapist.city}</h4>
              <img class="locationSvg" src="../assets/images/location.svg"/>
            </div>
          <button onClick="createAppointment('${therapist._id}')" class="AppointmentButton">Create Appointment</button>
          `;

    allTherapist.appendChild(therapistCard);
  });
};


// Create appintment function
const createAppointment = async (therapistId) => {
  const url = `../createAppointment/createAppointment.html?therapistId=${therapistId}`;
  window.location.href = url;
};