import React from "react";
import {Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Form} from "react-bootstrap";

const useStyles = makeStyles({
    root: {
        padding: '2.5rem',
        marginBottom: '1rem',
        minWidth: '45%',
        minHeight: '55vh',
        maxWidth: '45%',
        maxHeight: '70vh',
        display: "flex",
        flexDirection: "row"
    },
    title:{
        marginBottom: '2rem'

    },
    formControl: {
        margin: '1rem',
        minWidth: 120,
    },
    textField: {
        margin: '1rem',
        minWidth: "30%",
    },
    selectField: {
        margin: '1rem',
        minWidth: '20%',
    },
    codeField: {
        margin: '1rem',
        minWidth: '30%',
    },
});





export default function AddPostForm(){
    const classes = useStyles();

    const [category, postType, setCategory, setPostType] = React.useState('');

    const handleChangeType = (event) => {
        setPostType(event.target.value);
        console.log("change type["+postType+"]")
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
        console.log("change category["+category+"]")
    };

    return (
        <Paper>
        <div className={classes.root}>
            <div>
                <FormControl className={classes.formControl}>
                       <TextField
                           required
                           id="outlined-required"
                           label="Title"
                           defaultValue=""
                           variant="outlined"
                       />
                </FormControl>
                <FormControl className={classes.formControl}>
                       <TextField
                           required
                           id="outlined-required"
                           label="Description"
                           defaultValue=""
                           variant="outlined"
                           multiline
                           rows={4}
                       />
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                       <InputLabel id="demo-simple-select-label">Type</InputLabel>
                       <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={postType}
                           onChange={handleChangeType}
                       >
                           <MenuItem value="Homework">Homework</MenuItem>
                           <MenuItem value="Announcement">Announcement</MenuItem>
                       </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        onChange={handleChangeCategory}
                    >
                        <MenuItem value="Grammar">Grammar</MenuItem>
                        <MenuItem value="Math">Math</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Embedded Code"
                        defaultValue=""
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </FormControl>
                <Button variant="contained" color="primary">
                    Add Post
                </Button>
            </div>
        </div>
        </Paper>
    )
}