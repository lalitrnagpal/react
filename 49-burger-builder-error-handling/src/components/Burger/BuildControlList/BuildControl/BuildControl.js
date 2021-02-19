import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => <div className={classes.BuildControl}>
                                    <div className={classes.Label}>{props.label}</div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button 
                                        className={classes.Less} 
                                        onClick={props.deleted}
                                        disabled={props.disabled}>Less</button>
                                    &nbsp;&nbsp;
                                    <button className={classes.More} onClick={props.added}>More</button>
                                </div>;

export default buildControl;