import React from "react";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {

        padding: '1rem',
        marginTop: '0.8rem',
        marginBottom: '1rem',
        minWidth: '45%',
        minHeight: '80%',
        maxWidth: '45%',
        maxHeight: '80%',

    },
});


export default function About() {
    const classes = useStyles();
    return (
            <Paper className={classes.root}>
                <Typography gutterBottom variant="h5" component="h2">
                    About page
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Some example text to show description of the homework. Some example text to show description of the homework. Some example text to show description of the homework.
                </Typography>
            </Paper>
    );
}