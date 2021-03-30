import React, {useState} from 'react';

const WhatTime = () => {
  const [{seconds, minutes,hours} , setTime ] = useState({seconds: 60,minutes: 1,hours: 0.016666 });
  
  const handleSeconds = (e)=>{
    console.log('changing', e.target.value);
    setTime({seconds : e.target.value, minutes:e.target.value/60, hours:e.target.value/3600  });    
  }//handleSeconds
  const handleMinutes = (e)=>{
    console.log('changing', e.target.value);
    setTime({seconds : e.target.value*60, minutes:e.target.value, hours: e.target.value/60 });    
  }//handleMinutes
  const handleHours = (e)=>{
    console.log('changing', e.target.value);
    setTime({seconds : e.target.value*3600, minutes:e.target.value*60, hours: e.target.value });    
  }//handleHours

 return (
    document.title="WhatTime",
    <div className="App" >     
     hello from WhatTime 02
     <br/><br/>  
     <div>
     <p>seconds</p>
     <input type="number" name="seconds" value={seconds} onChange={(e)=>handleSeconds(e)}/><br/> 
     <p>minutes</p>
     <input type="number" name="minutes" value={minutes} onChange={(e)=>handleMinutes(e)}/><br/> 
     <p>hours</p>
     <input type="number" name="hours"   value={hours}   onChange={(e)=>handleHours(e)}/><br/>    
     <br/>
    
     </div>
    </div>
  );//return
}//WhatTime

export default WhatTime;