//import the react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';
if (module.hot) {
 module.hot.accept();
}
//create a react component
const App = ()=>{
 return (
  
  document.title = 'AppleSeeds React App',
  <div>hi World</div>,
  <div><a href="#">Click Me</a></div>
 );
 };


//show the react component and show it on screen
ReactDOM.render(
 <App/>,
 document.querySelector('#root')
);

