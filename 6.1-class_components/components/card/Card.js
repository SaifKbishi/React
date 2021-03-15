import React from 'react';
import './card.css';

//const Card = props =>{
 class Card extends React.Component{
  render(){
   return(
    <div className={this.props.cardClassName}>
     <img className={this.props.imgClass} src={this.props.imgSrc} alt={this.props.imgAlt}></img>
     <h1>{this.props.title}</h1>
     <p className={this.props.descClass}>{this.props.randomDesc}</p>
     <div className={this.props.linksClassName}>
      <a href={this.props.linkTarget1} className={this.props.aClass}>{this.props.linkText1}</a>
      <a href={this.props.linkTarget2} className={this.props.aClass}>{this.props.linkText2}</a>
     </div>
    </div>
   );
  }
 }
 
//};
export default Card;