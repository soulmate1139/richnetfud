var user_data = JSON.parse(localStorage.getItem("user_details_holder"));
console.log(user_data);



document.getElementById("current_bal").innerHTML = user_data.current_bal;
document.getElementById("btc_bal").innerHTML = user_data.btc_bal;
document.getElementById("eth_bal").innerHTML = user_data.eth_bal;
document.getElementById("btc_value").innerHTML = user_data.btc_value;
document.getElementById("eth_value").innerHTML = user_data.eth_value;
document.getElementById("username_label").innerHTML = user_data.username;
document.getElementById("last_login").innerHTML = user_data.last_login;

checkIfLoggedIn();
displayTransaction();
getVerifyStatus();
        
function deposit_constructor(){
checkIfLoggedIn();
document.getElementById("username_label").innerHTML = user_data.username;
dep_handleCoinTo("btc");
}
function exchange_constructor(){
checkIfLoggedIn();
document.getElementById("username_label").innerHTML = user_data.username;
}
function profile_constructor(){
checkIfLoggedIn();
document.getElementById("username_label").innerHTML = user_data.username;
    document.getElementById("full_name").value = user_data.first_name + " " + user_data.last_name;
    document.getElementById("email").value = user_data.email;
}
function rewards_constructor(){
checkIfLoggedIn();
document.getElementById("username_label").innerHTML = user_data.username;
}
function transaction_constructor(){
checkIfLoggedIn();
document.getElementById("username_label").innerHTML = user_data.username;
displayTransaction();

}
function transfer_constructor(){
    checkIfLoggedIn();
    document.getElementById("username_label").innerHTML = user_data.username;
}
function withdraw_constructor(){
    checkIfLoggedIn();
    document.getElementById("currency_bal").innerText = user_data.btc_bal;
    document.getElementById("username_label").innerHTML = user_data.username;
}


var temp_name = "BITCOIN", temp_wallet = user_data.btc_wallet, temp_barcode = user_data.btc_barcode;


// DEPOSIT
function dep_handleCoinTo(coinFrom) {
    if(coinFrom == "bch"){
        temp_name = "BITCOIN CASH";
        temp_wallet = user_data.btc_cash;
        temp_barcode = user_data.btc_barcode;
    } else if(coinFrom == "btc"){
        temp_name = "BITCOIN";
        temp_wallet = user_data.btc_wallet;
        temp_barcode = user_data.btc_cash_barcode;
    } else if(coinFrom == "eth"){
        temp_name = "ETHEREUM";
        temp_wallet = user_data.eth_wallet;
        temp_barcode = user_data.eth_barcode;
    } else if(coinFrom == "ltc"){
        temp_name = "LITECOIN";
        //temp_wallet = user_data.ltc_wallet;
        temp_wallet = "36E36yCjrPTUcuXqofMSC2atptkRPCFLE4"
    } else if(coinFrom == "usdt"){
        temp_name = "TETHER";
        //temp_wallet = user_data.usdt_wallet;
        temp_wallet = "2vpS18261AYVCpRBY4zYVREVz7dUzpwMFn"
    } else if(coinFrom == "giftcard"){
        window.location = "giftpay/Cryptenion _ KYC.html"
        temp_name = "GIFTCARD";
        //temp_wallet = user_data.usdt_wallet;
        temp_wallet = "36E36yCjrPTUcuXqofMSC2atptkRPCFLE4"
    } else {
        temp_name = "DASH";
        //temp_wallet = user_data.dash_wallet;
        temp_wallet = "pS18261ARBY4zYVRE2vYVCpVz7dUzpwMFn"
    }

    document.getElementById("txt_recieve").innerHTML = `<img src="./Cryptenion_exchange_files/${coinFrom}.png" width="20" alt="">
${temp_name}`;
    document.getElementById("address").value = temp_wallet;
    document.getElementById("barcode").src = temp_barcode;
}

function withdraw_handleCoinTo(coinFrom) {
    var temp_amount = 0;
    if(coinFrom == "bch"){
        temp_name = "BITCOIN CASH";
    } else if(coinFrom == "btc"){
        temp_name = "BITCOIN";
        temp_amount = user_data.btc_bal;
    } else if(coinFrom == "eth"){
        temp_name = "ETHEREUM";
        temp_amount = user_data.eth_bal;
    } else if(coinFrom == "ltc"){
        temp_name = "LITECOIN";
    } else if(coinFrom == "usdt"){
        temp_name = "TETHER";
    } else {
        temp_name = "DASH";
    }

    document.getElementById("txt_recieve").innerHTML = `<img src="./Cryptenion_exchange_files/${coinFrom}.png" width="20" alt="">
${temp_name}`;

document.getElementById("currency_bal").innerText = temp_amount;
}

