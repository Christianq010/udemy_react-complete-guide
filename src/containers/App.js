import React, { Component } from 'react';
import classes from './App.scss';

import Persons from './../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      person =
          <Persons 
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}>
          </Persons>
      ;
    }

    return (
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
                    person={this.state.person}
                    clicked={this.togglePersonsHandler}/>
          {person}
        </div>
    );
  }
}

export default App;
