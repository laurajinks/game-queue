import React, { Component } from 'react';
import './App.css';
import Queue from './Body/Queue'
import Search from './Body/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Search />
        <Queue />
        {/* <Completed /> */}
      </div>
    );
  }
}

export default App;
