import './App.css';
import './components/card/card.css';
import React from 'react';

//function App() {
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {number:40};      
    }
    increase =()=>{
      this.setState({number : this.state.number+1})
      console.log('increase function invoked');
      console.log(this.number);
    }
    render(){    
      return (
        <div className="App">     
            <button onClick={this.increase}>increase2</button>
            <div><p>{this.state.number}</p></div>
        </div>      
      );
    }
  }
  
export default App;
