var firebaseConfig = {
  apiKey: "AIzaSyA_xZNvaKvNelThZ-zM7nRjaV6MMOUpETU",
  authDomain: "tweetbook-b81e6.firebaseapp.com",
  databaseURL: "https://tweetbook-b81e6.firebaseio.com",
  projectId: "tweetbook-b81e6",
  storageBucket: "tweetbook-b81e6.appspot.com",
  messagingSenderId: "942255417476",
  appId: "1:942255417476:web:37fef613c8f79d8d173ad1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

function check(){
    if (sessionStorage.getItem("user_name") == null){
      window.location = "index.html";
    }
  }

document.getElementById("display_name").innerHTML = "Welcome " + localStorage.getItem("user_name") + " !";

function add_room(){
    console.log("in add room");
    var user_room = document.getElementById("created_rn").value;
    console.log(user_room);
    firebase.database().ref("/").child(user_room).update({
    purpose : "adding room name"
    });
    localStorage.setItem("roomname", user_room);
    window.location = "tweet_page.html";
  } 
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trending_rooms").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log(Room_names);
     row = "<div id='" + Room_names + "' class='room_name' onclick='show(this.id)'>" + "#" + Room_names +"</div> <hr></hr>";
     document.getElementById("trending_rooms").innerHTML += row;
});});}
getData();

function show(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "tweet_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}



  