import React, { useState } from "react";


function SetTimer({setTimerFormatInput, setTimerInput, setIsTimerSet}){
    const [timer, setTimer] = useState('')
    const [timerFormat, setTimerFormat] = useState('days')

    const submit = (e) =>{
        //lift up timer value to App.js
        setTimerInput(timer)
        setTimerFormatInput(timerFormat)
        setIsTimerSet(true)
    }

    // takes in timer input value
    return(
        <div className="set-timer">
            <input 
                onChange={(e)=>{setTimer(e.target.value)}}
                type="text"
                value={timer}>
            </input>
            {/* <label for='#time-format'></label> */}
            <select onChange={(e)=>{setTimerFormat(e.target.value)}}
                name="time-format" 
                id="time-format"
                defaultValue='days'
                value={timerFormat}>
                <option value="days">Days</option>
                <option value="hours">Hours</option>
                <option value="minutes">Minutes</option>
                <option value="seconds">Seconds</option>
            </select>
            <button onClick={submit}>Set Timer</button>
        </div>
    )
}

export default SetTimer;