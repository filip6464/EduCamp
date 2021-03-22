import React, {Component} from 'react';
import Post from "./Post";
import {withStyles} from "@material-ui/styles";
import {makeStyles, Paper} from "@material-ui/core";

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
    render() {
        return (
            <StyledPaper>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </StyledPaper>
        );
    }
}

export default PostsContainer;