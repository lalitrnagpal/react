import React from 'react';

import './Person.css';
import styled from 'styled-components';

const StyledDiv  = styled.div`
   width: 60%;
   margin: auto;
   border: 4px solid #eee;
   box-shadow: 0 4px 5px #ccc;
   background-color:MistyRose;
   padding: 16px;
   text-align: center;

   @media (min-width: 500px): {
      width: '450px'
   }
`

const Person = ( props ) => {
   return (          
      <StyledDiv>
         <p onClick={props.click}>I'm a Person named {props.name} who is {props.age} years old!</p>
         <p>The content passed is: {props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
      </StyledDiv>
   )
};

export default Person;