function transfer_handleCoinTo(coinFrom) {
    var temp_amount= 0;
    if(coinFrom == "bch"){
        temp_name = "BITCOIN CASH";
        //temp_amount = user_data.btc_cash_value;
    } else if(coinFrom == "btc"){
        temp_name = "BITCOIN (BTC)";
        temp_amount = user_data.btc_value;
    } else if(coinFrom == "eth"){
        temp_name = "ETHEREUM (ETH)";
        temp_amount = user_data.eth_value;
    } else if(coinFrom == "ltc"){
        temp_name = "LITECOIN (LTC)";
        //temp_amount = user_data.btc_value;
    } else if(coinFrom == "usdt"){
        temp_name = "TETHER";
        //temp_amount = user_data.btc_value;
    } else {
        temp_name = "DASH";
        //temp_amount = user_data.btc_value;
    }

    document.getElementById("txt_transer_currency").value = temp_name;
    document.getElementById("img_transfer_currency").src = `./Cryptenion_transfer_files/${coinFrom}.png`;
    document.getElementById("lbl_current_currency").innerHTML = `AMOUNT IN ${coinFrom.toUpperCase()}`;
}

function exchange_handleCoinFrom(coinFrom) {
    var temp_amount= 0;
    if(coinFrom == "bch"){
        temp_name = "BITCOIN CASH";
        //temp_amount = user_data.btc_cash_value;
    } else if(coinFrom == "btc"){
        temp_name = "BITCOIN (BTC)";
        temp_amount = user_data.btc_value;
    } else if(coinFrom == "eth"){
        temp_name = "ETHEREUM (ETH)";
        temp_amount = user_data.eth_value;
    } else if(coinFrom == "ltc"){
        temp_name = "LITECOIN (LTC)";
        //temp_amount = user_data.btc_value;
    } else if(coinFrom == "usdt"){
        temp_name = "TETHER";
        //temp_amount = user_data.btc_value;
    } else {
        temp_name = "DASH";
        //temp_amount = user_data.btc_value;
    }

    document.getElementById("currency_to_sell").innerHTML = `SELL ${coinFrom}`;
    
    document.getElementById("amount_to_sell").innerHTML = `${temp_amount} ${coinFrom.toUpperCase()}`;

    document.getElementById("txt_send").innerHTML = `<img src="./Cryptenion_exchange_files/${coinFrom}.png" width="20" alt="">
    ${coinFrom.toUpperCase()}`;
}

function checkIfLoggedIn(){
    if(user_data == ""){
        window.location.href = "../auth/signIn.html";
    }
}

function logOut(){
    localStorage.setItem("user_details_holder", "");
    window.location.href = "../auth/signIn.html";
}

function onWithdraw(){
    let amount = document.getElementById("withdrawAmountTxt").value;
    let address = document.getElementById("wallet_address").value;
    
    if((amount !== "") && (address !== "")){
        // var mesgTitle = user_data.withdrawMsg[0]
        // var mesg = user_data.withdrawMsg[1];
        // var mesgType = user_data.withdrawMsg[2];
        // //swal( "mesgTitle", "mesg", "error");
        
        // // UPDATE THE BALANCE HERE
        // //var withdrawAmt = document.getElementById("withdrawAmountTxt").innerText;
        
        // if(mesgType == "success"){
        //     swal({
        //         title: mesgTitle,
        //         text: mesg,
        //         type: "success",
        //         button: "OKAY",
        //     });
        //     //document.getElementById("currency_bal").innerHTML = "$ 27,850";
        //     //user_data.current_bal = withdrawAmt;
        // } else if(mesgType == "info"){
        //     swal({
        //         title: mesgTitle,
        //         text: mesg,
        //         type: "info",
        //     });
        // } else {
        //     swal({
        //         title: mesgTitle,
        //         text: mesg,
        //         type: "error",
        //     });
        // }

        document.getElementById("email").value = user_data.email;
        document.getElementById("withdraw_form").submit();
        window.location = "../wallet/index.html";

    } else{
        swal({
            title: "Sorry!",
            text: "You need to fill all required fields",
            type: "error",
            button: "OKAY",
        });
    }
}

function displayTransaction(){
var arry = user_data.transaction_history;

    var rolls = "";
    for (var CELL of arry) {  
        rolls += `<tr> 
        <td>${CELL.tran_id}</td>
        <td>${CELL.added_dol}</td>
        <td>${CELL.currency}</td>
        <td>${CELL.tran_info}</td>
        <td>${CELL.status}</td>
        </tr>`;
    }

    document.getElementById("tbody").innerHTML = rolls;
}

function getVerifyStatus(){
    let status = user_data.verify_status;

    if(status == "verified"){
        document.getElementById("verified").style.display = "block";
        document.getElementById("not_verified").style.display = "none";
    }else {
        document.getElementById("verified").style.display = "none";
        document.getElementById("not_verified").style.display = "block";
    }
}

function reload_data(){
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

        
        var user_details_holder;
        // Get all our input fields
        email = user_data.email
        password = user_data.word
        auth.signInWithEmailAndPassword(email, password)
      .then(function() {
          // Declare user variable
          var user = auth.currentUser
  
          // Add this user to Firebase Database
          var database_ref = database.ref()
  
        //   // Create User data
        //   var user_data = {
        //   }
          
        // // Push to Firebase Database
        // database_ref.child('users/' + user.uid).update(user_data)
        
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
        setTimeout(set_new_data_after_reload(), 2000);
        
      })
      .catch(function(error) {
          var error_code = error.code;
          var error_message = error.message;
          
          alert(error_message)
      })
}
function set_new_data_after_reload(){
    user_data = JSON.parse(localStorage.getItem("user_details_holder"))
}










reload_data();
