import './App.css';
import './components/card/card.css';
import React from 'react';
import BoxButton from './components/BoxButton/BoxButton';

class App extends React.Component {
  state = {favoriteColor: 'red', };

  componentDidMount() {
    setTimeout(()=>{ 
      this.setState({favoriteColor : 'green'});
      
    }, 1000);
  }

  componentDidUpdate(){
    let newText = document.querySelector('#idattr');
    newText.textContent=`The updated favorite color is ${this.state.favoriteColor}`;
  }
  
  render(){
    return(
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id='idattr'>
      </div>     
      </div>     
    );
  }
  
  
}//App
  
export default App;
