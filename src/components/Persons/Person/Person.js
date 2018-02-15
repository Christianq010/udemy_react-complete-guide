import React from 'react';

import classes from './Person.scss';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} who is { props.age } years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;