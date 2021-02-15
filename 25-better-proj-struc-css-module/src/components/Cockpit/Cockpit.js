import React from 'react';
import logo from '../../Assets/logo.svg';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    //let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }


    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{props.appTitle}</h1>
            </header>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button onClick={props.clicked} className={btnClass}>Toggle Persons</button>
            <br/><br/>
        </div>
    );
}

export default Cockpit;