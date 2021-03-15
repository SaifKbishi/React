import React from 'react';
import './BoxButton.css';

class BoxButton extends React.Component{
 constructor(props){
  super(props);
  this.state = {show:true};      
 }
 increase =()=>{
  this.setState({show : !this.state.show});
  
  console.log('increase function invoked');
  console.log(this.state.show);
 }
 render(){    
  if(this.state.show){
    return(
      <div>
      <button className="btn" onClick={this.increase}>Show / Hide</button>
      <div className="on">ON</div>
      </div>
    );      
  }else{
    return(<div>
      <button className="btn" onClick={this.increase}>Show / Hide</button>
      <div className="off">OFF</div>
      </div>
    );
    
  }
 }
};

export default BoxButton;


