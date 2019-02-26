import React, { Component } from "react";
import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import Header from "./Header/Header";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>{routes}</Switch>
                </div>
            </Router>
        );
    }
}

export default App;
