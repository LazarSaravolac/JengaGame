import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
