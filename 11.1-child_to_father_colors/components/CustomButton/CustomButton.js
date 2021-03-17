import React from 'react';
import './CustomButton.css';

class CustomButton extends React.Component{
  state = {
   color:['blue', 'red', 'yellow'],
 };
/*
 onBtnClick = event =>{
  //event.preventDefault();
  this.props.onClick(this.state.color);
  console.log('color from custom',this.state.color)
 };*/

 render(){
  return(

       <div>         
        <button onClick={(e) => this.props.onChangeBtn(e.target.textContent)}
        className="btn" 
        style={{background: this.props.color}} > {this.props.color} </button>

        <label htmlFor="vehicle1"> </label>        
       </div>    
  
  );  
 }
}


export default CustomButton;