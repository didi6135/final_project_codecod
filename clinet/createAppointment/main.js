

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const therapistId = urlParams.get('therapistId');
  
    if (therapistId) {
      
    }
  });
  

const getTherapistDetails = async(therapistID) => {
    try {

        const therapistDetailsUrl = 'http://localhost:8080/api/getTherapistCalender';

        const response = await fetch(therapistDetailsUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(therapistID)
        });


    } catch (error) {
        
    }
}

