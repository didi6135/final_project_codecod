// Function that handle the login
const login = async () => {
  // Handle the error massage
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.style.display = "none";

  try {
    // URL to send the login details
    const loginUrl = "http://localhost:8080/api/login";

    // Get email and password from the user
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Cechk if email or password empty
    if (!email || !password) {
      // Return error to the user
      errorMessageElement.textContent = "Email and password are required";
      errorMessageElement.style.display = "block";
      return;
    }

    // Create object with the credentials
    const credential = {
      email: email,
      password: password,
    };

    // Send POST request to the backend wwwith the credentials
    const response = await fetch(loginUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
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

    // Save the user details to the local storage
    localStorage.setItem("userDetails", JSON.stringify(result));

    // If result ok (It's mean that the credentials legal) redirect to search page
    if (result) {
      // Active the function redirectTo and send the user to search page
      await redirectTo("../search/search.html");
    }

    // Catch if there is some errors
  } catch (error) {
    // Console log the error
    console.error("An error occurred during login:", error);
    // Return the error to the user
    errorMessageElement.textContent =
      "An unexpected error occurred. Please try again later.";
    errorMessageElement.style.display = "block";
  }
};

// Function that redirect user to another page
const redirectTo = (url) => {
  return new Promise((resolve) => {
    // Send the user to search page
    window.location.assign(url);
    // Resolve if success
    resolve();
  });
};

// Get the registration pop-up and the button to open it
const handlePopup = document.getElementById("handlePopup");
const registrationPopup = document.getElementById("registration-popup");
const openPopupBtn = document.getElementById("open-popup-btn");
const closePopupBtn = document.getElementById("close-popup");

// Open the registration pop-up
openPopupBtn.addEventListener("click", function () {
  registrationPopup.style.display = "block";
  handlePopup.style.display = "block";
});

// Close the registration pop-up
closePopupBtn.addEventListener("click", function () {
  registrationPopup.style.display = "none";
  handlePopup.style.display = "none";
});

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

const register =  () => {
  const firstName = document.getElementById("firstNameR").value.trim();
  const lastName = document.getElementById("lastNameR").value.trim();
  const email = document.getElementById("emailR").value.trim();
  const phoneNumber = document.getElementById("phoneNumberR").value.trim();

  const passwordInput = document.getElementById("passwordR").value.trim();
  const confirmPasswordInput = document
    .getElementById("confirm-passwordR")
    .value.trim();
  const passwordMessage = document.getElementById("error-message-password");
  const errorMessageElement = document.getElementById(
    "registration-error-message"
  );

  // Check if any field is empty
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !passwordInput ||
    !confirmPasswordInput
  ) {
    errorMessageElement.textContent = "All fields are required.";
    return;
  } else {
    errorMessageElement.textContent = "";
  }

  // Simple password match validation
  if (passwordInput !== confirmPasswordInput) {
    passwordMessage.textContent = "Passwords do not match.";
    return; // Prevent further execution
  } else {
    passwordMessage.textContent = "";
  }
  // Password strength validation (example criteria: at least 6 characters)
  if (passwordInput.length < 6) {
    passwordMessage.textContent =
      "Password must be at least 6 characters long.";
    return; // Prevent further execution
  } else {
    passwordMessage.textContent = "";
  }

  const createNewUser = {
    email: email,
    password: passwordInput,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };

   saveToDB(createNewUser);
};

const saveToDB = async (user) => {
    try {
      const registerUrl = `http://localhost:8080/api/register`;
  
      const response = await fetch(registerUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Registration failed:", errorResponse.error);
        return; // Exit function on error
      }
  
      const result = await response.json();
      if(result) {
          registrationPopup.style.display = "none";
          handlePopup.style.display = "none";
          localStorage.setItem('userDetails', JSON.stringify(result))
        document.getElementById('popupSuccess').style.display = 'block';
        setTimeout(() => {
          window.location.href = '../search/search.html'; // Redirect to private area URL
      
        }, 3000)
      }
      // Optionally handle success, e.g., update UI or navigate to next page
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      // Handle or log the unexpected error
    }
  };
  
