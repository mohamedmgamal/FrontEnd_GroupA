var html="";
var datalist=[];
var imageList=["img/l-1.jpg","img/l-2.jpg","img/l-3.jpg","img/l-4.jpg","img/l-5.jpg","img/l-6.jpg"
    ,"img/l-7.jpg","img/l-8.jpg","img/l-9.jpg","img/l-10.jpg","img/l-11.jpg","img/l-12.jpg","img/l-13.jpg",
    "img/l-14.jpg","img/l-15.jpeg","img/l-16.jpg"];
function toggleVideo(){
    const tra = document.querySelector('.trailer');
    const video =document.querySelector('video');
    tra.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
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
 async function onloadPage(){
    if ( localStorage.getItem("token"))
       document.getElementById("btnSignOut").style.display="inline-block";
    else
    {
     open("skrn.html","_self")
     return false;
    }
    if ( localStorage.getItem("admin"))
        document.getElementById("btnAddVidoe").style.display="inline-block";
    var myHeaders = new Headers();
    myHeaders.append("token", localStorage.getItem("token"));
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/videos/", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log({data})
        data.forEach(addData)})
        .catch(error => console.log('error', error));
}
function addData(data){
    //alert(data.title)
    datalist.push(data);
  var randomNum=Math.floor(Math.random() * 16);
var imagePath=imageList[randomNum]
    console.log(randomNum)
     html+="<div class=\"movies-box\" onclick=movieSelected("+data.id+")>\n" +
         "        <!--img------------>\n" +
         "        <div class=\"movies-img\">\n" +
         "            <div class=\"quality\">HDRip</div>\n" +
         "            <a href=\"#\">\n" +
         "                <img src="+imagePath+">\n" +
         "            </a>\n" +
         "            \n" +
         "        </div>\n" +
         "        <!--text--------->\n" +
         "        <div class=\"link\">\n" +
          data.title+
         "        </div>\n" +
         "    </div>"
document.getElementById("movies-list").innerHTML=html;

}
function movieSelected(id){
    var selectedmovie;
    for (var i=0;i<datalist.length;i++)
        if (datalist[i].id==id)
            selectedmovie=datalist[i];
    localStorage.removeItem("selectedMovie")
    localStorage.setItem("selectedMovie",JSON.stringify(selectedmovie))
    open("Video_View.html","_self")
}
