function validation(){
    document.getElementById("errors").innerText="";
    var usr =document.getElementById("User");
    var pass =document.getElementById("pass");
    var re_pass =document.getElementById("re-pass");
    var mail =document.getElementById("email");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{​​​​|}​​​​~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
    if(re_pass.value ==""){
                document.getElementById("errors").innerHTML="Please Enter password";
                return false;
            }
            var lowerCaseLetters = /[a-z]/g;
    if(!re_pass.value.match(lowerCaseLetters)) {
                document.getElementById("errors").innerHTML="Your password should contain lower_case letters";
                return false;
            }
            var upperCaseLetters = /[A-Z]/g;
    if(!re_pass.value.match(upperCaseLetters)) {
                document.getElementById("errors").innerHTML="Your password should contain Upper_case letters";
                return false;
            }
            var numbers = /[0-9]/g;
    if(!re_pass.value.match(numbers)) {
                document.getElementById("errors").innerHTML="Your password should contain Numbers";
                return false;
                   }
    if(re_pass.value.length < 8) {
                document.getElementById("errors").innerHTML="Your password should Greater than 8 letters";
                return false;
                    }
    if(re_pass.value != pass.value) {
                document.getElementById("errors").innerHTML="Your password does not match";
                return false;
                            }

    if(mail.value=="")  {
        document.getElementById("errors").innerHTML="You should Enter valid Email ";
        return false;
    }
    //  if(mail.value.match(mailformat))  {
    //      document.getElementById("errors").innerHTML="You should Enter valid Email ";
    //      return false;
    //          }
     addToServer(usr.value,pass.value);
}
function onload(){
    if (localStorage.getItem("UserName")&&localStorage.getItem("Password"))
        open("mainpage.html","_self")
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
    }
    signIn(signInEmail.value,signInPassword.value)
}
async function addToServer(usr,pass){
    var user =
        {"username":usr, "password":pass};
        var requestOptions = {
        method: 'POST',
        headers:{
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        redirect: 'follow'
    };

    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/4/register", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token){
                console.log("success login token : "+data.token)
               open("signIn.html","_self")
                console.log({data})
            }
            else if (data.error){
                console.log({data})
                document.getElementById("errors").innerText=data.error;
            }
        })
        .catch(error => console.error('error', error));

}
async function signIn(userName,password){
    var user =
        {"username":userName, "password":password};
    var requestOptions = {
        method: 'POST',
        headers:{
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        redirect: 'follow'
    };

    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/4/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token){
                console.log({data})
                localStorage.setItem("token",data.data.token)
                console.log("token",data.data.token+" "+data.data.username )
               open("mainpage.html","_self")
            }
            else if (data.error){
                console.log(data.error)
                document.getElementById("passwordHelp").style.display="block"
               document.getElementById("passwordHelp").innerText=data.error;
            }
        })
        .catch(error => console.error('error', error));

}
