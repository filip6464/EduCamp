import React from "react";
import {Button, ButtonGroup, IconButton, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import {DataGrid} from "@material-ui/data-grid";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
    root: {
        padding: '2.5rem',
        marginBottom: '1rem',
        minWidth: '70%',
        minHeight: '60vh',
    },
    title:{
        marginBottom: '2rem'

    },
    description:{

    }
});

const columns = [
    { field: 'id', headerName: 'Post ID', width: 100 },
    { field: 'title', headerName: 'Title', flex: 0.3 },
    { field: 'date', headerName: 'Created at', width: 150 },
    {
        field: 'action',
        headerName: 'Action',
        renderCell: () => (
            <strong>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <IconButton color="primary">
                        <SaveIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <DeleteIcon />
                    </IconButton>
                </ButtonGroup>
            </strong>
        ), width: 180},
];

const rows = [
    { id: 1, title: 'Example post1', date: '2021-03-19', },
    { id: 2, title: 'Example post2', date: '2021-03-20', },
    { id: 3, title: 'Example post3', date: '2021-03-21', }
];



export default function AdminPostContainer() {
    const classes = useStyles();
    return (
            <Paper className={classes.root}>
                <Typography className={classes.title} gutterBottom variant="h4" component="h2">
                    List of posts
                </Typography>
                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                    Here you can manage your posts. You have the option to edit, delete or hide / show the post.
                </Typography>
                <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
            </Paper>
    );
}