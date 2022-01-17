
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyB8vzoI0n_5F_xk4v9sFn3lthIh9UYd4EY",
  authDomain: "kawaii-chat-cb14f.firebaseapp.com",
  databaseURL: "https://kawaii-chat-cb14f-default-rtdb.firebaseio.com",
  projectId: "kawaii-chat-cb14f",
  storageBucket: "kawaii-chat-cb14f.appspot.com",
  messagingSenderId: "1059438729736",
  appId: "1:1059438729736:web:a2e795c27bbce806294fbd"
};
  firebase.initializeApp(firebaseConfig);    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();