const firebaseConfig = {
    apiKey: "AIzaSyDothBWxMCfivdwB6VMmMfLWrhtqpr8pFA",
    authDomain: "deepak-slttask.firebaseapp.com",
    databaseURL: "https://deepak-slttask-default-rtdb.firebaseio.com",
    projectId: "deepak-slttask",
    storageBucket: "deepak-slttask.appspot.com",
    messagingSenderId: "799573046902",
    appId: "1:799573046902:web:319ac3fc23ea1cb48ad157",
    measurementId: "G-VKLLJMD0NC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var name = document.getElementById('fname').value;
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var name = document.getElementById('fname').value;
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");

    if (name.trim() == "") {
        alert('Name cannot be empty.');
        return false;
    }
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format. Please use a valid email address.');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }
}
        // Assuming you have a variable 'username' with the actual username
        // Function to display the welcome message
        function displayWelcome() {
            var welcomeMessage = document.getElementById("welcome-message");
            welcomeMessage.textContent = "Welcome, " + name + "!";
        }

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}