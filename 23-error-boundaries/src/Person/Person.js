import React from 'react';

import './Person.css';

const Person = ( props ) => {

   const rnd = Math.random();

   if (rnd > 0.7) {
      throw new Error('Something went wrong!!!');
   }

   return (          
      <div class="Person">
         <p onClick={props.click}>I'm a Person named {props.name} who is {props.age} years old!</p>
         <p>The content passed is: {props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
      </div>
   )
};

export default Person;
