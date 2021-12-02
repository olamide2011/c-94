
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpCDffrd-qAU1MS3oShGLDOiQ1iLwIQcg",
      authDomain: "kwitter-1817d.firebaseapp.com",
      databaseURL: "https://kwitter-1817d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1817d",
      storageBucket: "kwitter-1817d.appspot.com",
      messagingSenderId: "872113725130",
      appId: "1:872113725130:web:5d3566dc21403281d81e33",
      measurementId: "G-N1CT0CB8KV"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
