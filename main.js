function scrollevent(){
    // prompt(getScrollVal());
    // if(getScrollVal()<10){// || document.body.scrollTop<90){
        //nav bar
        if ((getScrollVal())>8 || (getBodyScroll())>8){
            document.getElementById("topNavBar").style.padding = "0 0 0 0";
            document.getElementById("NavName").style.fontSize="7.8vmin";
            document.getElementById("NavOptions").style.fontSize="3vmin";
            
            }else {
            document.getElementById("topNavBar").style.padding = "45vh 12vw 45vh 12vw";
            document.getElementById("NavName").style.fontSize="18vmin";
            document.getElementById("NavOptions").style.fontSize="3.2vmin";
        }
    if ((getScrollVal())<50){// Education in
        elementIn(0,10,"title");
        elementIn(0,20,"logo");
        elementIn(0,35, "description");
        // confirm(getBodyScroll());
    }else if ((getScrollVal())<150){// Education out
        elementOut(0,95,"logo");
        elementOut(0,100,"title");
        elementOut(0,105,"description");
    // Internships In
        elementIn(1,110,"title");
        elementIn(1,120,"logo");
        elementIn(0,125,"subtitle");
        elementIn(1,140,"description");
    }else if ((getScrollVal())<265){
        //Upchain In
        elementIn(2,200,"logo");
        elementIn(1,205,"subtitle");
        elementIn(2,215,"description");
        //Internship & ONSEMI out
        elementOut(1,190,"title");
        elementOut(1,210,"logo");
        elementOut(0,215,"subtitle");
        elementOut(1,230,"description");
        //UWaterloo In
        elementIn(3,240,"logo");
        elementIn(2,245,"subtitle");
        elementIn(3,255,"description");
    }else if ((getScrollVal())<300){
        //Upchain Out
        elementOut(2,280,"logo");
        elementOut(1,285,"subtitle");
        elementOut(2,295,"description");
    }
        
        
        
 
   
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