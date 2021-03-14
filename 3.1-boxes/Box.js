import React from 'react';
import Box1 from './Box1';

const Box = () =>{
 return(
  <div className="box" style={{background: 'green', width:600,height: 400, padding:20}}>
    <Box1 >
     hello wolrd
    </Box1>
 </div>
 );
};

export default Box;