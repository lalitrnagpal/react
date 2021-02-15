import React from 'react';
import logo from '../../Assets/logo.svg';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    //let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = 'greenButton';
    } else {
        btnClass = 'redButton';
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red')
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold')
    }

    return(
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React!</h1>
            </header>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button onClick={props.clicked} className={btnClass}>Toggle Persons</button>
            <br/><br/>
        </div>
    );
}

export default Cockpit;