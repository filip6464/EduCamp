import React, {Component} from 'react';
import Post from "./Post";
import {withStyles} from "@material-ui/styles";
import {makeStyles, Paper} from "@material-ui/core";
import axios from "axios";

const StyledPaper = withStyles({
    root: {
        minWidth: '70%',
        flexGrow: 1,
        margin: '5rem' ,
        padding: '3rem',
        paddingLeft: '6rem',
        borderRadius: 74,
        backgroundColor: '#fff'
    },
})(Paper);


class PostsContainer extends Component {

    state = {
        posts: []
    }

    GetPosts() {
        axios.get(`http://localhost:8080/api/posts.json`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        this.GetPosts();
        return (
            <StyledPaper>
                { this.state.posts.map(post => <Post title={post.title} description={post.description}/>)}
            </StyledPaper>
        );
    }
}

export default PostsContainer;