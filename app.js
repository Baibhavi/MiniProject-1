const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyAHgAiugdmtYPX99dExxLCEZzz4CQw3bZ0",
    authDomain: "contactform-gaming.firebaseapp.com",
    databaseURL: "https://contactform-gaming-default-rtdb.firebaseio.com",
    projectId: "contactform-gaming",
    storageBucket: "contactform-gaming.appspot.com",
    messagingSenderId: "536682738340",
    appId: "1:536682738340:web:c7af23f72cdcee28c72c31",
    measurementId: "G-6XFQ8F53Z2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("message");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    ref.push({
        name:name,
        email:email,
        message:message
    })

    alert.style.display="block";

    setTimeout(()=>{
        alert.style.display = "none";
    },2000);

    form.reset();
})