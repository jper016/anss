document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form submission for demo purposes

        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (name && email && message) {
            formMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
            formMessage.style.color = "green";
            form.reset();
        } else {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
        }
    });
});
