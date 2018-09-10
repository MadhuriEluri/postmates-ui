import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Customers from './components/customers/coustomers'; 
import Landing from './components/landing/landing';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Postmates</h1>
        </header>
        <Router>
        <div>
          <Route path='/Customers' component ={Customers} />
          <Route path='/Landing' component = {Landing} />
        </div>  
        </Router>
      </div>
    );
  }
}

export default App;
