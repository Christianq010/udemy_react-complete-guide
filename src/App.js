import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'Max', age: 22},
      {name: 'Manu', age: 27},
      {name: 'Eric', age: 32}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>Hello this are the children.</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
        <button>Switch name</button>
      </div>
    );
  }
}

export default App;
