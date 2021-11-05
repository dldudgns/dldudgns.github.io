function scrollevent(){
    // prompt(getScrollVal());
    // if(getScrollVal()<90){// || document.body.scrollTop<90){
        //nav bar
        if ((getScrollVal())>10 || (getBodyScroll())>10){
            document.getElementById("topNavBar").style.padding = "0 0 0 0";
            document.getElementById("NavName").style.fontSize="7.8vmin";
            document.getElementById("NavOptions").style.fontSize="3vmin";
            
            }else {
            document.getElementById("topNavBar").style.padding = "45vh 12vw 45vh 12vw";
            document.getElementById("NavName").style.fontSize="18vmin";
            document.getElementById("NavOptions").style.fontSize="3.2vmin";
        }
    // }
    if ((getScrollVal())<60 || (getBodyScroll())<60){// || document.body.scrollTop>80){//Education in
        elementIn(0,15,"title");
        elementIn(0,30,"logo");
        elementIn(0,40, "description");
    }
    if ((getScrollVal())<150 || (getBodyScroll())<150){// || document.body.scrollTop>80){//Education out
        elementOut(0,95,"title");
        elementOut(0,110,"logo");
        elementOut(0,120,"description");
    }
        
        
        
        // if (document.documentElement.scrollTop>100 || document.body.scrollTop>100){
        //     document.getElementsByClassName("title-element")[0].style.transform = "translate(-50px)";
        //     if (document.documentElement.scrollTop>175 || document.body.scrollTop>175){
        //         document.getElementsByClassName("logo-element")[0].style.transform = "translate(-50px)";
        //         if(document.documentElement.scrollTop>250 || document.body.scrollTop>250){
        //             document.getElementsByClassName("description-element")[0].style.transform = "translate(-50px)";
        //         }else{
        //             document.getElementsByClassName("description-element")[0].style.transform = "translate(-200%)";
        //         }
        //     }else {
        //         document.getElementsByClassName("logo-element")[0].style.transform = "translate(-200%)";
        //     }
        // } else{
        //     document.getElementsByClassName("title-element")[0].style.transform = "translate(-200%)";
        // }
        // //Education out
        // if (document.documentElement.scrollTop>550 || document.body.scrollTop>550){
        //     document.getElementsByClassName("title-element")[0].style.transform = "translate(-200%)";
        //     if (document.documentElement.scrollTop>625 || document.body.scrollTop>625){
        //         document.getElementsByClassName("logo-element")[0].style.transform = "translate(-200%)";
        //         if(document.documentElement.scrollTop>700 || document.body.scrollTop>700){
        //             document.getElementsByClassName("description-element")[0].style.transform = "translate(-200%)";
        //         }else{
        //             document.getElementsByClassName("description-element")[0].style.transform = "translate(-50px)";
        //         }
        //     }else {
        //         document.getElementsByClassName("logo-element")[0].style.transform = "translate(-50px)";
        //     }
        // } else{
        //     document.getElementsByClassName("title-element")[0].style.transform = "translate(-50px)";
        // }
 
   
}

function elementIn(which, where, what){
    if((getScrollVal())>where || (getBodyScroll())>where){// || document.body.scrollTop>80){
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-15vw)";
    }else{
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-80vw)";
    }
}

function elementOut(which, where, what){
    if((getScrollVal())>where || (getBodyScroll())>where){// || document.body.scrollTop>80){
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-80vw)";
    }else{
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-15vw)";
    }
}

function getScrollVal(){
    return 100*(document.documentElement.scrollTop/document.documentElement.clientHeight);
}

function getBodyScroll(){
    return 100*(document.body.scrollTop/document.body.clientHeight);
}