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

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();