import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// =========================
// REGISTER
// =========================

const registerBtn =
    document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener(
        "click",
        async function () {

            const name =
                document.getElementById("name")
                    .value.trim();

            const email =
                document.getElementById("email")
                    .value.trim();

            const password =
                document.getElementById("password")
                    .value;

            const confirmPassword =
                document.getElementById("confirmPassword")
                    .value;


            if (
                name === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert(
                    "Please fill all fields."
                );

                return;
            }


            if (
                password !== confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;
            }


            if (
                password.length < 6
            ) {

                alert(
                    "Password must be at least 6 characters."
                );

                return;
            }


            try {

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


                alert(
                    "Account created successfully!"
                );


                window.location.href =
                    "index.html";


            } catch (error) {

                console.error(error);

                alert(
                    error.message
                );

            }

        }
    );

}


// =========================
// LOGIN
// =========================

const loginBtn =
    document.getElementById("loginBtn");


if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        async function () {

            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            if (
                email === "" ||
                password === ""
            ) {

                alert(
                    "Please enter email and password."
                );

                return;
            }


            try {

                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


                alert(
                    "Login successful!"
                );


                window.location.href =
                    "dashboard.html";


            } catch (error) {

                console.error(error);

                alert(
                    error.message
                );

            }

        }
    );

}


// =========================
// LOGOUT
// =========================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async function () {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (!confirmLogout) {

                return;

            }


            try {

                await signOut(auth);


                window.location.href =
                    "index.html";


            } catch (error) {

                console.error(error);

                alert(
                    "Logout failed: " +
                    error.message
                );

            }

        }
    );

}