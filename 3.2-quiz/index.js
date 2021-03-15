//import the react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';

if (module.hot) {
 module.hot.accept();
}

//create a react component
const App = ()=>{

 return (   
  <div style={{fontSize:40, color: '#333'}}>
   <Quiz>
   
   </Quiz>   
  </div> 
 );
 };
//show the react component and show it on screen
ReactDOM.render(
 <App/>,
 document.querySelector('#root')
);

