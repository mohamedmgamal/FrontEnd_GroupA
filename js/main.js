$(function () {
    $("html").niceScroll();
    if ( localStorage.getItem("token"))
        open("mainpage.html","_self")
})

