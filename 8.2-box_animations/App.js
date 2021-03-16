import './App.css';
import './components/card/card.css';
import React from 'react';
import BoxSlide from './components/BoxSlide/BoxSlide';

class App extends React.Component {
  
  render(){
    return(
      <div>
        <BoxSlide id="box1"/>
        <BoxSlide id="box2"/>
        <BoxSlide id="box3" />
      </div>     
    );
  }
  
}//App
  
export default App;
