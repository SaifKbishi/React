import React, {useState} from 'react';

const WhatTime = () => {

 const  [time, setTime] = useState({
  seconds:60
 });

 const handleChange = (e)=>{
  console.log('changed', e.target.value);

  setTime({...time, [e.target.name]: e.target.value});
 }

  return (
    <div className="App" >
     hello from WhatTime
     <br/><br/><br/>
     Seconds <input type="number" name="seconds" value={time.seconds}      onChange={handleChange}/><br/>
     Minutes <input type="number" name="minutes" value={time.seconds/60}   onChange={handleChange}/><br/>
     Hours   <input type="number" name="hours"   value={time.seconds/3600} onChange={handleChange}/>
    </div>
  );
}

export default WhatTime;