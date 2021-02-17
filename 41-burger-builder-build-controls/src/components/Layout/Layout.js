import React from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import classes from './Layout.css';

const Layout = (props) => 
    <Auxilliary>
        <div>Toolbar, SideDrawer, Backdrop</div>,
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxilliary>
;

export default Layout;