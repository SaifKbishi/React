import React from 'react';
import './Forms.css';

class Forms extends React.Component{
  state = {
   checkedCheckBox: 'checked',
 };

 render(){    
  const { input, label, ...props } = this.props;
  return(
   <div>
    <form className="theForm" > 
       <div> 
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
        <label htmlFor="vehicle1"> I have a bike</label>        
       </div>
       <div>       
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label htmlFor="vehicle2"> I have a car</label> 
       </div>
       <div>         
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" defaultChecked={this.state.checkedCheckBox}/>
        <label htmlFor="vehicle3"> I have a boat</label>
       </div>
       <div>
        <input type="checkbox" id="vehicle4" name="vehicle4" value="Big Boat" defaultChecked={this.state.checkedCheckBox}/>
        <label htmlFor="vehicle3"> I have a big boat</label>
       </div>            
    </form>
   </div>
  );  
 }
}


export default Forms;