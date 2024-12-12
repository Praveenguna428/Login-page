// script.js

// JavaScript for form validation
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if fields are empty
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false; // Prevent form submission
    }
    
    // Optionally, add more validation checks (e.g., minimum password length)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If everything is valid, allow form submission
    return true;
}
