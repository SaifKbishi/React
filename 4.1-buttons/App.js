import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <Button className="important"
        text="Important"/>
      <Button className="notimportant"
        text="Not Important"/>
  
    </div>

  );
}

export default App;
