const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://guideweb-1.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.detail || "Login failed");
            return;
        }

        alert(data.message);
        // later: redirect to a dashboard/home page here
window.location.href = "home.html";  // or index.html

    } catch (error) {
        console.error("Error connecting to server:", error);
        alert("Could not connect to server. Is the backend running?");
    }
});