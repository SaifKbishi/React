import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Products from './products/Products';
import Homepage from './products/Homepage';
import Header from './products/Header';
import ProductDetail from './products/ProductDetail';
import NotFound from './products/NotFound';


const App = () => {

  return (
    <div className="ui container">
      
      <BrowserRouter>      
        <Header/>
        <Switch>  
        <Route path="/" exact component={Homepage}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/products/:id" component={ProductDetail}/>
        <Route  component={NotFound}/>        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 