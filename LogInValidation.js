function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username.trim() === "" || password.trim() === "" || !username.includes("@")) {
        return false;
    }

    return true;
}

function login() {
    if (validateForm()) {
        window.location.href = "Main.html";
    }
}