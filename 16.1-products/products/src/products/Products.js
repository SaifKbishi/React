import React from 'react';
import storeItems from '../store';

class Products extends React.Component{
state = {
 data:[],
 myName: 'Saif',
}
componentDidMount(){
 this.setState({data: storeItems});
}

 render(){
  console.log('from products: ',this.state.data)
  console.log('from products:0 ',this.state.data[0])
  const pdata = this.state.data;
  return (
   <div>
    Products goes here:<br/>
    first product:<br/>
         {storeItems[0].title}

    <p> {this.state.data && this.state.data.forEach(elem => elem.title)}<br/> </p>

    </div>
  );
 } 
}

export default Products;