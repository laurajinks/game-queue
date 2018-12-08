import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Search from './Body/Search/Search'
import Queue from './Body/Queue'
import Completed from './Body/Completed'
import axios from 'axios'
const url = "http://localhost:3001";

class App extends Component {

  constructor () {
    super () ;
    this.state = {
      displayAddBtn: true,
      displayCloseBtn: false,
      displaySearch: false,
      displayQueue: true,
      displayCompleted: false
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.addNew = this.addNew.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);

  }s

  handleAdd () {
    this.setState({ displaySearch: true, displayQueue: false , displayCloseBtn: true, displayAddBtn: false})
  }

  //Add game from search results to Queue
  addNew (game) {
    console.log(game)
    axios.post(`${url}/api/games`, game)
    this.setState({  results: [] });
    axios.get(`${url}/api/games`);
    this.setState({displaySearch: false, displayQueue: true, displayCloseBtn: false, displayAddBtn: true})
}

  handleClose () {
    this.setState({ displaySearch: false, displayQueue: true, displayCloseBtn: false, displayAddBtn: true})
  }

  //Show Queue when link in header is clicked
  handleQueue () {
    this.setState({ displayQueue: true, displayCompleted: false, displayAddBtn: true })
  }

  //Show Completed Games when link in header is clicked
  handleCompleted () {
    this.setState({ displayQueue: false, displayCompleted: true, displayAddBtn: false })
  }

  render() {
    return (
      <div className="App">
        <Header handleQueue={this.handleQueue}
                handleCompleted={this.handleCompleted} />
        {this.state.displayAddBtn === true && <button className='addBtn' onClick={this.handleAdd}>Add New Game</button>}
        {this.state.displayCloseBtn === true && <button onClick={this.handleClose}>Close</button>}
        {this.state.displaySearch === true && <Search addNew={this.addNew}/>}
        {this.state.displayQueue === true && <Queue />}
        {this.state.displayCompleted === true && <Completed />}
      </div>
    );
  }
}

export default App;
