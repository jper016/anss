document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Gather form data
        const formData = new FormData(registrationForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Here you can add AJAX to send data to the server
        console.log("Registration data:", data);
        alert("Registration successful! Please check your email to verify your account.");
        
        // Optionally reset the form after submission
        registrationForm.reset();
    });
});
