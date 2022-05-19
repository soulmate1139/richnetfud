const get_started = document.getElementById("p_start");
const get_earn = document.getElementById("p_earn");
const get_address = document.getElementById("p_address");

var text_start = "", text_earn = "", text_address = "";


function getStartedOnclick(){

    if(text_start === ""){
        text_start = `The information you need to provide for your wallet to be created are;


        . Your Full Names
        
        . Date Of Birth
        
        . Your� Email Address.
        
        . Your Phone Number.`;
    } else {
        text_start = "";
    }
    get_started.innerHTML = text_start;
    
}


function earnOnclick(){

    if(text_earn === ""){
        text_earn = `Your wallet will be created by a mining expert and it will be connected to blockchestcapitals mining network, a mail will be sent to you from�www.blockchain.com�containing your wallet information ( wallet ID) and a� pseudorandomly generated system password will be sent to you accordingly.`;
    } else {
        text_earn = "";
    }
    get_earn.innerHTML = text_earn;
    
}

function addressOnclick(){

    if(text_address === ""){
        text_address = `YOU ARE REQUIRED TO VERIFY YOUR EMAIL ADDRESS ONCE YOUR WALLET IS READY.


        1. You're to login with the pseudorandomly generated system password after you have verified your email address.
        
        2. Once you login into your wallet you're advise/ required to immediately change the pseudorandomly generated system password to a new or a unique password of your choice that you alone can have access to.
        
        3.� You are also advise to set the various security verifications processes to enable you secure your investment.
        
        4.� After you must have� changed your password and also completed the security setup.
        
        5. Go to�www.blockchestcapitals.com�to sign up, use the same email address you provided, because the email is already connected to blockchestcapitals mining network through�blockchain.com. Once you have completed your sign up process;
        
        6. You can now go and fund your wallet with the required amount of Bitcoin plan that you must have chosen.`;
    } else {
        text_address = "";
    }
    get_address.innerHTML = text_address;
    
}