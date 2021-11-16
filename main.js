function scrollevent(){
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

    if ((getScrollVal())<71){// About Me & Education in
        elementIn(0,9,"title");
        elementIn(0,30,"name");
        elementIn(0,32,"logo");
        elementIn(0,55,"subtitle");
        elementIn(1,57,"logo");
        elementIn(0,70, "description");
        // confirm(getBodyScroll());
    }else if ((getScrollVal())<161){// About Me & Education out
        elementOut(0,110,"title");
        elementOut(0,94,"name");
        elementOut(0,98,"logo");
        elementOut(0,100,"subtitle");
        elementOut(1,105,"logo");
        elementOut(0,110,"description");
    // Internships & ONSEMI In
        elementIn(1,115,"title");
        elementIn(2,140,"logo");
        elementIn(1,145,"subtitle");
        elementIn(1,160,"description");
    }else if ((getScrollVal())<235){
        //Upchain In
        elementIn(3,180,"logo");
        elementIn(2,185,"subtitle");
        elementIn(2,195,"description");
        //Internship & ONSEMI out
        elementOut(1,195,"title");
        elementOut(2,210,"logo");
        elementOut(1,215,"subtitle");
        elementOut(1,225,"description");
        //UWaterloo In
        elementIn(4,215,"logo");
        elementIn(3,220,"subtitle");
        elementIn(3,230,"description");
    }else if ((getScrollVal())<315){
        //Upchain Out
        elementOut(3,260,"logo");
        elementOut(2,265,"subtitle");
        elementOut(2,275,"description");
        //Ciena In
        elementIn(5,250,"logo");
        elementIn(4,255,"subtitle");
        elementIn(4,265,"description");
        //UWaterloo Out
        elementOut(4,290,"logo");
        elementOut(3,300,"subtitle");
        elementOut(3,310,"description");
    }else if ((getScrollVal())<350){
        //Ciena Out
        elementOut(5,330,"logo");
        elementOut(4,335,"subtitle");
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