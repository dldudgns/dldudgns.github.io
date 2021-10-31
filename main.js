function scrollevent(){
    if (document.documentElement.scrollTop>500 || document.body.scrollTop>500){
        document.getElementById("titles").style.transform = "scaleY(1)";
    }
    if (document.documentElement.scrollTop>100 || document.body.scrollTop>100){
        document.getElementById("topNavBar").style.padding = "0 0 0 0";
        document.getElementById("logoName").style.fontSize="300%";
        document.getElementById("logo").style.fontSize="150%";
        
        }else {
        document.getElementById("topNavBar").style.padding = "250px 100px 250px 100px";
        document.getElementById("logoName").style.fontSize="750%";
        document.getElementById("logo").style.fontSize="200%";
        
        // confirm("");
    }
    
    
   
}