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
    header:{
        margin: '1rem'

    },
    textcontent:{

    }
});


export default function ContactPlate() {
    const classes = useStyles();
    return (
            <Paper className={classes.root}>
                <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                    Contact me
                </Typography>
                <Typography className={classes.header} gutterBottom variant="h5" color="textSecondary">
                    Email
                </Typography>
                <Typography className={classes.textcontent} variant="body1" color="textPrimary" component="p">
                    example@educamp.com
                </Typography>
                <Typography className={classes.header} gutterBottom variant="h5" color="textSecondary">
                    Phone number
                </Typography>
                <Typography className={classes.textcontent} variant="body1" color="textPrimary" component="p">
                    +48 731 569 854
                </Typography>
                <Typography className={classes.header} gutterBottom variant="h5" color="textSecondary">
                    Address
                </Typography>
                <Typography className={classes.textcontent} variant="body1" color="textPrimary" component="p">
                    711-2880 Nulla St.
                    Mankato Mississippi 96522
                </Typography>
            </Paper>
    );
}