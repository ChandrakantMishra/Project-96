// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyASF-ERAw3ai8U2GCFYr7466lUfUoSaqY4",
    authDomain: "kwitter2-d0f3e.firebaseapp.com",
    databaseURL: "https://kwitter2-d0f3e-default-rtdb.firebaseio.com",
    projectId: "kwitter2-d0f3e",
    storageBucket: "kwitter2-d0f3e.appspot.com",
    messagingSenderId: "828193511655",
    appId: "1:828193511655:web:bdba785678661d14c2aa42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
