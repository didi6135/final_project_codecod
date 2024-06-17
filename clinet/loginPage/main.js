const login = async () => {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.style.display = 'none'; 

    try {
        const loginUrl = 'http://localhost:8080/api/login';

        // Get email and password from the user
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            errorMessageElement.textContent = 'Email and password are required';
            errorMessageElement.style.display = 'block';
            return;
        }

        const credential = {
            email: email,
            password: password
        };

        console.log(`email: ${email}, password: ${password}`);

        const response = await fetch(loginUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            errorMessageElement.textContent = errorResponse.error || 'Login failed: Unknown error';
            errorMessageElement.style.display = 'block';
            return;
        }

        const result = await response.json();

        localStorage.setItem('userDetails', JSON.stringify(result));

        if (result) {
            await redirectTo('../search/search.html');
        }

    } catch (error) {
        console.error('An error occurred during login:', error);
        errorMessageElement.textContent = 'An unexpected error occurred. Please try again later.';
        errorMessageElement.style.display = 'block';
    }
};

const redirectTo = (url) => {
    return new Promise((resolve) => {
        window.location.assign(url);
        resolve(); // Immediately resolve the promise since we can't actually await the redirection
    });
};
