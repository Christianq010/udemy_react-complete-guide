import React from 'react';

import Person from './Person/Person';

const persons = (props) => (
    props.person.map((persons, index) => {
        return <Person
                click={ () => props.clicked(index)}
                name={persons.name} 
                age={persons.age} 
                key={persons.id}
                changed={ (event) => props.changed(event, persons.id)}/>
      })
);

export default persons;