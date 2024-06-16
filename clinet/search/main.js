// const createElement = () => {
//     const createName = document.createElement('h2')
//     const getData = localStorage.getItem('userDetails')
//     createName.innerHTML = getData
//     document.body.appendChild(createName)
//     console.log(getData)
// }

// createElement()

const getAllTherapist = async () => {
  const allTherapist = document.getElementById("all-therapists");
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
            <button onClick="createAppointment()" class="AppointmentButton">Create Appointment</button>
            `;

      allTherapist.appendChild(therapistCard);
    });
  }
  try {
    try {
      const loginUrl = "http://localhost:8080/api/getAllTherapist";

      const response = await fetch(loginUrl, {
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
                <button onClick="createAppointment()" class="AppointmentButton">Create Appointment</button>
                `;

        allTherapist.appendChild(therapistCard);
      });
    } catch (error) {
      console.error("An error occurred during Therapists:", error);
      errorMessageElement.textContent =
        "An unexpected error occurred. Please try again later.";
      errorMessageElement.style.display = "block";
    }
  } catch (error) {}
};

getAllTherapist();

const createAppointment = async () => {
  window.location.href = "../createAppointment/createAppointment.html";
};




    const checkLocalStorage = localStorage.getItem("therapists");
    const therapists = JSON.parse(checkLocalStorage);

    const searchInput = document.getElementById('searchInput');
    const suggestionsList = document.getElementById('suggestionsList');
    
    searchInput.addEventListener('input', function() {
      const inputValue = this.value.toLowerCase();
      suggestionsList.innerHTML = '';
    
      const filteredTherapists = therapists.filter(function(therapist) {
        return therapist.therapist_name.toLowerCase().includes(inputValue) ||
               therapist.specialization.toLowerCase().includes(inputValue);
      });
    
      filteredTherapists.forEach(function(therapist) {
        const li = document.createElement('li');
        li.textContent = `${therapist.therapist_name} - ${therapist.specialization}`;
        li.addEventListener('click', function() {
          searchInput.value = `${therapist.therapist_name} - ${therapist.specialization}`;
          suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
      });
    });
    
    document.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.innerHTML = '';
      }
    });