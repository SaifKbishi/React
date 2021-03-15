import React from 'react';
import './card.css';

const Card = props =>{
 return(
  <div className={props.cardClassName}>
   <img className={props.imgClass} src={props.imgSrc} alt={props.imgAlt}></img>
   <h1>{props.title}</h1>
   <p className={props.descClass}>{props.randomDesc}</p>
   <div className={props.linksClassName}>
    <a href={props.linkTarget1} className={props.aClass}>{props.linkText1}</a>
    <a href={props.linkTarget2} className={props.aClass}>{props.linkText2}</a>
   </div>
  </div>
 );
};
export default Card;