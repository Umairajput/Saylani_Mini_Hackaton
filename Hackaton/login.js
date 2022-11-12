import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDI1xw_CCntjjPBIxbTELnfq2wxbdhLfKo",
    authDomain: "hackaton-16a73.firebaseapp.com",
    projectId: "hackaton-16a73",
    storageBucket: "hackaton-16a73.appspot.com",
    messagingSenderId: "787899002082",
    appId: "1:787899002082:web:ee8a4486a96063378502bb",
    measurementId: "G-D5WQSCY0QB"
};
import {
    doc, getDoc, getFirestore,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
let email;
let password;
async function Login() {
    let login_email = document.getElementById("login_email").value
    let login_password = document.getElementById("login_password").value
    const docRef = doc(db, "Admin", "mmTnoEDSTkYr9zeJacLE");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if (login_email == docSnap.data().email && login_password == docSnap.data().password) {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
            window.open("admin.html")
        }
    } else {
        swal("User Not Found")
    }
}
let login_btn = document.getElementById("login_btn")
login_btn.addEventListener("click", Login)