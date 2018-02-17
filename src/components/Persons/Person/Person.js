import React, {Component} from 'react';

import PropTypes from 'prop-types';

import classes from './Person.scss';

// Stateful Component
class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm { this.props.age } years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

Person.propTypes = {
    // Define proprs of this type, otherwise throw an error in console
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;