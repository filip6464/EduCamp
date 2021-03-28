import React, {Component} from 'react';
import TitleBox from "../../components/TitleBox";
import AdminSideMenu from "../../components/AdminSideMenu";
import AdminPostContainer from "../../components/AdminPostContainer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        margin: '1.5rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '80%',
        minWidth: '80%'
    },
    content:{
        maxWidth: '80%',
        minWidth: '80%'
    },
    menu:{
        maxWidth: '20%',
        minWidth: '20%'

    }
});


export default function AddPost() {
    const classes = useStyles();

        return (
            <div >
                <TitleBox title='Add Post'/>
                <div className={classes.root}>
                    <div className={classes.content} component="div" display="flex" flexDirection="column" flexWrap="wrap">

                    </div>
                    <div className={classes.menu} component="div" display="flex" flexDirection="column" flexWrap="wrap">
                        <AdminSideMenu />
                    </div>
                </div>
            </div>
        );
    }
