import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';
class App extends React.Component{
  state = {
    isLoading : true,
    items : [],
    query : ''
  }
  componentDidUpdate(){
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${this.state.query}`)
    .then(res =>{
      this.setState(
        {items:res.data,
        isLoading:false,
      })
    })
    console.log(this.state.query)
  }
  setquery = (qu) => {
    this.setState({
      query : qu
    })
  }
  render(){
    return (
      <div className="container">
        <Header/>
        <Search getquery = {(q)=>{this.setquery(q)}}/>
        <h1>{this.state.query}</h1>
        <CharacterGrid items = {this.state.items} isLoading = {this.state.isLoading}/>
      </div>  );  
  }
}

export default App;
