import React from 'react';

const Person = (props) => {
   // return <p>I'm a Person named {props.name} who is {props.age} years old!</p>
   return (          // parenthesis for multi line now, didn't use that for single statement above
      <div>          {/* root tag */}
         <p onClick={props.click}>I'm a Person named {props.name} who is {props.age} years old! [CLICK ANYWHERE ON THIS LINE]</p>            
         <p>The content passed is: {props.children}</p>
      </div>
   )
};

export default Person;
