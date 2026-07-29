import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// 👇 Paste the new code here
window.register = async function () {

  // Registration code here

};
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

window.register = async function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const skills = document.getElementById("skills").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !college || !skills || !password) {
        document.getElementById("message").innerHTML = "Please fill all fields.";
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "students", userCredential.user.uid), {
            name: name,
            email: email,
            college: college,
            skills: skills,
            rank: "Beginner",
            score: 0
        });

        document.getElementById("message").innerHTML = "Account created successfully!";

    } catch (error) {
        document.getElementById("message").innerHTML = error.message;
    }

};
