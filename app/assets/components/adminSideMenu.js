import React from "react";
import {Divider, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        margin: '1.5rem',
        padding: '1rem'
    },
    title:{
    },
    description:{

    }
});

export default function AdminSideMenu() {
    const classes = useStyles();


    return (
        <Paper className={classes.root}>
            <Typography align="center" variant="h6" className={classes.title}>
                Admin navigation
            </Typography>
            <List component="nav" aria-label="Admin navigation">
                <ListItem button component={Link} to={"/admin/homeworks"}>
                    <ListItemText primary="Homeworks" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to={"/admin/announcements"}>
                    <ListItemText primary="Announcements" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to={"/admin/addPost"}>
                    <ListItemText primary="Add post" />
                </ListItem>
            </List>
        </Paper>
    );
}
