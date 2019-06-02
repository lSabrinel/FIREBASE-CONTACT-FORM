  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyBZcXCCHSz4w-BeJhiNIIHftlyo1x6fwGg",
    authDomain: "contact-form-b82b0.firebaseapp.com",
    databaseURL: "https://contact-form-b82b0.firebaseio.com",
    projectId: "contact-form-b82b0",
    storageBucket: "contact-form-b82b0.appspot.com",
    messagingSenderId: "60493052800",
    appId: "1:60493052800:web:380bcdbd85b891c0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

// creat a collection(On SQL) (table(SQL)) in our firebase data base 

  var users = firebase.database().ref();

document.getElementById("submit").addEventListener('click',handleSubmit);

function handleSubmit(event){

    event.preventDefault();
    var username= document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  

   /*!console.log(firstName,lastName,age,email);*/

   saveUser(username,email,password);

}

function saveUser(username,email,password){

    var newUser = users.push();
    newUser.set({

        user    : username,
        mail    : email,
        passw   : password

    })

    document.getElementById("username").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";

    alert(" You now have an account !");

}


