import React, {Component} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const StyledTitleBox = withStyles({
    root: {
        width: '40%',
        justifySelf: 'center',
        margin: '3rem',
        marginBottom: '2rem',
        padding: '1.3rem',
        backgroundColor: '#fff',
        fontSize: '3.5rem',
        border: 3 ,
        borderStyle: 'dashed',
        borderColor: '#8639fb',
        borderRadius: '74px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Indie Flower'
    },
})(Paper);


class TitleBox extends Component {

    render() {
        return (
            <StyledTitleBox>
                {this.props.title}
            </StyledTitleBox>
        );
    }
}

export default TitleBox;