import React, { Component } from 'react';
import {Route, HashRouter as Router} from 'react-router-dom'
import Home from './Components/Home'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}/>
      </Router>
    );
  }
}

export default App;
