import React, { Component } from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Link} from 'react-router-dom';
import routes from './routes'
import Header from './Header/Header'
import Search from './Body/Search/Search'
import Queue from './Body/Queue'
import Completed from './Body/Completed'
import axios from 'axios'
const url = "http://localhost:3001";

class App extends Component {

  constructor () {
    super () ;
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Header /> 
        <Switch>
            {routes}
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
