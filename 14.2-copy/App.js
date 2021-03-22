import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Copy from "./Copy.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <Copy></Copy>
      </div>
    );
  }
}

export default App;
