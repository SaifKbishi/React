import React from 'react';
import './BoxSlide.css';

class BoxSlide extends React.Component {
 state = {
  favoriteColor: 'hidden', 
  boxClass: 'hidden',
  timeout: 7000,
  boxSizeClass:'box3'
 };
 state2 = {
  favoriteColor: 'hidden', 
  boxClass: 'hidden',
  timeout: 7000,
  boxSizeClass:'box3'
 };

 componentDidMount() {
   setTimeout(()=>{ 
     this.setState({favoriteColor : 'sliding', boxClass:'sliding'}     
     );
   }, 1000);
 }

 componentDidUpdate(){
  setTimeout(()=>{ 
   this.setState({favoriteColor : 'gone now', boxClass:'hidden'});
  },  `${this.state.timeout}`);   
 }
 
 render(){
   return(
     <div>
       <h1>The box is {this.state.favoriteColor}</h1>
       <div id='idattr'></div>
       <div id='box1' className={this.state.boxClass}>BOX</div>
       <div className={`${this.state2.boxSizeClass} ${this.state.boxClass}`}>BOX</div>
     </div>     
   );
 }  
}//BoxSlide
 
export default BoxSlide;