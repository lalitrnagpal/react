import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItemList from '../NavigationItemList/NavigationItemList';
import classes from './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';
import Auxilliary from '../../../../hoc/Auxilliary/Auxilliary';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    } 

    return (
        <Auxilliary>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItemList/>
                </nav>
            </div>
        </Auxilliary>
    )
};

export default sideDrawer