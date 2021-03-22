import React, {Component} from 'react';
import {AppBar, IconButton, Toolbar, Menu as MenuIcon, Button, Typography} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {withStyles} from "@material-ui/styles";

const useStyles = makeStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: 1
        },
        title: {
            flexGrow: 1,
            textAlign: "center"
        },
        logo: {
            maxWidth: 40,
            marginRight: '10px'
        }
    });



class Navbar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(useStyles)(Navbar);