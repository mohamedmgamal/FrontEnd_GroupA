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
