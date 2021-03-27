import React from "react";
import {Link, Paper, Typography} from "@material-ui/core";
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

export default function adminSideMenu() {
    return (
            <div>
                <Paper>
                    <Typography variant="h4" color="textSecondary" align="center">
                        Navigation
                    </Typography>
                    <Link to="/admin/homeworks">
                        <Typography variant="body2" color="textSecondary" align="center">
                            Homeworks
                        </Typography>
                    </Link>
                    <Link to="/admin/announcements">
                        <Typography variant="body2" color="textSecondary" align="center">
                            Announcements
                        </Typography>
                    </Link>
                    <Link to="/admin/addPost">
                        <Typography variant="body2" color="textSecondary" align="center">
                            Add Post
                        </Typography>
                    </Link>
                </Paper>
            </div>
    );
}