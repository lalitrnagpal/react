import React from 'react';
import Person from './Person/Person';

const PersonList = (props) => props.persons.map( ( person, index ) => (
    <Person 
              name = { person.name } 
              age = { person.age } 
              clicked = { () => props.clicked( index ) }
              changed = { ( event ) => props.changed( event, person.id ) }
    />
))

export default PersonList;