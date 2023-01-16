import React, { useState } from "react";
import SetTimer from "./Component/SetTimer";
import ShowTimer from "./Component/ShowTimer";
import './App.css'

const App= ()=>{
  // lift timer state up
  const [timerFormatInput, setTimerFormatInput] = useState('')
  const [timerInput, setTimerInput] = useState('')
  
  return (
        <div className="app">
          <ShowTimer 
            // timer={timerInput} 
            timer={10}
            timerFormat={timerFormatInput}/>
            
          <SetTimer 
            setTimerFormatInput={setTimerFormatInput} 
            setTimerInput={setTimerInput}/>
        </div>
  );
}

export default App;
