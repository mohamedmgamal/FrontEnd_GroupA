var html="";
var datalist=[];
var imageList=["img/l-1.jpg","img/l-2.jpg","img/l-3.jpg","img/l-4.jpg","img/l-5.jpg","img/l-6.jpg"
    ,"img/l-7.jpg","img/l-8.jpg","img/l-9.jpg","img/l-10.jpg","img/l-11.jpg","img/l-12.jpg","img/l-13.jpg",
    "img/l-14.jpg","img/l-15.jpeg","img/l-16.jpg"];
var myVideo=document.getElementById("myVideo");
var fakeVideoId=myVideo.baseURI;
var oldVolume=0;
if (localStorage.getItem(fakeVideoId))
    myVideo.currentTime=localStorage.getItem(fakeVideoId)
function playPause(){
    if (myVideo.paused)
    {myVideo.play();
        document.getElementById("overlay").style.display="none"
        document.getElementById("startPause").src = "img/pause-icon-18-256.png";}
    else
    { myVideo.pause();
        document.getElementById("overlay").style.display="block"
        document.getElementById("startPause").src = "img/ic_play_circle_filled_white_48px-512.png";
    }
}
function stopp(){
    myVideo.pause();
    myVideo.currentTime=0;
    document.getElementById("startPause").src = "img/ic_play_circle_filled_white_48px-512.png";
}
myVideo.addEventListener("timeupdate",function (e){
    document.getElementById("progressPar").value=(myVideo.currentTime/myVideo.duration)*100;
    localStorage.setItem(fakeVideoId, myVideo.currentTime);
})
document.getElementById("progressPar").addEventListener("click",function (e){
    current_offset=(e.offsetX/document.getElementById("progressPar").offsetWidth)*100;
    myVideo.currentTime=myVideo.duration*current_offset/100;
})
function  fowroadd(){
    myVideo.currentTime+=1;
}
function  backwordd(){
    myVideo.currentTime-=1;
}
function speedChanged(selector){
    myVideo.playbackRate =selector.value;
}
function fullScreen() {
    myVideo.webkitEnterFullScreen();

}
document.addEventListener("keydown",function (e){
    switch (e.key){
        case "ArrowRight": fowroadd();
            break;
        case "ArrowLeft":backwordd();
            break;
        case " ":playPause();
            break;
        case "ArrowUp":myVideo.volume=myVideo.volume+.1;
            break;
        case "ArrowDown":myVideo.volume=myVideo.volume-.1;
    }
})
document.getElementById("volumeBtn").addEventListener("click",function (){
    if (myVideo.volume==0)
    {myVideo.volume=oldVolume;
        document.getElementById("volumeBtn").src="img/volume-up-4-xxl.png";}
    else {
        oldVolume=myVideo.volume;
        myVideo.volume=0;
        document.getElementById("volumeBtn").src="img/mute-xxl.png";
    }
})
document.getElementById("volumeBtn").addEventListener("mouseover", function (){
    document.getElementById("input-range").style.display="block"
});
document.getElementById("volumeBtn").addEventListener("mouseout", function () {
    document.getElementById("input-range").style.display="none"
});
document.getElementById("input-range").addEventListener("mouseover", function (){
    document.getElementById("input-range").style.display="block"
});
document.getElementById("input-range").addEventListener("mouseout", function (){
    document.getElementById("input-range").style.display="none"
});
updateVolume()
function updateVolume (){
    document.getElementById("input-range").value=myVideo.volume;
}
myVideo.onvolumechange=function (e){updateVolume();}
document.getElementById("input-range").addEventListener("change",function (){
    myVideo.volume=document.getElementById("input-range").value;
})
function LoadVideo(){
    if ( localStorage.getItem("token"))
        document.getElementById("btnSignOut").style.display="inline-block";
    else
    {
        open("skrn.html","_self")
        return false;
    }
    if (localStorage.getItem("admin"))
        document.getElementById("editButton").classList.remove("disabled");
    if ( localStorage.getItem("admin"))
        document.getElementById("btnAddVidoe").style.display="inline-block";
    var video=localStorage.getItem("selectedMovie");
    video=JSON.parse(video);
    myVideo.src=video.url;
    document.getElementById("videoTitle").innerText=video.title;
   }
function signOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("UserName");
    localStorage.removeItem("Password");
    localStorage.removeItem("admin");
    var requestOptions = {
        method: 'GET',
        headers:  {'Content-Type': 'application/json',"token":localStorage.getItem("token")},
        redirect: 'follow'
    };
    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/logout/", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.error){
                console.log(data.error)
            }
            else {
                console.log({data});
                open("skrn.html","_self");
            }
        })
        .catch(error => console.error('error', error));
    open("skrn.html","_self")
}
function toggleVideo(){
     console.log(document.querySelector('.modal'))
     var tra = document.querySelector('.modal');
     var modal = document.getElementById('id01');
    tra.classList.toggle('active');
    window.onclick = function(event) {
        if (event.target == modal) {
            tra.classList.toggle('active');
        }
    }
}
