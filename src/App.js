import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name="Chris" age="22"/>
        <Person name="Hayley" age="42">Hello this are the children.</Person>
        <Person name="Nuuk" age="21"/>
      </div>
    );
  }
}

export default App;
