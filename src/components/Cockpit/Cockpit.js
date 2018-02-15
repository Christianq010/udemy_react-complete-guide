import React from 'react';

import classes from './Cockpit.scss';

const cockpit = (props) => {
    const assginedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.person.length <= 2) {
        assginedClasses.push(classes.red);
    }
    if (props.person.length <= 1) {
        assginedClasses.push(classes.bold);
    }

    return (
        <div className={classes.cockpit}>
            <h1>{props.apptitle}</h1>
                <p className={assginedClasses.join(' ')}>This is just a paragraph</p>
                <button
                    className={btnClass}
                    onClick={props.clicked}>Toggle Persons
                </button>
        </div>
    );
}

export default cockpit;