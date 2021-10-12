window.onscroll = function(event) {scrollFunction()};

function scrollFunction() {
    if (scrollY >8 || window.pageYOffset > 8){
        document.getElementById("topNavBar").style= "padding:30px";
        document.getElementById("logo").style.fontSize = "25px";
        topNavBar.addClass('shrink');
    } else {
        document.getElementById("topNavBar").style.padding = "80px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}