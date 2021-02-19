import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';
import classes from './Blog.css';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post', 
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                { /* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> */ }
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>

            </div>
        );
    }
}

export default Blog;