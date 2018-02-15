import React, { Component } from 'react';
import classes from './App.scss';

import Persons from './../components/Persons/Persons';

class App extends Component {
  state = {
    person: [
      {name: 'Max', age: 22, id: '23tty'},
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

    let person = null;
    let btnClass = '';

    if (this.state.showPersons) {
      person = (
        <div>
          <Persons 
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}>
          </Persons>
        </div>
      );

    btnClass = classes.Red;

    }

    const assginedClasses = [];

    if (this.state.person.length <= 2) {
      assginedClasses.push(classes.red);
    }
    if (this.state.person.length <= 1) {
      assginedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I am a React App</h1>
          <p className={assginedClasses.join(' ')}>This is just a paragraph</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {person}
        </div>
    );
  }
}

export default App;
