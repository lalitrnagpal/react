import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItemList.css';

const navigationItemList = () => (

    <ul className={classes.NavigationItemList}>
        <NavigationItem link='/' active >Burger</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default navigationItemList;