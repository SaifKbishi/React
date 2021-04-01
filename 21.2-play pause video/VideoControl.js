import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const SimpleFetch = () => {
 const [results, setResults] = useState({
  title:'',
  director:'',
  episode_id:0,
 }); 
 console.log('i run with every render')

 console.log('8',results);

 useEffect(() => {
  console.log('i only run once');

  const simpleFetch = async ()=>{
   const {data} = await axios.get('https://swapi.dev/api/films/1/' );
   setResults(data);
  };//simpleFetch function
  simpleFetch();

 }, []);

 return (  
  console.log('22',results),
  console.log('23',results.title),
  console.log('24',results.director),
  document.title="SimpleFetch",
  <div className="App" >
   hello from SimpleFetch
   <br/><br/><br/>   
   <div key={results.episode_id}>
    Tilte: {results.title}<br/> Director: {results.director}
   </div>
  </div>
  );//return
}//SimpleFetch

export default SimpleFetch;