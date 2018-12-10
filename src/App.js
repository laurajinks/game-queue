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
    this.logoClick = this.logoClick.bind(this);

  }

  //Display search bar
  handleAdd () {
    this.setState({ displaySearch: true, displayQueue: false , displayCloseBtn: true, displayAddBtn: false})
  }

  //Add game from search results to Queue
  addNew (game) {
    console.log(game)
    axios.post(`${url}/api/games`, game)
    this.setState({  results: [] });
    axios.get(`${url}/api/games`);
    this.setState({ displaySearch: false, displayQueue: true, displayCloseBtn: false, displayAddBtn: true })
}

  //Close search bar
  handleClose () {
    this.setState({ displaySearch: false, displayQueue: true, displayCloseBtn: false, displayAddBtn: true })
  }

  //Show Queue when link in header is clicked
  handleQueue () {
    this.setState({ displayQueue: true, displayCompleted: false, displayAddBtn: true, displaySearch: false, displayCloseBtn: false })
  }

  //Show Completed Games when link in header is clicked
  handleCompleted () {
    this.setState({ displayQueue: false, displayCompleted: true, displayAddBtn: false, displaySearch: false, displayCloseBtn: false })
  }

  //Click on logo to return to home view
  logoClick () {
    this.setState({ displayQueue: true, displayCompleted: false, displayAddBtn: true, displaySearch: false, displayCloseBtn: false })
  }

  render() {
    return (
      <div className="App">
        <Header handleQueue={this.handleQueue}
                handleCompleted={this.handleCompleted}
                logoClick={this.logoClick} />
        {this.state.displayCloseBtn === true && <button onClick={this.handleClose} 
        className='cancelBtn'>Cancel</button>}
        {this.state.displaySearch === true && <Search addNew={this.addNew}/>}
        {this.state.displayQueue === true && <Queue handleAdd={this.handleAdd}
                                                    displayAddBtn={this.state.displayAddBtn}/>}
        {this.state.displayCompleted === true && <Completed />}
      </div>
    );
  }
}

export default App;
