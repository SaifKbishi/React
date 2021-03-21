import React from 'react';
import axios from 'axios';
import './normalize.css';
const baseURL= 'https://api.chucknorris.io/jokes/';

class App extends React.Component{
state = {
  jokes: [],
  categories: null,
  catjoke: ''
};
  getJokes = async (term) => {
    const response =  await axios.get(`${baseURL}${term}`, {
     params:{query: term},
    });
    this.setState({jokes: response.data.value});    
  };

  getCategories = async (term) => {
    const response =  await axios.get(`${baseURL}${term}`, {
     params:{query: term},
    });
    console.log('1',response.data);
    this.setState({categories: response.data}, ()=>{console.log('2',this.state.categories)});    
  };

  //https://api.chucknorris.io/jokes/random?category=${value}`
  generateCategoryLinks = () =>{
    return this.state.categories.map((elem,i) =>  {      return <button key={i} onClick={this.funcToGetJoke}>{elem}</button>    })
  }

  funcToGetJoke = async (elem)=>{
    let catjoke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${elem.target.textContent}`);
    console.log('elem 3',elem.target.textContent, catjoke);
    this.setState({catjoke: catjoke.data.value});
  }
  hello =()=>{
  return <h3> {this.state.catjoke} </h3>
  }
  render(){
    
    return(
      <div>
     <button onClick={()=>this.getJokes('random')}>Get Jokes</button>
        <div>joke: {this.state.jokes}</div>
      <button onClick={()=>this.getCategories('categories')}>Get categories</button>
      {this.state.categories && this.generateCategoryLinks()}
      { this.hello()}
        <div>categories:</div>
      
      </div>      
    );
  }
}
export default App;

/**
 * API
 * button to get random joke
 * display the random joke
 * different categories on the screen (all of them)
 * search input display joke based on the query
 */