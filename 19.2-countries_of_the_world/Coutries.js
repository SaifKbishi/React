import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const Restcountries = () => {
 let [{term}, setTerm] = useState({term:'',});
 const [countries, setCountries] = useState([]); 
 // const [countries, setCountries] = useState({
 //  name:'',
 //  cioc:'',
 // }); 
 console.log('i run with every render');
 /** */
 // const async =()=>{
 //  const {data} = await axios.get(`https://restcountries.eu/rest/v2/name/${term}` );
 //  setCountries(data);
 // };//simpleFetch function
/** */
 console.log('9',countries);

 useEffect(() => {
  console.log('i only run once');
  const fetchData = async ()=>{
   const {data} = await axios.get(`https://restcountries.eu/rest/v2/all` );
   setCountries(data);
  };//simpleFetch function
  fetchData();
 }, []);

 const renderedCountries = countries.map((country)=>{
  return(
   <>
     <li key={country.cioc}>{country.name}</li>
   </>
  );  
 });

 const handleChange = (e)=>{
  console.log('change: ', e.target.value);
  setTerm({term : + e.target.value});
 }

 return (
  document.title="Restcountries",
  <div className="App" >
   hello from Restcountries
   <br/><br/>
   <div key={1}>
    Search: <input type="text" value={term} onChange={(e)=>handleChange(e)}/> <br/>
    {renderedCountries}
    
   </div>
  </div>
  );//return
}//Restcountries

export default Restcountries;