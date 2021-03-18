import './App.css';
import React from 'react';
import Spinner from './components/Spinner/Spinner';

class App extends React.Component {
  state = {time: new Date().toLocaleTimeString(),
  counter:5,
};

  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.setState((prevState)=>{
        return{counter: prevState.counter -1}
      });
    },1000);
  };

  componentWillUnmount() {
    if(this.state.counter < 0){
      console.log('hello');
      clearInterval(this.timerID);
    }    
  }

  render(){
    return(
      <div>
        {this.state.counter > 0 ?<div> <Spinner/> <div><br/>{this.state.counter}</div></div>: 'BOOM'}     
        
      </div>           
    );
  }
  
}//App
  
export default App;
