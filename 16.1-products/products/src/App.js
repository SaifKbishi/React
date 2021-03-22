import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Products from './products/Products';
import Homepage from './products/Homepage';
import Header from './products/Header';
import ProductDetail from './products/ProductDetail';



const App = () => {


  return (
    <div className="ui container">
      
      <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" exact component={Homepage}/>        
        <Route path="/products" component={Products}/>
        <Route path="/products/:id" component={ProductDetail}/>
        {/* <Route path="/products/header" component={Header}/> */}
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
 