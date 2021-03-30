import React, {useState} from 'react';

const Todo = () => {

 let [completed, setCompleted ] =  useState(
  [
   { id:1, name: "CSS", completed: true },
   { id:2, name: "JavaScript", completed: true },
   { id:3, name: "Learn React", completed: false },
   { id:4, name: "Learn mongoDB", completed: false },
   { id:5, name: "Learn Node JS", completed: false },
   ]
 );

 const handleClick = (id)=>{
  console.log('id here', id);
  const index = completed.findIndex((elem)=>elem.id ===id); //return the index of the clicked element that has the id
  const newArr = [...completed];
  newArr[index].completed = !newArr[index].completed
  setCompleted(newArr);

 }

 return (
    <div className="App" >
     hello from Todo
     <br/><br/><br/>

     <div>{
     completed.map((task) => {
      return <span onClick={()=>handleClick(task.id)}>{task.name}: {task.completed ? <span>&#x02713;</span> : <span>&#x02717;</span> } <br/></span> 
     })}
     
     </div>
     
    </div>
  );
}

export default Todo;