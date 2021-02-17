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
    if ( localStorage.getItem("admin"))
        document.getElementById("btnAddVidoe").style.display="inline-block";
    var video=localStorage.getItem("selectedMovie");
    video=JSON.parse(video);
    myVideo.src=video.url;
    document.getElementById("videoTitle").innerText=video.title;

}
