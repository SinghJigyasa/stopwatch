import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isActive,setActive] = useState(false)
  const [ispaused, setPaused] = useState(true)
  const [time,setTime] = useState(0)

  useEffect(()=>{
      let interveal = null
    if (isActive && ispaused ===false){
      interveal = setInterval(()=>{
        setTime(time => time+10)
      },10)
    }else{
      clearInterval(interveal)
    } return ()=>clearInterval(interveal)
  },[isActive,ispaused])

  function handleStart(){
    setActive(true)
    setPaused(false)
  }

  function handlePause(){
    setPaused(!ispaused)
  }

  function handleRestart(){
    setTime(0)
    setActive(false)
  }
  const hour = Math.floor(time/360000)
 
  return (
    <div className="App">
      <div className='stopwatch'>
     <div className='digit'>
       <span>{hour}:</span>
       <span>{("0" + Math.floor(time/60000)%60).slice(-2)}:</span>
       <span>{("0" + Math.floor(time/1000)%60).slice(-2)}:</span>
       <span>{("0" + Math.floor(time/10)%100).slice(-2)}</span>
     </div>
     <div className='button'>
     {!isActive && <button className='btn' onClick={handleStart}>Start</button>}
      {isActive && <button className='btn' onClick={handlePause}>{ispaused?"Resume":"Paused"}</button>}
      {isActive &&   <button className='btn' onClick={handleRestart}>Reset</button>}
     </div>
      </div>
    </div>
  );
}

export default App;
