import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js'; //importo la funzione Clock dal file Clock.js

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Clock country="Italia" timezone="0"/>
      </React.Fragment>
    );
  }
}

export default App;
