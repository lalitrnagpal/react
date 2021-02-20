import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    componentDidMount () {
        console.log(this.props);
        // Unauthenticated Requests, don't render the route then
        // if (!this.props.auth) {
        //     this.state.history.replace('/posts');
        // }
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
            submitted: false
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                this.setState({
                    submitted: true
                });
                this.props.history.push('/posts');
            });
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            // redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                { redirect }
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;