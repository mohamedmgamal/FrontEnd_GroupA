function validation() {
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
    alert("Adding video")
}
