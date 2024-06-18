


// Function that handle the login 
const login = async () => {
    // Handle the error massage
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.style.display = 'none'; 

    try {
        // URL to send the login details
        const loginUrl = 'http://localhost:8080/api/login';

        // Get email and password from the user
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Cechk if email or password empty
        if (!email || !password) {
            // Return error to the user
            errorMessageElement.textContent = 'Email and password are required';
            errorMessageElement.style.display = 'block';
            return;
        }

        // Create object with the credentials
        const credential = {
            email: email,
            password: password
        };

        // Send POST request to the backend wwwith the credentials
        const response = await fetch(loginUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        });

        // Check if the response not ok
        if (!response.ok) {
            // Convert the response to object
            const errorResponse = await response.json();
            // Return the error to the user
            errorMessageElement.textContent = errorResponse.error || 'Login failed: Unknown error';
            errorMessageElement.style.display = 'block';
            return;
        }

        // If response ok convert the response to object
        const result = await response.json();

        // Save the user details to the local storage
        localStorage.setItem('userDetails', JSON.stringify(result));

        // If result ok (It's mean that the credentials legal) redirect to search page
        if (result) {
            // Active the function redirectTo and send the user to search page
            await redirectTo('../search/search.html');
        }

    // Catch if there is some errors
    } catch (error) {
        // Console log the error
        console.error('An error occurred during login:', error);
        // Return the error to the user
        errorMessageElement.textContent = 'An unexpected error occurred. Please try again later.';
        errorMessageElement.style.display = 'block';
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
