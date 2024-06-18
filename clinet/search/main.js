// const addLogout = () => {
//   document.getElementById("logoutDiv").style.display = "block"
//   // logout.style.display = 'block'

//   // privateDetails.appendChild(logout);

// };

// Get the div by id that contain all private details
const privateDetails = document.getElementById("privateDetails");

// Function that add private details to the page
const addPrivateDetails = () => {
  // Create a button that contain the first name nad the last name of user
  const firstNameAndLastName = document.createElement("button");

  // Add class to the buton to style it iin css
  firstNameAndLastName.classList.add("firstNameAndLastName");

  // Adding onClick to the button
  firstNameAndLastName.onclick = () => {
    // Create new button With option to logout
    const logout = document.createElement("button");
    logout.innerHTML = `
    <button>
    <img src="../assets/images/logout_157938.svg" class="svgStyle">
    </button>
    `;
    // Adding the button to privateDetails
    privateDetails.innerHTML += logout.innerHTML;
  };

  // Getting the user details from the local storage
  const getDetails = localStorage.getItem("userDetails");
  // Parse the data to object
  const parseDetails = JSON.parse(getDetails);

  // Inner into firstNameAndLastName the first name and the last name
  firstNameAndLastName.innerHTML = `
  <img class="svgStyle" src="../assets/images/oxfam_176708.svg"/>
  <h3>${parseDetails.firstName}</h3>
  <h3>${parseDetails.lastName}</h3>
  `;

  // Append firstNameAndLastName to privateDetails div
  privateDetails.appendChild(firstNameAndLastName);
};

// Active this function when enter to the search page
addPrivateDetails();

// -----------------------------------------------------------
// -----------------------------------------------------------
// ------------------ Get all therapist ----------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

// Get the div that will contain all the therapist
const allTherapist = document.getElementById("all-therapists");

// Function that Get all therapist from the database
const getAllTherapist = async () => {
  // Checking if there is therapists that saved in local Storage
  const checkLocalStorage = localStorage.getItem("therapists");

  // If local Storage contain therapists
  if (checkLocalStorage) {
    // Parse the therapist to object
    const therapists = JSON.parse(checkLocalStorage);
    drawTherapistsCard(therapists);
  }

  // If local storage not contain any therapists
  try {
    // URL that give all therapists from database
    const therapistUrl = "http://localhost:8080/api/getAllTherapist";

    // Send GET request to the backend to get all therapists
    const response = await fetch(therapistUrl, {
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

    // Save the all therapists to the local storage
    localStorage.setItem("therapists", JSON.stringify(result));

    drawTherapistsCard(result);

    // Catch any error from backend
  } catch (error) {
    // Console log the error
    console.error("An error occurred during Therapists:", error);
    // Send the error to user
    errorMessageElement.textContent =
      "An unexpected error occurred. Please try again later.";
    errorMessageElement.style.display = "block";
  }
};

// Active this function when enter to seaarch page
getAllTherapist();

// -----------------------------------------------------------
// -----------------------------------------------------------
// ------------------ Search therapist -----------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

// Get all therapists from local storage
const checkLocalStorage = localStorage.getItem("therapists");

// Parse all therapists to object
const therapists = JSON.parse(checkLocalStorage);

// Function that let you search therapist by name
// (This function active any time when the input change (oninput command))

const searchByName = () => {
  // Get the value from user input by id .searchInputByName
  let searchInputByName = document.getElementById("searchInputByName").value;

  // Filter therapists based on value that the user input
  const filteredTherapists = therapists.filter((therapist) => {
    // Retun only therapists that include user value
    return therapist.therapist_name.toLowerCase().includes(searchInputByName);
  });

  drawTherapistsCard(filteredTherapists);
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

  drawTherapistsCard(filteredTherapists);
};

// Search therapist by city
const searchCity = () => {
  let searchInputBySpecialization =
    document.getElementById("searchInputByCity").value;

  const filteredTherapists = therapists.filter((therapist) => {
    return therapist.city.toLowerCase().includes(searchInputBySpecialization);
  });

  drawTherapistsCard(filteredTherapists);
};

// Create appintment function
const createAppointment = async (therapistId) => {
  const url = `../createAppointment/createAppointment.html?therapistId=${therapistId}`;
  window.location.href = url;
};

// Function that create therapists card
function drawTherapistsCard(therapistsArray) {
  // Clean the all therapists div
  allTherapist.innerHTML = "";

  // Run on all therapists array
  therapistsArray.forEach((therapist) => {
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
}
