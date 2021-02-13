function validation(){
    var usr =document.getElementById("User");
    var pass =document.getElementById("pass");
    var mail =document.getElementById("email");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(usr.value ==""){
        document.getElementById("errors").innerHTML="Please Enter User name";
        return false;
    }
    if(pass.value ==""){
        document.getElementById("errors").innerHTML="Please Enter password";
        return false;
    }
    var lowerCaseLetters = /[a-z]/g;
    if(!pass.value.match(lowerCaseLetters)) {
        document.getElementById("errors").innerHTML="Your password should contain lower_case letters";
        return false;
    } 
    var upperCaseLetters = /[A-Z]/g;
    if(!pass.value.match(upperCaseLetters)) {
        document.getElementById("errors").innerHTML="Your password should contain Upper_case letters";
        return false;
    } 
    var numbers = /[0-9]/g;
    if(!pass.value.match(numbers)) {
        document.getElementById("errors").innerHTML="Your password should contain Numbers";
        return false;
           }
     if(pass.value.length < 8) {
        document.getElementById("errors").innerHTML="Your password should Greater than 8 letters";
        return false;
            }
    if(mail.value.match(mailformat))  {
        document.getElementById("errors").innerHTML="You should Enter valid Email ";
        return false;
            }
     return true;
}

function onload(){
    if (localStorage.getItem("UserName")&&localStorage.getItem("Password"))
        alert("Signing in")
}
function signInValidation(){
    var signInEmail=document.getElementById("signInEmail");
    var signInPassword=document.getElementById("signInPassword1")
    var emailHelp= document.getElementById("emailHelp");
    var passwordHelp= document.getElementById("passwordHelp");
    var rememberMeCheckBox= document.getElementById("rememberMeCheckBox");
    emailHelp.style.display="none";
    passwordHelp.style.display="none";
    if ( signInEmail.value=="" && signInPassword.value=="" ){
        emailHelp.innerText='cant be empty field ..';
        passwordHelp.innerText='cant be empty field ..';
        emailHelp.style.display="block";
        passwordHelp.style.display="block"
        emailHelp.style.color='#ba0303';
        passwordHelp.style.color='#ba0303';
        return false;
    }
    if ( signInEmail.value==""){
        emailHelp.innerText='cant be empty field ..';
        emailHelp.style.display="block";
        emailHelp.style.color='#ba0303';
        return false;
    }
    if ( signInPassword.value=="" ){
        passwordHelp.innerText='cant be empty field ..';
        passwordHelp.style.display="block"
        passwordHelp.style.color='#ba0303';
        return false;
    }
    if (rememberMeCheckBox.checked == true)
    {
        localStorage.setItem("UserName",signInEmail.value);
        localStorage.setItem("Password",signInPassword.value);
    }
    alert("Signing in")
    return true
}

