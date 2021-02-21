import React, {Component} from 'react';
import Auxilliary from '../Auxilliary/Auxilliary'
import classes from './Layout.css';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    toggleMenuHandler = () => {
        // this.setState({showSideDrawer: !this.state.showSideDrawer});
        this.setState( (prevState) => {
            return { showSideDrawer : !prevState.showSideDrawer }
        })
    }

    render() {
        return <Auxilliary>
                <Toolbar 
                    toggleMenuHandler={this.toggleMenuHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilliary>
    }
}

export default Layout;