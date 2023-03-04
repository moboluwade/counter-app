import React, { useState } from "react";
import InputFields from "./InputFields";

// this component accepts usuer input for time and time format
function SetTimer({setTimerFormatInput, setTimerInput, setIsTimerSet}){
    const [timer, setTimer] = useState('')
    const [timerFormat, setTimerFormat] = useState('days')
    const [isButtonActivated, setIsButtonActivated] = useState(true)

    const submit = (e) =>{
        //lift up timer value to App.js
        setTimerInput(timer)
        setTimerFormatInput(timerFormat)
        setIsTimerSet(true)
        bounceNegative()
    }

    const bounceNegative = (e) => {
        if(timer < 0){
            setIsButtonActivated(false)
        }
    }

    // takes in timer input value
    return(
        <div>
            <div className="set-timer">
                <div className="input-fields">
                    {/* <input 
                        required
                        onChange={(e)=>{setTimer(e.target.value)}}
                        className="text-field"
                        type="text"
                        placeholder= 'time in numbers'
                        value={timer}>
                    </input> */}
                    {/* <label for='#time-format'></label> */}
                    {/* <select onChange={(e)=>{setTimerFormat(e.target.value)}} 
                        className='timer-format'
                        name="time-format" 
                        id="time-format"
                        defaultValue='days'
                        value={timerFormat}>
                        <option value="days">Days</option>
                        <option value="hours">Hours</option>
                        <option value="minutes">Minutes</option>
                        <option value="seconds">Seconds</option>
                    </select> */}
                </div>
                {isButtonActivated && <button className='set-timer-button' onClick={submit}>Set Timer</button>}
            </div>
        </div>
    )
}

export default SetTimer;
