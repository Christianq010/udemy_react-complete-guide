import React from 'react';

import Person from './Person/Person';

const persons = (props) => (
    props.mapperson.map((persons, index) => {
        return <Person
                click={ () => this.deletePersonHandler(index)}
                name={persons.name} 
                age={persons.age} 
                key={persons.id}
                changed={ (event) => this.nameChangedHandler(event, persons.id)}/>
      })
);