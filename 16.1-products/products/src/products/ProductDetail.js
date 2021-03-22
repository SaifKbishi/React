import React from 'react';
import {Link} from 'react-router-dom';
import storeItems from '../store';

class ProductDetail extends React.Component{
 state = {
  data:[],
 }
 componentDidMount(){
  this.setState({data: storeItems});
 }

 render(){
  console.log(this.state.data.id);
  const id = this.state.data.id;
  return (   
    <div className="ui secondary pointing menu">
      Products
      <Link to="{`/products/id`}" className="item"> 
       Home
      </Link>
     <div className="right menu">
      <Link to="/products" className="item"> 
       Products
      </Link>
     </div>  
    </div>   
  );
 } 
}

export default ProductDetail;