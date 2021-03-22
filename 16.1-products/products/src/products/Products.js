import React from 'react';
import storeItems from '../store';
import {Link} from 'react-router-dom';

class Products extends React.Component{
state = {
 data:[],
}
componentDidMount(){
 this.setState({data: storeItems});
}

 render(){
  console.log('from products: ',this.state.data);  

  const renderProducts = ()=>{ 
   console.log(this.props)
   return this.state.data.map((product) => { 
    return(
     <Link key={product.id} to={`${this.props.location.pathname}/${product.id}`}>{product.id}: {product.title}<br/>
     <img className="pImage" alt="dvgfgs" src={product.imageUrl}/><br/>
     {product.price}$, {product.size}
     </Link>
    );
   });
  }
 
  return (
   <div>{renderProducts()}  </div>
  );
 }
}
export default Products;

