import React, {useState} from 'react';

let read = false;

const Text = ({aString, maxLength}) => {
 
 const mystyle = {
  width:600,
};
aString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis debitis doloribus quos ab laborum delectus odit, aliquid ipsum ullam, alias fuga velit veniam dolor consequatur ducimus deserunt nesciunt voluptas pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis debitis doloribus quos ab laborum delectus odit, aliquid ipsum ullam, alias fuga velit veniam dolor consequatur ducimus deserunt nesciunt voluptas pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis debitis doloribus quos ab laborum delectus odit, aliquid ipsum ullam, alias fuga velit veniam dolor consequatur ducimus deserunt nesciunt voluptas pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis debitis doloribus quos ab laborum delectus odit, aliquid ipsum ullam, alias fuga velit veniam dolor consequatur ducimus deserunt nesciunt voluptas pariatur!';
maxLength =150;

 const  [readmore, setReadmore] = useState(true);

 const textToDisplay = readmore ? aString.slice(0, maxLength) : aString;
 const readMoreLinkValue = (read ) ? 'Read More' : 'show Less'

 const expandText = () =>{
  setReadmore (!readmore);
  read = !read;
 }

  return (
    <div className="App" style={mystyle}>
     hello from text
     <br/><br/><br/>
      {textToDisplay}
      <span onClick={expandText} style={{background:'blue'}}> {readMoreLinkValue}</span>
    </div>
  );
}

export default Text;