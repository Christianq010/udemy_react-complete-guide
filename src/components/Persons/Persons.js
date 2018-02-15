import React, {Component} from 'react';

import Person from './Person/Person';

// Stateful Component
class Persons extends Component {
    render () {
        return this.props.person.map((persons, index) => {
            return (
                <Person
                    click={ () => this.props.clicked(index)}
                    name={persons.name} 
                    age={persons.age} 
                    key={persons.id}
                    changed={ (event) => this.props.changed(event, persons.id)}>
                </Person>
            )
          })
    }
}

export default Persons;