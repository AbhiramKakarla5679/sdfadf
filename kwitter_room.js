
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAt63uYEauxC1z9o6WhA7NFR3fUrtDFxZM",
  authDomain: "kwitter-22db4.firebaseapp.com",
  databaseURL: "https://kwitter-22db4-default-rtdb.firebaseio.com",
  projectId: "kwitter-22db4",
  storageBucket: "kwitter-22db4.appspot.com",
  messagingSenderId: "275188046333",
  appId: "1:275188046333:web:1a2ce8f80f90875a60e194"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +user_name+"!"

function addRoom() 
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name) 
{
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logOut() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";  
}
