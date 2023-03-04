import { useState } from "react";
import { useEffect } from "react";

const ShowTimer= ({timer, timerFormat, setIsTimerSet})=>{
    let timeInSeconds;
    const [remainingDays, setRemainingDays] = useState('00')
    const [remainingHours, setRemainingHours] = useState('00')
    const [remainingMinutes, setRemainingMinutes] = useState('00')
    const [remainingSeconds, setRemainingSeconds] = useState('00')

    const resetTimer = ()=>{
        setIsTimerSet(false)
    }

    switch(timerFormat){
        case 'days':
            timeInSeconds = parseInt(timer)*24*60*60
            break;
        case 'hours':
            timeInSeconds = parseInt(timer)*60*60
            break;
        case 'minutes':
            timeInSeconds = parseInt(timer)*60
            break;
        case 'seconds':
            timeInSeconds = parseInt(timer)
            break;
        default:
            console.log(timeInSeconds)
    }
    
    useEffect(()=>{
        const timerInterval = setInterval(() => {
            //calculates and sets the countdown digits
            // see if a var stores data dynamically - it does
            let dayState= Math.floor(timeInSeconds/(24*60*60));
            let hourState= Math.floor((timeInSeconds%(24*60*60))/(60*60));
            let minuteState= Math.floor((timeInSeconds%(60*60))/(60));
            let secondState = Math.floor(timeInSeconds%60);

            //padStart allows every digit to have at least 2-digits
            //but only works on strings
            setRemainingDays(dayState.toString().padStart(2, '0'))
            setRemainingHours(hourState.toString().padStart(2, '0'))
            setRemainingMinutes(minuteState.toString().padStart(2, '0'))
            setRemainingSeconds(secondState.toString().padStart(2, '0'))

            //stops countdown
            if(timeInSeconds!== 0){
                timeInSeconds--;
            }
        }, 1000);
        return () => clearInterval(timerInterval)
    },[timeInSeconds])
    
    
    return(
        <div className='show-timer'>
            <h1 className="countdown">
                <p>{remainingDays}</p>
                <p>:</p>
                <p>{remainingHours}</p>
                <p>:</p>
                <p>{remainingMinutes}</p>
                <p>:</p>
                <p>{remainingSeconds}</p>
            </h1>
            <div className="button-group">
                <button className='reset-button' onClick={resetTimer}>Reset</button>
                {/* {timeInSeconds===0 && <button className='stop-button'>Stop</button>} */}
            </div>
        </div>
    )
}

export default ShowTimer;