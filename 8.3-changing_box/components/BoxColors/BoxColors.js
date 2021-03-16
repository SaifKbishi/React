import React from 'react';
import './BoxColors.css';

class BoxColors extends React.Component{
 state = {
  classColor:'box',
  animateInterval : null,
  background: 'blue',
  counter: 0,
 };

 componentDidMount(){
  this.setState({background:'green'});
 }

 componentDidUpdate(){
  this.animateInterval = setInterval( ()=>{   
   this.setState({background: `${'#8800'+Math.floor(Math.random() * 99) + 10}` });   
  }, 500);
  this.setState((prevState, prevProps)=>{
   return {counter: prevState.counter +1};
  });
 }
//need to know how to check counter here and run componentWillUnmount
 componentWillUnmount(){
  console.log('componentWillUnmount')
  if(this.animateInterval) clearInterval(this.animateInterval);
 }
 render(){    
  return(
   <div>
    <div className={this.state.classColor} style={{background:this.state.background}}>box here</div> 
   </div>
  );  
 }
}

export default BoxColors;