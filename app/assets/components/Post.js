import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from './../images/post_image_example.jpg';

const useStyles = makeStyles({
    root: {
        marginTop: '0.8rem',
        marginBottom: '0.8rem',
        maxWidth: '95%',
        minWidth: '95%',

    },
    container:{
        display: 'flex',
        flexDirection: 'row',

    },
    content: {
        width: '-webkit-fill-available'
    },
    media: {
        width: '28%',
        height: '150px'
    },
});

export default function MediaCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.container}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
