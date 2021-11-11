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
    if ((getScrollVal())<1050){// Education in
        elementIn(0,1010,"title");
        elementIn(0,1020,"logo");
        elementIn(0,1035, "description");
        // confirm(getBodyScroll());
    }else if ((getScrollVal())<1161){// Education out
        elementOut(0,1095,"logo");
        elementOut(0,1100,"title");
        elementOut(0,1110,"description");
    // Internships & ONSEMI In
        elementIn(1,1115,"title");
        elementIn(1,1140,"logo");
        elementIn(0,1145,"subtitle");
        elementIn(1,1160,"description");
    }else if ((getScrollVal())<1235){
        //Upchain In
        elementIn(2,1180,"logo");
        elementIn(1,1185,"subtitle");
        elementIn(2,1195,"description");
        //Internship & ONSEMI out
        elementOut(1,1195,"title");
        elementOut(1,1210,"logo");
        elementOut(0,1215,"subtitle");
        elementOut(1,1225,"description");
        //UWaterloo In
        elementIn(3,1215,"logo");
        elementIn(2,1220,"subtitle");
        elementIn(3,1230,"description");
    }else if ((getScrollVal())<1315){
        //Upchain Out
        elementOut(2,1260,"logo");
        elementOut(1,1265,"subtitle");
        elementOut(2,1275,"description");
        //Ciena In
        elementIn(4,1250,"logo");
        elementIn(3,1255,"subtitle");
        elementIn(4,1265,"description");
        //UWaterloo Out
        elementOut(3,1290,"logo");
        elementOut(2,1300,"subtitle");
        elementOut(3,1310,"description");
    }else if ((getScrollVal())<1350){
        //Ciena Out
        elementOut(4,1330,"logo");
        elementOut(3,1335,"subtitle");
        elementOut(4,1345,"description");
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