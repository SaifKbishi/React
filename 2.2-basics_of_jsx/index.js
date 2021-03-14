//import the react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';
if (module.hot) {
 module.hot.accept();
}
//create a react component
const App = ()=>{
const data = ["hello", "world"];
const num1 = 5;
const num2 = 6;
const string = 'I love React!';
 return ( 
  <div style={{fontSize:40, color: '#880000'}}><a href="#">Click Me</a>
    <div>1. {data[0]} {data[1]}</div>
    <div>2. {num1} + {num2} = {num1+num2}</div>
    <div>3. The string's length is {string.length}</div>
  </div>

  
  //<span></span>
 );
 };


//show the react component and show it on screen
ReactDOM.render(
 <App/>,
 document.querySelector('#root')
);

