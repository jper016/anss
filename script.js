document.addEventListener("DOMContentLoaded", function() {
    // Appointment Form Submission
    const appointmentForm = document.getElementById("appointment-form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your appointment has been booked!");
            appointmentForm.reset();
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = contactForm.querySelector("input[name='name']").value.trim();
            const email = contactForm.querySelector("input[name='email']").value.trim();
            const message = contactForm.querySelector("textarea[name='message']").value.trim();

            if (name && email && message) {
                formMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
                formMessage.style.color = "green";
                contactForm.reset();
            } else {
                formMessage.textContent = "Please fill out all fields.";
                formMessage.style.color = "red";
            }
        });
    }

    // Carousel Controls
    let currentSlide = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlide(n) {
        for (let slide of slides) {
            slide.style.display = "none"; // Hide all slides
        }
        slides[n].style.display = "block"; // Show current slide
    }

    function changeSlide(n) {
        currentSlide = (currentSlide + n + slides.length) % slides.length; // Loop slides
        showSlide(currentSlide);
    }

    // Initialize first slide display
    if (slides.length > 0) {
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    setInterval(() => {
        if (slides.length > 0) changeSlide(1);
    }, 5000);

    // Navigation Buttons for Carousel (if present)
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => changeSlide(-1));
        nextButton.addEventListener("click", () => changeSlide(1));
    }
});
