
      //Start code

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAzVVA9BW-dL0-nGcmo4MafDaqDet7PncY",
    authDomain: "letschatwebapp-52b6f.firebaseapp.com",
    projectId: "letschatwebapp-52b6f",
    storageBucket: "letschatwebapp-52b6f.appspot.com",
    messagingSenderId: "1003738749574",
    appId: "1:1003738749574:web:ae4f052f37d226a49ecf07",
    measurementId: "G-N59YFZ72BQ"
  };
  
//ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name")="welcome" + user_name + "!"

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);

window.location = "kwitter_room.html";
}


function getData() {firebase.database().ref("/").on("value", function(Snapshot) {
  document.getElementById("output").innerHTML="";
Snapshot.forEach(function(childSnapshot){
  childKey=childSnapshot.key;
  Room_names = childKey;





      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}














