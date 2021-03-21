import React, {Component} from 'react';
import Post from "./Post";
import './PostsContainer.css'

class PostsContainer extends Component {
    render() {
        return (
            <div className="container postsContainer">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default PostsContainer;