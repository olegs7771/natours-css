import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload!!.
              </p>
            </header>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
