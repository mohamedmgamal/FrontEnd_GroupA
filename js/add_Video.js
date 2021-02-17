async function validation() {
    var inputTitle = document.getElementById("inputTitle");
    var inputUrl = document.getElementById("inputUrl");
    var smallTitle = document.getElementById("titleHelp");
    var smallLink = document.getElementById("linkHelp");
    smallTitle.style.display = "none";
    smallLink.style.display = "none";
    if (inputTitle.value == "" && inputUrl.value == "") {
        smallTitle.innerText = "This field cant be empty";
        smallLink.innerText = "This field cant be empty";
        smallTitle.style.display = "block";
        smallLink.style.display = "block";
        return false;
    }
    if (inputTitle.value == "") {
        smallTitle.innerText = "This field cant be empty";
        smallTitle.style.display = "block";
        return false;
    }
    if (inputUrl.value=="") {
        smallLink.innerText="This field cant be empty";
        smallLink.style.display="block";
        return false;
    }
    if (inputTitle.value.length < 8 ) {
        smallTitle.innerText="Too short video title";
        smallTitle.style.display="block";
        return false;
    }
    title=inputTitle.value;
    url=inputUrl.value;
    var data = {
            "url":url,
            "title":title
        };
var requestOptions = {
    method: 'POST',
    headers:  {'Content-Type': 'application/json',"token":localStorage.getItem("token")},
    body: JSON.stringify(data),
    redirect: 'follow'
};
console.log({requestOptions})

fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/4/videos/", requestOptions)
    .then(response => response.json())
    .then(data => {
         if (data.error){
            console.log(data.error)
        }
        else {
            console.log({data});
            open("mainpage.html","_self");
        }
    })
    .catch(error => console.error('error', error));
}
