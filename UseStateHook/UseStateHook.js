import React, {useState} from 'react';


const UseStateHook = () => {
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

 return (
    document.title="UseStateHook",
    <div className="App" >     
     hello from UseStateHook
     <br/><br/><br/>   
     <div>
      <button      //onClick={()=> setCount1(c => c+1)} will update only count1 because we are calling setCount1 function only
       onClick={()=>
        setCount(currentState => ({
         ...currentState,
         count1: currentState.count1 + 1
        }))
       }
      >update count 1</button>
     </div>
     <div>
     <button
       onClick={()=>
        setCount(currentState => ({
         ...currentState,
         count1: currentState.count1 + 1,
         count2: currentState.count2 + 7,
        }))
       }
      >update count 1 and 2</button>
      </div>
     <div>
     <button
       onClick={()=>
        setCount(currentState => ({
         ...currentState,
         // count1: currentState.count1 + 1,
         // count2: currentState.count2 + 7,
         // count3: currentState.count3 + 11,
         count1: currentState.count1 + 1,
         count2: currentState.count1 + 4,
         count3: currentState.count1 + 10,
        }))
       }
      >update count 1 and 2 and 3</button>
      </div><br/>
      <div>
     <button
       onClick={()=>
        setCount(currentState => ({
         ...currentState,         
         count2: currentState.count2 + 10,
        }))
       }
      >update count2 ONLY</button>
      </div>
     <div>count1: {count1}</div>
     <div>count2: {count2}</div>
     <div>count3: {count3}</div>
    </div>
  );//return
}//SimpleFetch

export default UseStateHook;