import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDI1xw_CCntjjPBIxbTELnfq2wxbdhLfKo",
    authDomain: "hackaton-16a73.firebaseapp.com",
    projectId: "hackaton-16a73",
    storageBucket: "hackaton-16a73.appspot.com",
    messagingSenderId: "787899002082",
    appId: "1:787899002082:web:ee8a4486a96063378502bb",
    measurementId: "G-D5WQSCY0QB"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



let name = document.getElementById("name")
let fathername = document.getElementById("fathername")
let rollNumber = document.getElementById("rollNumber")
let contact = document.getElementById("contact")
let CNIC = document.getElementById("CNIC")
let course = document.getElementById("course")
let sir = document.getElementById("sir")

let picture = document.getElementById("picture")
var reader;
var uploadedImage;
picture.addEventListener("change", function () {
    reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#showPic").style.backgroundImage = `url(${uploadedImage})`;
        document.querySelector("#showPic").style.width = "100px"
        document.querySelector("#showPic").style.height = "100px"
        document.querySelector("#showPic").style.marginLeft = "70px"
        document.querySelector("#showPic").style.borderRadius = "10px"
    });
    reader.readAsDataURL(this.files[0]);
});
const sendstudentDAta = async () => {
    if (name.value != "" && fathername.value != "" && rollNumber.value != "" && contact.value != "" && CNIC.value != "" && picture.files != "" && course.value != "" && sir.value != "") {
        await addDoc(collection(db, "Students"), {
            studentname: name.value,
            fathername: fathername.value,
            rollNumber:rollNumber.value,
            contact: contact.value,
            CNIC: CNIC.value,
            sirName: sir.value,
            course: course.value,
        });
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yess!",
        });
        name.value = ""
        fathername.value = ""
        contact.value = ""
        CNIC.value = ""
        rollNumber.value = ""

    }
    else {
        swal("Please Enter Values")
    }
}

window.sendstudentDAta = sendstudentDAta