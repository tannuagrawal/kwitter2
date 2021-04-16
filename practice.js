var firebaseConfig = {
    apiKey: "AIzaSyBoylI2iXPaF-TvUeyiW0QOHUufYED1ZTg",
    authDomain: "kwitter-7a878.firebaseapp.com",
    databaseURL: "https://kwitter-7a878-default-rtdb.firebaseio.com",
    projectId: "kwitter-7a878",
    storageBucket: "kwitter-7a878.appspot.com",
    messagingSenderId: "90317049035",
    appId: "1:90317049035:web:efc877562899d3ecb55f4e",
    measurementId: "G-5FZ3VWG9CP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
