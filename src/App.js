import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Rules from './components/Rules';
import EditRule from './components/EditRule';
import NewRule from './components/NewRule';
import Quest from './components/Quest';   

class App extends Component {
  render() {
    return (
      <React.Fragment>      
          <Navbar/>
          <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/rules" exact component={Rules} /> 
          <Route path="/editRule" exact component={EditRule} />
          <Route path="/newRule" exact component={NewRule} />
          <Route path="/quest" exact component={Quest} />
          <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
