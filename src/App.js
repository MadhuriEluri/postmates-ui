import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Customers from './components/customers/customers'; 
import Landing from './components/landing/landing';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Postmates</h1>
        </header>
        <Router>
        <div>
          <Route exact path='/' component={Landing}/>
          <Route path='/Landing' component = {Landing} />
          <Route path='/Customers' component ={Customers} />
        </div>  
        </Router>
      </div>
    );
  }
}

export default App;
