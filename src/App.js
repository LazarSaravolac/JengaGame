import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Rules from './components/Rules';
import EditRule from './components/EditRule';

class App extends Component {
  render() {
    return (
      <React.Fragment>      
          <Navbar/>
          <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/rules" exact component={Rules} /> 
          <Route path="/editRule" exact component={EditRule} />
          <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
