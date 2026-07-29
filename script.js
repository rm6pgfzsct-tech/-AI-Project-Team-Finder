function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("message").innerHTML =
        "Please enter your email and password.";
    } else {
        document.getElementById("message").innerHTML =
        "Login successful!";
    }

}
