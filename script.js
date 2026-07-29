function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let college = document.getElementById("college").value;
    let skills = document.getElementById("skills").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || college === "" || skills === "" || password === "") {

        document.getElementById("message").innerHTML =
        "Please fill all the fields.";

        return;
    }

    document.getElementById("message").innerHTML =
    "Registration Successful!";

}

function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {

        document.getElementById("message").innerHTML =
        "Please enter email and password.";

        return;
    }

    window.location.href = "dashboard.html";

}
