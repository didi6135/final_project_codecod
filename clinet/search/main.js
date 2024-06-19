document.addEventListener("DOMContentLoaded", function() {

    // Getting the user details from the local storage
  const getDetails = localStorage.getItem("userDetails");
  // Parse the data to object
  const parseDetails = JSON.parse(getDetails);

  // Get the div by id that contains all private details
  const privateDetails = document.getElementById("privateDetails");


  // Function that adds private details to the page
  const addPrivateDetails = () => {
    privateDetails.innerHTML = `
      <div class="dropdown">
        <button onclick="openDropdown()" class="dropbtn">${parseDetails.firstName} ${parseDetails.lastName}</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="../privateArea/private-area.html?userEmail=${parseDetails.email}">Private area</a>
          <a class="logout" onClick="logout()">Logout</a>
        </div>
      </div>
    `;
  };

  // Call the function to add private details
  addPrivateDetails();

  // Active this function when enter to seaarch page
  getAllTherapist();

  // Function to toggle the dropdown menu
  window.openDropdown = function() {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});

const logout = () => {
  window.location.href = '../loginPage/login.html'
  localStorage.clear()
}



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



// -----------------------------------------------------------
// -----------------------------------------------------------
// ------------------ Search therapist -----------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

const manageSearch = () => {
  // Get all therapists from local storage
const checkLocalStorage = localStorage.getItem("therapists");

// Parse all therapists to object
const therapists = JSON.parse(checkLocalStorage);

  const searchInputByName = document.getElementById("searchInputByName").value.trim().toLowerCase();
  const searchInputBySpecialization = document.getElementById("searchInputBySpecialization").value.trim().toLowerCase();
  const searchInputByCity = document.getElementById("searchInputByCity").value.trim().toLowerCase();

  const filteredTherapists = therapists.filter(therapist => {
    const nameMatch = !searchInputByName || therapist.therapist_name.toLowerCase().includes(searchInputByName);
    const specializationMatch = !searchInputBySpecialization || therapist.specialization.toLowerCase().includes(searchInputBySpecialization);
    const cityMatch = !searchInputByCity || therapist.city.toLowerCase().includes(searchInputByCity);
    
    return nameMatch && specializationMatch && cityMatch;
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
