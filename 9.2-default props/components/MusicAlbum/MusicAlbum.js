import React from 'react';
import './MusicAlbum .css';

class MusicAlbum extends React.Component{
 state = {
  tilte:"",
  artist:"",
  numberOfSongs:"",
  length:"",
  link:"",
 };

 render(){     
  return(
   <div>
    <div className="album">
     <p>title: {tilte}</p>
     <p>artist name: {artist}</p>
     <p>number of songs: {numberOfSongs}</p>
     <p>Length: {length}</p>
     <a href={`//${link}`} target="_blank">a song</a>
    </div>
   </div>
  );  
 }
}

MusicAlbum.defaultProps = {
 tilte:"first album",
 artist:"unknown",
 numberOfSongs:"unknown",
 length:"unknown",
 link:" ",
}

export default MusicAlbum;