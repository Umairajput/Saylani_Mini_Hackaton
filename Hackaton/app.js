  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDI1xw_CCntjjPBIxbTELnfq2wxbdhLfKo",
    authDomain: "hackaton-16a73.firebaseapp.com",
    projectId: "hackaton-16a73",
    storageBucket: "hackaton-16a73.appspot.com",
    messagingSenderId: "787899002082",
    appId: "1:787899002082:web:ee8a4486a96063378502bb",
    measurementId: "G-D5WQSCY0QB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);