import React from "react";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        margin: '2rem',
        padding: '2.5rem',
        marginTop: '0.8rem',
        marginBottom: '1rem',
        minWidth: '45%',
        minHeight: '55vh',
        maxWidth: '45%',
        maxHeight: '70vh',
    },
    title:{
        marginBottom: '2rem'

    },
    description:{

    }
});


export default function About() {
    const classes = useStyles();
    return (
            <Paper className={classes.root}>
                <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                    About page
                </Typography>
                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                    Some example text to show description of the homework. Some example text to show description of the homework. Some example text to show description of the homework.
                </Typography>
            </Paper>
    );
}