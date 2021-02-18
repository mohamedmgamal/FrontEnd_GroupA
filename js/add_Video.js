function fillInputs(){
    if (!localStorage.getItem("admin"))
        open("skrn.html","_self");
    video=localStorage.getItem("selectedMovie");
    video=JSON.parse(video);
    document.getElementById("videTitle").innerText="Movie Name : :"+video.title;
    document.getElementById("videoId").innerText="Movie Id :"+video.id;
    document.getElementById("editTitle").value=video.title;
    document.getElementById("editUrl").value=video.url;
}
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

fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/videos/", requestOptions)
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
async function editValidation() {
    var editTitle = document.getElementById("editTitle");
    var editUrl = document.getElementById("editUrl");
    var titleSmall = document.getElementById("titleSmall");
    var linkSmall = document.getElementById("linkSmall");
    titleSmall.style.display = "none";
    linkSmall.style.display = "none";
    if (editTitle.value == "" && editUrl.value == "") {
        titleSmall.innerText = "This field cant be empty";
        linkSmall.innerText = "This field cant be empty";
        titleSmall.style.display = "block";
        linkSmall.style.display = "block";
        return false;
    }
    if (editTitle.value == "") {
        titleSmall.innerText = "This field cant be empty";
        titleSmall.style.display = "block";
        return false;
    }
    if (editUrl.value=="") {
        linkSmall.innerText="This field cant be empty";
        linkSmall.style.display="block";
        return false;
    }
    if (editTitle.value.length < 8 ) {
        titleSmall.innerText="Too short video title";
        titleSmall.style.display="block";
        return false;
    }
    title=editTitle.value;
    url=editUrl.value;
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
    videoId=localStorage.getItem("selectedMovie");
    videoId=JSON.parse(videoId);
    videoId=videoId.id
    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/videos/"+videoId, requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.error){
                linkSmall.innerText=data.error
                console.log(data.error)
            }
            else {
                console.log({data});
                open("mainpage.html","_self");
            }
        })
        .catch(error => console.error('error', error));
}
async function Delete(){
    if (confirm('Are you sure you want to delete this movie from database?')) {
        videoId=localStorage.getItem("selectedMovie");
        videoId=JSON.parse(videoId);
        videoId=videoId.id
        var requestOptions = {
            method: 'DELETE',
            headers:  {'Content-Type': 'application/json',"token":localStorage.getItem("token")},
            redirect: 'follow'
        };
        fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/videos/"+videoId, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.error){
                    console.log(data.error)
                }
                else {
                    open("mainpage.html","_self");
                }
            })
            .catch(error => console.error('error', error));
    } else {

    }
}
