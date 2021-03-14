//import the react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Box from './Box';
import Box1 from './Box1';
import Box2 from './Box2';

if (module.hot) {
 module.hot.accept();
}
//create a react component
const App = ()=>{

 return (   
  <div style={{fontSize:40, color: '#880000'}}>
   <Box>
   
   </Box>   
  </div> 
 );
 };
//show the react component and show it on screen
ReactDOM.render(
 <App/>,
 document.querySelector('#root')
);

