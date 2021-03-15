import './App.css';
import './components/card/card.css';
import Card from './components/card/Card';
import React from 'react';

//function App() {
  class App extends React.Component {
    render(){
      return (
        <div className="App">
          <div className="cards">
            <Card     
              cardClassName="card"
              imgSrc="https://picsum.photos/200/300"
              imgAlt="img01alt"
              title="A random title 01"
              randomDesc="random description 01"
              linksClassName="alink"
              linkTarget1="#"
              linkText1="Share"
              linkTarget2="#"
              linkText2="Explore"
              aClass="aClass"
            />
            <Card      
              cardClassName="card"
              imgSrc="https://picsum.photos/200/300?grayscale"
              imgAlt="img02alt"
              title="A random title 02"
              randomDesc="random description 02"
              className="alink"
              linkTarget1="#"
              linkText1="Share"
              linkTarget2="#"
              linkText2="Explore"
              aClass="aClass"
            />
            <Card      
              cardClassName="card"
              imgSrc="https://picsum.photos/200/300/?blur"
              imgAlt="img03alt"
              title="A random title 03"
              randomDesc="random description 03"
              linksClassName="alink"
              linkTarget1="#"
              linkText1="Share"
              linkTarget2="#"
              linkText2="Explore"
              aClass="aClass"
            />
          </div>
        </div>
      );
    }
  }
  
export default App;
