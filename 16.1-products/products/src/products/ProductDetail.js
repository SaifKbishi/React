import React from 'react';
import storeItems from '../store';

class Products extends React.Component{
state = { data:null,
}
componentDidMount(){
 this.setState({data: storeItems});
 const id = Number( this.props.match.params.id);
 const findProduct = storeItems.find((item) => {
  return item.id ===id;
 });
 this.setState({product: findProduct});
}

 render(){
  console.log('from products: ',this.state.data);
  console.log(this.props.match.params.id)

  return (
   <div>{this.state.data &&
   <h4  key={this.state.data.id} to={`${this.props.location.pathname}/${this.state.product.id}`}>{this.state.product.id}: {this.state.product.title}<br/>
     <img className="pImage" alt="dvgfgs" src={this.state.product.imageUrl}/><br/>
     {this.state.product.price}$, {this.state.product.size}
    </h4>}
    </div>
  );
 } 
}

export default Products;


/**
 *  Products goes here:<br/>    
    {this.state.data.map(product => (
     <h5 key={product.id} ><Link to={`/shop/${this.state.data.id}`}>{product.id}: {product.title}<br/><img src={product.imageUrl}/>{product.price}</Link></h5>
    ))}

    <p> {this.state.data && this.state.data.forEach(elem => elem.title)}<br/> </p>

 */