import './App.css';
import React from 'react';
import MusicAlbum from './components/MusicAlbum/MusicAlbum';

class App extends React.Component {
  state = {
    counter:5,
};


  render(){
    return(
      <div>
        <MusicAlbum 
          tilte="1"
          artist="12"
          numberOfSongs="4"
          length="3"
          link="eeeee"
        />
        <MusicAlbum 
          tilte="12"
          artist="123"
          numberOfSongs="5"
          length="4"
          link="rrrr"
        />
        <MusicAlbum 
          tilte="3"
          artist="123"
          numberOfSongs="4"
          length="3"
          link="eeeee"
        />
        <MusicAlbum 
          tilte="4"
          artist="1234"
          numberOfSongs="4"
          length="3"
          link="eeeee"
        />
      </div>
    );
  }
  
}//App
  
export default App;
