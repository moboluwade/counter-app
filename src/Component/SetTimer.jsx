import React, { useState } from "react";


function SetTimer(){
    const [timer] = useState('')
    const submit = () =>{

    }

    return(
        <div>
            <input type="text" value={timer}></input>
            <button onClick={submit}>Set Timer</button>
        </div>
    )
}

export default SetTimer;