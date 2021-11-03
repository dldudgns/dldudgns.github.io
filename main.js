function scrollevent(){
    if(document.documentElement.scrollTop<90 || document.body.scrollTop<90){
        //nav bar
        if (document.documentElement.scrollTop>80 || document.body.scrollTop>80){
            document.getElementById("topNavBar").style.padding = "0 0 0 0";
            document.getElementById("NavName").style.fontSize="300%";
            document.getElementById("NavOptions").style.fontSize="150%";
            
            }else {
            document.getElementById("topNavBar").style.padding = "20% 10% 25% 10%";
            document.getElementById("NavName").style.fontSize="750%";
            document.getElementById("NavOptions").style.fontSize="200%";
        }
    }else if (document.documentElement.scrollTop<270 || document.body.scrollTop<270){//Education in
        elementIn(0,100,title);
        elementIn(0,175,logo);
        elementIn(0,250, description);
    }else if (document.documentElement.scrollTop<720 || document.body.scrollTop<720){//Education out
        elementOut(0,550,title);
        elementOut(0,625,logo);
        elementOut(0,700,description);
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
    if(document.documentElement.scrollTop>where || document.body.scrollTop>where){
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-50px)";
    }else{
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-200%)";
    }
}

function elementOut(which, where, what){
    if(document.documentElement.scrollTop>where || document.body.scrollTop>where){
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-200%)";
    }else{
        document.getElementsByClassName(`${what}-element`)[which].style.transform = "translate(-50px)";
    }
}