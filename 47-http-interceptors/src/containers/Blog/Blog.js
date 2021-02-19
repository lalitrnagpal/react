import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';


class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }
    
    componentDidMount() {
        axios.get('/posts')
                .then(response => {   // slicing to 5 posts only
                    const posts = response.data.slice(0, 4);
                    // do some transformation
                    const updatedPosts =  posts.map( post => {
                        return {
                            ...post,
                            author: 'Lalit'
                        }
                    })
                    this.setState( {posts: updatedPosts} );
                }).catch(error => {
                    this.setState( {error: 'Something went wrong!'} );
                });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {

        const postdata = this.state.posts.map( post => {
                return <Post 
                            key={post.id} 
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>;
            }
        );

        return (
            <div>
                <p style={{textAlign: 'center', color: 'red'}}>{this.state.error}</p>
                <section className="Posts">
                    {postdata}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;