document.body.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >800||document.documentElement.scrollTop>80){
        document.getElementsByClassName("right-panel").style.padding= '300px 20px';
        document.getElementById("topNavBar").style.fontSize = "55px";
        
    } else {
        document.getElementById("contents").style.padding = "80px";
        document.getElementById("titles").style.fontSize = "35px";
    }
}
window.addEventListener("scroll",scrollFunction);