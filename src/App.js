import { useState } from "react";
import "./index.css"


function App() {
  const [btnText,setBtnText] = useState("RGB Color Flipper");
  const [backgrounds, setBackgrounds] = useState("rgb(0,0,0)")

  function handleClick(){
    function randomNum(max,min)
    {
       return Math.floor(Math.random()* (max-min+1)+min);
    };
    const red= randomNum(0,255);
    const green=randomNum(0,255);
    const blue=randomNum(0,255);
    setBtnText(`rgb( ${red}, ${green}, ${blue} )`); 
    setBackgrounds(`rgb( ${red}, ${green}, ${blue} )`)
  }
  return (
       <div className = "container" style={{backgroundColor:backgrounds}} >
        <button className = "btn" onClick={handleClick} >{btnText}</button>
       </div>
    
  );
}

export default App;
