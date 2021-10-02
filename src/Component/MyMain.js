import React from "react"

function MyMain(){
    const date = new Date();
    const hours = date.getHours();
    
    const styles = {
        color: "#FFFFFF",
        backgroundColor:"#234567",
        fontSize: "30px"

    }

    var timeOfDay
    if(hours <12){
       timeOfDay = "morning";
       styles.backgroundColor = "#87CEEB";
    }else if (hours<17){
        timeOfDay = "afternoon";
        styles.backgroundColor = "#0000FF"
    }else if (hours<21){
        timeOfDay = "evening";
        styles.backgroundColor = "#ff8c00"
    }else {
        timeOfDay = "night";
        styles.backgroundColor = "#000033"
    }

    
    return (
        <main>
            <p className="Intro" style={styles}>
            Good {timeOfDay}!
            It is about {hours%12} o'clock
            </p>
            <ol  className="listItems">
               <input type="checkbox"/> 
               <li>laundry</li>
               <input type="checkbox"/> 
                <li>grocery</li>
                <input type="checkbox"/> 
                <li>work</li>
                </ol>
        </main>
    )
}
export default MyMain