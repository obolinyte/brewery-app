import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import { Route } from 'react-router-dom';
import Types from './Types.js';
import PartnersList from './PartnersList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path="/" component={Home}/>
       <Route path="/Types" component={Types}/>
       <Route path="/PartnersList" component={PartnersList}/>
      </div>
    );
  }
}

export default App;
