function reDirect(){
    if (localStorage.getItem("UserName")&&localStorage.getItem("admin"))
        open("mainpage.html","_self")
}
async function signInAdmin(){
    userName=document.getElementById("AdminUser").value;
    password=document.getElementById("AdminPass").value;
    if (userName=="" ||password=="")
    {
        alert("empty field")
        return false
    }

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

    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token){
                console.log({data})
                localStorage.setItem("token",data.data.token)
                localStorage.setItem("admin",true)
                localStorage.setItem("UserName",userName)
                console.log("token",data.data.token+" "+data.data.username )
                open("mainpage.html","_self")
            }
            else if (data.error){
                document.getElementById("errorSmall").style.display="block"
                document.getElementById("errorSmall").innerText=data.error;
            }
        })
        .catch(error => {
            document.getElementById("errorSmall").style.display="block"
            document.getElementById("errorSmall").innerText=error;
        });

}
