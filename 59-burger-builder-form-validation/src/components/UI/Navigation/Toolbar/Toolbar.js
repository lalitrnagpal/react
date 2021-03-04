import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../Logo/Logo';
import NavigationItemList from '../NavigationItemList/NavigationItemList';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => 
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.toggleMenuHandler}></DrawerToggle>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <br/><br/>
        <nav className={classes.DesktopOnly}>
            <NavigationItemList></NavigationItemList>
        </nav>
    </header>

export default toolbar;