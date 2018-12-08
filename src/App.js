import React, { Component } from 'react';
import './App.css';
import Queue from './Body/Queue'
import Search from './Body/Search/Search'

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
    this.handleClose = this.handleClose.bind(this);

  }

  handleAdd () {
    this.setState({ displaySearch: true, displayQueue: false , displayCloseBtn: true, displayAddBtn: false})
  }

  handleClose () {
    this.setState({ displaySearch: false, displayQueue: true, displayCloseBtn: false, displayAddBtn: true})
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {this.state.displayAddBtn === true && <button onClick={this.handleAdd}>Add</button>}
        {this.state.displayCloseBtn === true && <button onClick={this.handleClose}>Close</button>}
        {this.state.displaySearch === true && <Search />}
        {this.state.displayQueue === true && <Queue />}
        {/* <Completed /> */}
      </div>
    );
  }
}

export default App;
