document.body.addEventListener("scroll", scrollevent());

function scrollevent(){
    if (document.body.scollTop > 50||document.documentElement.scrollTop>50){
        document.getElementById("test").className = "blue";
    }
    

}