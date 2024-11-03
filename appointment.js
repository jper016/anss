document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show loading animation
        showLoadingAnimation();

        // Simulate an API call or form processing
        setTimeout(() => {
            alert('Appointment booked successfully!');
            appointmentForm.reset(); // Reset the form fields
            hideLoadingAnimation(); // Hide loading animation
        }, 2000); // Simulates a 2-second delay for processing
    });
});

function showLoadingAnimation() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);
}

function hideLoadingAnimation() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        document.body.removeChild(loadingOverlay);
    }
}
