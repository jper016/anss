document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointment-form");
    const serviceForm = document.getElementById("service-form");

    // Open and close form functions
    window.openAddAppointmentForm = function() {
        appointmentForm.style.display = "block";
    };
    
    window.closeAppointmentForm = function() {
        appointmentForm.style.display = "none";
    };

    window.openAddServiceForm = function() {
        serviceForm.style.display = "block";
    };

    window.closeServiceForm = function() {
        serviceForm.style.display = "none";
    };

    // Form submission handling
    document.getElementById("appointment-form-details").addEventListener("submit", function(event) {
        event.preventDefault();
        // Add AJAX to save appointment details
        closeAppointmentForm();
        alert("Appointment saved!");
    });

    document.getElementById("service-form-details").addEventListener("submit", function(event) {
        event.preventDefault();
        // Add AJAX to save service details
        closeServiceForm();
        alert("Service saved!");
    });
});
