import React, {Component} from 'react';
import Post_ReactBootstrap from "./Post_ReactBootstrap";
import './PostsContainer_ReactBootstrap.css'

class PostsContainer_ReactBootstrap extends Component {
    render() {
        return (
            <div className="container postsContainer">
                <Post_ReactBootstrap />
                <Post_ReactBootstrap />
                <Post_ReactBootstrap />
                <Post_ReactBootstrap />
                <Post_ReactBootstrap />
                <Post_ReactBootstrap />
            </div>
        );
    }
}

export default PostsContainer_ReactBootstrap;