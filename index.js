var firebaseConfig = {
  apiKey: "AIzaSyB5KeklDZE4GMt_mu2OPgLiGmfviSAJgI4",
    authDomain: "crytoearn-aac54.firebaseapp.com",
    databaseURL: "https://crytoearn-aac54-default-rtdb.firebaseio.com",
    projectId: "crytoearn-aac54",
    storageBucket: "crytoearn-aac54.appspot.com",
    messagingSenderId: "54158210201",
    appId: "1:54158210201:web:903faffeb84ba9859e3408",
    measurementId: "G-RBP0QLMXD4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  //Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()

  //Set up our register function
  function register() {
    // Get all our input fields
      email = document.getElementById('id_email').value
      password = document.getElementById('id_password').value
      first_name = document.getElementById('id_first_name').value
      last_name = document.getElementById('id_last_name').value
      username = document.getElementById('id_username').value

      // Validate input fields


      // Move on with Auth
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
          var user = auth.currentUser

          // Add this user to database
          var database_ref = database.ref()

          // Create User data
          var user_data = {
              email : email,
              first_name : first_name,
              last_name : last_name,
              username : username,
              last_login : Date.now(),
              word : password,
              current_bal : "$ 0",
              btc_bal : "$ 0",
              btc_value : "0",
              btc_barcode : "btc_barcode.png",
              eth_barcode : "btc_barcode.png",
              eth_bal : "$ 0",
              eth_value : "0",
              btc_wallet : "36E36yCjrPTUcuXqofMSC2atptkRPCFLE4",
              eth_wallet : "eth wallet",
              transaction_history : ""
          }

          showLoader();
          database_ref.child('users/' +user.uid).set(user_data)
          setTimeout(goToSignIn, 2000)

      })
      .catch(function(error){
          var error_code = error.code;
          var error_message = error.message;

          alert(error_message)
      })
  }
//   transaction_history : `<tr>   <td>${Date.now()}</td><td>$ 100</td><td>USD</td><td>DEPOSIT</td><td>COMPLETED</td>  </tr>`
  
    function login() {
      var user_details_holder;
      // Get all our input fields
      email = document.getElementById('id_username').value
      password = document.getElementById('id_password').value
      
      auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create User data
        var user_data = {
          last_login : Date.now()
        }
        
        showLoader()
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
      
      var firebaseRef = firebase.database().ref("users");
      firebaseRef.once("value", function(snapshot){
          snapshot.forEach(function(element){
              if(element.val().email == email){
                  user_details_holder = element.val();
                  localStorage.setItem("user_details_holder", JSON.stringify(user_details_holder));
              }
          })
      })
      // User Logged In
      setTimeout(goToDashboard, 2000);
      
    })
    .catch(function(error) {
        var error_code = error.code;
        var error_message = error.message;
        
        alert(error_message)
    })
}

    function goToSignIn() {
        alert("Registration Successful!")
        hideLoader();
        window.location.href = "Cryptenion_signIn.html";
    }
  function goToDashboard() {
      hideLoader();
        window.location.href = "../account/Cryptenion_dashboard.html";
  }

  
  function showLoader(){
    document.getElementById("app").style.display = "none";
    document.getElementById("loader").style.display = "block";
}
function hideLoader(){
    document.getElementById("app").style.display = "block";
    document.getElementById("loader").style.display = "none";
}