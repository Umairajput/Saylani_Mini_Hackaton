import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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
    doc, getDoc, getFirestore, query, collection, where, getDocs, addDoc, updateDoc, onSnapshot, orderBy
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

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
        if(login_email == docSnap.data().email && login_password == docSnap.data().password){
            window.open("admin.html")
        }
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}
let login_btn = document.getElementById("login_btn")
login_btn.addEventListener("click", Login)