
const firebaseConfig = {
      apiKey: "AIzaSyBnr7_rCFzkKlsSyhiF1Yg9TbSFxp91nz0",
      authDomain: "kwitter-81f27.firebaseapp.com",
      databaseURL: "https://kwitter-81f27-default-rtdb.firebaseio.com",
      projectId: "kwitter-81f27",
      storageBucket: "kwitter-81f27.appspot.com",
      messagingSenderId: "973374479640",
      appId: "1:973374479640:web:1dfcd3d1db96d8da46526d"
    };

    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- " +Room_names);
      row="<div class=`room_name` id="+Room_names+" onclick=`redirectToRoomName(this.id)`>#"+ Room_names +"<div/><hr>";

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="Kwitter.html";
}
