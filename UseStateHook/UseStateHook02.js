import React, {useState} from 'react';

const UseStateHook02 = () => {
  const [{count1, count2, count3}, setCount] = useState({count1:3, count2: 7, count3: 11});//inside the useState we set the initial value of the values of the state
  //count1, count2, count3 are values of the state
  //setCount is the function that lets you update the value of the state
  /**
   * we can also have separate useState s
   * const [count1, setCount1] = useState(count1: 3);
   * const [count2, setCount2] = useState(count2: 7);
   * const [count3, setCount3] = useState(count3: 11);
   * 
   * if we want to update part of the values of state, we use the spreade operator inside the function before updating the value we want to update
   */
  // const [{seconds} , setSeconds] = useState({seconds: 60});
  // const [{minutes}, setMinutes] = useState({minutes: 1});
  // const [hours  , setHours] = useState({});

  const [{seconds, minutes,hours} , setTime ] = useState({seconds: 60,minutes: 1,hours: 0.016666 });
  // const [{}, setMinutes] = useState({minutes: 1});
  
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
    document.title="UseStateHook",
    <div className="App" >     
     hello from UseStateHook 02
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
}//SimpleFetch

export default UseStateHook02;