import React from "react"

function MyHeader (){
    const firstname = "Eric";
    return(
    <header className="navbar">
        <h1>
            {firstname+'\'s'} ToDo List
            </h1>
    </header>
    )
}

export default MyHeader

