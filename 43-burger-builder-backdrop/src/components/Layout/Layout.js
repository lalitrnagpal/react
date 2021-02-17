import React from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import classes from './Layout.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'

const Layout = (props) => 
    <Auxilliary>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilliary>

export default Layout;