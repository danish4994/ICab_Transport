function validation(){
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("mobile").value;
    let subject = document.getElementById("subject").value;
    let usernameStatus = false;
    let emailStatus = false;
    let PhoneStatus = false;
    let subjectStatus = false;
    let CharExp = /^[a-zA-Z]+$/;

    if(username === ""){
        document.getElementById("nameerror").innerHTML = "Please Enter Valid Name *";
    }
    else {
        if(username.match(CharExp)){
            document.getElementById("nameerror").innerHTML = "";
            usernameStatus = true;
        }
        else{
        document.getElementById("nameerror").innerHTML = "Only Characters Are Allowed";
    }
    }

    if(email === ""){
        document.getElementById("emailerror").innerHTML = "Please Enter Valid Email *";
    }
    else{
        document.getElementById("emailerror").innerHTML = "";
        emailStatus = true;
    }

    if(phone === ""){
        document.getElementById("phoneerror").innerHTML = "Please Enter Valid phone Number *";
    }
    else if(isNaN(phone)){
        document.getElementById("phoneerror").innerHTML = "Please Enter Number Only *";
    } 
    else if(phone.length<10){
        document.getElementById("phoneerror").innerHTML = "please Enter 10 Digit *" ;
    }
    else{
        document.getElementById("phoneerror").innerHTML = "";
        PhoneStatus = true;
    }

    if(subject === ""){
        document.getElementById("subjecterror").innerHTML = "Please Enter valid Subject *"
    }
    else{
        document.getElementById("subjecterror").innerHTML = ""
        subjectStatus = true;
    }





    if(usernameStatus === true && emailStatus === true && PhoneStatus === true && subjectStatus === true){
        return true;
    }  
    else{
        return false;
    }
}