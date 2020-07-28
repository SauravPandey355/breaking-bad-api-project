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
  componentDidMount(){
    axios.get(`https://www.breakingbadapi.com/api/characters`)
    .then(res =>{
      this.setState(
        {items:res.data,
        isLoading:false,
      })
    })

  }
  setquery = (qu) => {
    this.setState({
      query : qu
    });
    if(this.state.query !== qu){
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${qu}`)
    .then(res =>{
      this.setState(
        {items:res.data,
        isLoading:false,
      })
    })}
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <Search getquery = {(q)=>{this.setquery(q)}}/>
        {this.state.isLoading ? <h1>Loading..</h1> : 
        <CharacterGrid items = {this.state.items} isLoading = {this.state.isLoading}/>
        }
      </div>  );  
  }
}

export default App;
