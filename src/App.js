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

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.person[0].name} 
                age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} 
                age={this.state.person[1].age}
                click={this.switchNameHandler}
                changed={this.nameChangedHandler}>Hello this are the children.</Person>
        <Person name={this.state.person[2].name} 
                age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
