import React, { useEffect } from 'react';

import './Cockpit.css';

const cockpit = props => {

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = 'red';
  }

  if (props.personsLength <= 2) {
    assignedClasses.push('red'); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className='greenButton' onClick={props.clicked}>
        Toggle Persons
      </button>
      &nbsp;&nbsp;
      <button className='greenButton' onClick={props.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit);
