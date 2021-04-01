import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const CancelRequest = () => {
 const [countries, setCountries] = useState([]);
//  const [toggle, setToggle] = useState(false);

 useEffect(() => {
  console.log('i only run once');
  const CancelToken = axios.CancelToken;  
  const source = CancelToken.source();
  const fetchData = async ()=>{
    try{
    const {data} = await axios.get(`https://restcountries.eu/rest/v2/all`, {
      cancelToken: source.token,
      });
    setCountries(data);
    }catch(err){
      if(axios.isCancel(err)){
       console.log(err.message);
      }else{
       console.log(err.message);
      }
     }
  };//fetchData function
  fetchData();
  return () => {
    source.cancel("cancelled");
  };
 }, []);
 // console.log(countries)

 const renderedCountries = countries.map((country)=>{
  return(
   <>
     <li key={country.numericCode}>{country.name}</li>
   </>
  );  
 });

 return (
  document.title="CancelRequest",
  <div className="App" >
   hello from CancelRequest
   <br/><br/>
   <div key={1}>
    { renderedCountries && JSON.stringify(countries)}    
   </div>
  </div>
  );//return
}

export default CancelRequest;
