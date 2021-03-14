import React from 'react';
import Box3 from './Box3';

const Box2 = () =>{
 return(
  <div className="box" style={{background: 'white', width:520,height: 320, padding:20}}>
   <Box3 >
     hello wolrd
   </Box3>
   <Box3 >
     hello wolrd
   </Box3>
  </div>
 );
};

export default Box2;