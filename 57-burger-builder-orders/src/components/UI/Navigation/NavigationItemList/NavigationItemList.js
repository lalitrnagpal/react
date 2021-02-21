import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItemList.css';

const navigationItemList = () => (

    <ul className={classes.NavigationItemList}>
        <NavigationItem link='/'>Burger</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
);

export default navigationItemList;