import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'Max', age: 22, id: '23ttyu'},
      {name: 'Manu', age: 27, id: '42sds'},
      {name: 'Eric', age: 32, id: '456c'},
      {name: 'Adam', age: 12, id: '456234'}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex (p => {
      return p.id === id;
    })
    const person = {
      ...this.state.person[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState( {person: persons} );
  }

  deletePersonHandler = (personsIndex) => {
    // create a new array and inherit our person array objects
    const person = [...this.state.person];
    person.splice(personsIndex, 1);
    this.setState({person: person});
  }

  render() {

    const style = {
      backgroundColor: '#4DB6AC',
      font: 'inherit',
      color: 'white',
      border: '1px solid #004D40',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.person.map((persons, index) => {
            return <Person
                    click={ () => this.deletePersonHandler(index)}
                    name={persons.name} 
                    age={persons.age} 
                    key={persons.id}
                    changed={ (event) => this.nameChangedHandler(event, persons.id)}/>
          })}
        </div>
      );

      style.backgroundColor = '#EF5350';
    }

    let classes = [];

    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is just a paragraph</p>
        <button style={style} 
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default App;
