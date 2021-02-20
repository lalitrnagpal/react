import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
//  import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {


    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={AyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from="/" to={Posts} /> */} 
                </Switch>
            </div>
        );
    }
}

export default Blog;