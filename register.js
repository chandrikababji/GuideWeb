const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://guideweb-1.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.detail || "Registration failed");
            return;
        }

        alert("Account created! Welcome, " + data.name);
        window.location.href = "login.html";

    } catch (error) {
        console.error("Error connecting to server:", error);
        alert("Could not connect to server. Is the backend running?");
    }
});