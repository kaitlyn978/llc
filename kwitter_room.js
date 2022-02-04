username=localStorage.getItem("username");
      document.getElementById("h3").innerHTML="Welcome "+username;
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCY3OwlIlbFmPIFv7aFfsVtfPL26Ryahsk",
      authDomain: "chitchat-50bdb.firebaseapp.com",
      databaseURL: "https://chitchat-50bdb-default-rtdb.firebaseio.com",
      projectId: "chitchat-50bdb",
      storageBucket: "chitchat-50bdb.appspot.com",
      messagingSenderId: "198284791215",
      appId: "1:198284791215:web:e21d423c62efd8b6f5335a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name",Room_names);
      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
      
}
function addroom() {
      room_name=document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
