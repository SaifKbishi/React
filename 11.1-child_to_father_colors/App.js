import './App.css';
import React from 'react';
import CustomButton from './components/CustomButton/CustomButton';

class App extends React.Component {
  state = { color:'', };

createBtn = ()=>{
  const colors = ['blue', 'red', 'yellow'];
  return colors.map((color) => (
    <CustomButton onChangeBtn={this.onChangeBtn} color={color}/>
  ));
};

 onChangeBtn=(selectedColor) => {
   this.setState({color: selectedColor});

 }

  render(){
    return(
      <div>      
        <div>{this.createBtn()} </div>     
        <div>The color selected is: {this.state.color} </div>     
      </div>     
    );
  }
  
}//App
  
export default App;
