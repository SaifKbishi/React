import React from "react";

class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  copyText = () => {
    const hasText = this.myRef.current.value.length > 0;

    if (hasText) {
      this.myRef.current.select();
      document.execCommand("copy");
    }
  };
  render() {
    return (
      <div>
        <label>What is the meaning of life?</label>
        <textarea ref={this.myRef}></textarea>
        <button onClick={this.copyText}>Copy</button>
      </div>
    );
  }
}
export default Copy;
