import React from 'react';

import './Person.css';

const Person = ( props ) => {
   return (          
      <div class="Person">          
         <p onClick={props.click}>I'm a Person named {props.name} who is {props.age} years old!</p>            
         <p>The content passed is: {props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>       
      </div>
   )
};

export default Person;
