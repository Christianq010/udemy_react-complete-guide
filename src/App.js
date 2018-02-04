import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'Max', age: 22},
      {name: 'Manu', age: 27},
      {name: 'Eric', age: 32}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState ({
      person: [
        {name: 'Wow', age: 54},
        {name: 'Much', age: 67},
        {name: 'Doge', age: 82}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event) => {
    this.setState ({
      person: [
        {name: 'Wow', age: 54},
        {name: event.target.value, age: 67},
        {name: 'Doge', age: 82}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.person.map(persons => {
            return <Person 
                    name={persons.name} 
                    age={persons.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button style={style} 
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default App;
