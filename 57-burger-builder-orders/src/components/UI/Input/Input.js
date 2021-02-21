import React from 'react';
import classes from './Input.css';

const Input = (props) => {

    let inputElement = null;
    switch(props.inputtype) {
        case('input'):
            inputElement = <input type='text' className={classes.inputElement} {...props}/>
            break;
        case('textarea'):
            inputElement = <textarea className={classes.inputElement} {...props}/>
            break;
        default:
            inputElement = <input type='text' className={classes.inputElement} {...props}/>
    }
    return (
        <div>
            <label className={classes.label} >{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;

