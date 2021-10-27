document.body.addEventListener("scroll", scrollevent());

function scrollevent(){
    if (document.body.scollTop > 50||document.documentElement.scrollTop>50){
        document.getElementById("centered").padding = "0 0 0 0";
    }
    document.getElementById("centered").style.padding = "0 0 0 0";
    confirm("triall");

}