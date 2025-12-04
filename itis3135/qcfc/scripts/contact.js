document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        let errors = [];

        if (name.length < 2) errors.push("Name must be at least 2 characters.");
        if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) errors.push("Enter a valid email.");
        if (message.length < 10) errors.push("Message must be at least 10 characters.");

        const output = document.getElementById("form-output") || document.createElement("p");
        output.id = "form-output";
        form.appendChild(output);

        if (errors.length > 0) {
            output.style.color = "red";
            output.textContent = errors.join(" ");
        } else {
            output.style.color = "green";
            output.textContent = "Message sent successfully!";
            form.reset();
        }
    });
});