import React, { useState } from "react";
import SetTimer from "./Component/SetTimer";
import ShowTimer from "./Component/ShowTimer";
import './App.css'

const App= ()=>{
  // lift timer state up
  const [timerFormatInput, setTimerFormatInput] = useState('')
  const [timerInput, setTimerInput] = useState('')
  //control rendering
  const [isTimerSet, setIsTimerSet] = useState(false)

  
  return (
        <div className="app">
          {isTimerSet ? 
          <ShowTimer 
          timer={timerInput} 
          timerFormat={timerFormatInput}
          setIsTimerSet={setIsTimerSet}/>  
          
          :

          <SetTimer 
          setTimerFormatInput={setTimerFormatInput} 
          setTimerInput={setTimerInput}
          setIsTimerSet={setIsTimerSet}/>
        }
        </div>
  );
}

export default App;
