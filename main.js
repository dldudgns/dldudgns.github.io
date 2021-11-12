function scrollevent(){
    // prompt(getScrollVal());
    // if(getScrollVal()<10){// || document.body.scrollTop<90){
        //nav bar
        if ((getScrollVal())>8 || (getBodyScroll())>8){
            document.getElementById("topNavBar").style.padding = "1vh 0 0vh 0";
            document.getElementById("NavName").style.fontSize="7vh";
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
    }else if ((getScrollVal())<161){// Education out
        elementOut(0,95,"logo");
        elementOut(0,100,"title");
        elementOut(0,110,"description");
    // Internships & ONSEMI In
        elementIn(1,115,"title");
        elementIn(1,140,"logo");
        elementIn(0,145,"subtitle");
        elementIn(1,160,"description");
    }else if ((getScrollVal())<235){
        //Upchain In
        elementIn(2,180,"logo");
        elementIn(1,185,"subtitle");
        elementIn(2,195,"description");
        //Internship & ONSEMI out
        elementOut(1,195,"title");
        elementOut(1,210,"logo");
        elementOut(0,215,"subtitle");
        elementOut(1,225,"description");
        //UWaterloo In
        elementIn(3,215,"logo");
        elementIn(2,220,"subtitle");
        elementIn(3,230,"description");
    }else if ((getScrollVal())<315){
        //Upchain Out
        elementOut(2,260,"logo");
        elementOut(1,265,"subtitle");
        elementOut(2,275,"description");
        //Ciena In
        elementIn(4,250,"logo");
        elementIn(3,255,"subtitle");
        elementIn(4,265,"description");
        //UWaterloo Out
        elementOut(3,290,"logo");
        elementOut(2,300,"subtitle");
        elementOut(3,310,"description");
    }else if ((getScrollVal())<350){
        //Ciena Out
        elementOut(4,330,"logo");
        elementOut(3,335,"subtitle");
        elementOut(4,345,"description");
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