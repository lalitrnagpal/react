import React from 'react';

const Person = ( props ) => {
   return (          // parenthesis for multi line now, didn't use that for single statement above
      <div>          {/* root tag */}
         <p onClick={props.click}>I'm a Person named {props.name} who is {props.age} years old!</p>            
         <p>The content passed is: {props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>       {/* passing method reference so no parethesis */} 
      </div>
   )
};

export default Person;
