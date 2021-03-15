import React from 'react';
import './BoxButton.css';

class BoxButton extends React.Component{
 constructor(props){
  super(props);
  this.state = {number:0};      
 }
 increase =()=>{
  if(this.state.number<10){
   this.setState({number : this.state.number+1});  
  }
  console.log('increase function invoked');
  console.log(this.state.number);
 }
 decrease =()=>{
  if(this.state.number>-10){
   this.setState({number : this.state.number-1});  
  }
  
  
  console.log('decrease function invoked');
  console.log(this.state.number);
 }

 render(){      
    return(    
     <div>
      <button className="btn" onClick={this.increase}>increase</button>
       <div className={this.state.number === 0 ? 'on': this.state.number >0 ? 'green' : 'red'}>{this.state.number}</div>
      <button className="btn" onClick={this.decrease}>decrease</button>        
     </div>        
    );  
 }
};
export default BoxButton;


