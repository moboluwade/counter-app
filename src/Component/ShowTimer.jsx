import { useState } from "react";
import { useEffect } from "react";

const ShowTimer= ({timer, timerFormat, setIsTimerSet})=>{
    const [remainingDays, setRemainingDays] = useState('00')
    const [remainingHours, setRemainingHours] = useState('00')
    const [remainingMinutes, setRemainingMinutes] = useState('00')
    const [remainingSeconds, setRemainingSeconds] = useState('00')
    let timeInSeconds

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
            // if(isNaN(timeInSeconds)){
            //     timeInSeconds = "00";
            // }
            setRemainingDays(Math.floor(timeInSeconds/(24*60*60)))
            setRemainingHours(Math.floor((timeInSeconds%(24*60*60))/(60*60)))
            setRemainingMinutes(Math.floor((timeInSeconds%(60*60))/(60)))
            setRemainingSeconds(Math.floor(timeInSeconds%60))
            // updateTime();
            if(timeInSeconds!== 0){
                timeInSeconds--;
                //stops countdown
            }
            
            
        }, 1000);
        return () => clearInterval(timerInterval)
    },[timeInSeconds])
    
    
    return(
        <div className='show-timer'>
            {/* {isNaN(timeInSeconds) || 0 ? 
            <div>00:00:00</div> :  */}
            <h1 className="countdown">{remainingDays}:{remainingHours}:{remainingMinutes}:{remainingSeconds}</h1>
            {/* } */}
        <div className="button-group">
            <button className='reset-button' onClick={resetTimer}>Reset</button>
            {/* {timeInSeconds===0 && <button className='stop-button'>Stop</button>} */}
        </div>
        </div>
    )
}

export default ShowTimer;