import React from "react";
import SetTimer from "./Component/SetTimer";
import ShowTimer from "./Component/ShowTimer"

const App= ()=>{
  return (
      //components: timer, set timer 
        <div>
          <ShowTimer/>
          <SetTimer/>
        </div>
  );
}

export default App;
