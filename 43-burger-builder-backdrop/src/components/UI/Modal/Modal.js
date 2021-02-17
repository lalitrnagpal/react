import React from 'react';
import classes from './Modal.css';
import Auxilliary from '../../../hoc/Auxilliary'
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => 
    <Auxilliary>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
        className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', 
            opacity: props.show ? '1' : '0'
        }}>
            { props.children }        
        </div>
    </Auxilliary>

export default Modal;
