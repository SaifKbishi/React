import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const SimpleFetch = () => {
 const [results, setResults] = useState();
 console.log('6',results)
 console.log('i run with every render')

 useEffect(() => {
  console.log('i only run once');

  const simpleFetch = async ()=>{
   const {data} = await axios.get('https://swapi.dev/api/films/1/' );
   setResults(data);
  }; 
  simpleFetch();

 }, [results]);

 console.log('20', results);
 
 return (
    document.title="SimpleFetch",
    <div className="App" >     
     hello from SimpleFetch
     <br/><br/><br/>   
     <div>
      Tilte: {results.title}<br/> Director: {results.director}
     </div>
    </div>
  );//return
}//SimpleFetch

export default SimpleFetch;