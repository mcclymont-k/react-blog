import React, { Component } from 'react';
import {Link, Route, HashRouter as Router} from 'react-router-dom'
import Home from './Components/Home'
import MenuBar from './Components/MenuBar'
import Gallery from './Components/Gallery'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
